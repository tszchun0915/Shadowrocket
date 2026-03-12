/**************************

嗶哩嗶哩(白圖示外區版), 港澳台番劇自動切換地區 & 顯示豆瓣評分

如需停用豆瓣評分或策略通知, 可前往BoxJs設定.
BoxJs訂閱地址: https://raw.githubusercontent.com/NobyDa/Script/master/NobyDa_BoxJs.json

Update: 2023.02.11
Author: @NobyDa

****************************
港澳台自動切換地區說明 :
****************************

地區自動切換功能僅適用於Surge4.7+(iOS)，Loon2.1.10(286)+，QuanX1.0.22(543)+
低於以上版本僅顯示豆瓣評分.

您需要設定相關規則集:
Surge、Loon: 
https://raw.githubusercontent.com/NobyDa/Script/master/Surge/Bilibili.list

QuanX: 
https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/Bilibili.list

綁定相關select或static策略群組，並且需要具有相關的區域代理伺服器納入您的子策略中，子策略可以是伺服器也可以是其他區域策略群組．
最後，您可以透過BoxJs設定策略名和子策略名，或手動填入腳本.

如需搜尋指定地區番劇, 可在搜尋框中新增後綴" 港", " 台", " 中". 例如: 進擊的巨人 港

QX使用者註: 使用切換地區功能請確保您的QX=>其他設定=>溫和策略機制處於關閉狀態, 以及填寫策略名稱和子策略名稱時注意大小寫.

****************************
Surge 4.7+ 遠端腳本配置 :
****************************
[Script]
Bili Region = type=http-response,pattern=^https:\/\/ap(p|i)\.bili(bili|api)\.(com|net)\/(pgc\/view\/v\d\/app\/season|x\/offline\/version)\?,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Bili_Auto_Regions.js

#可選, 適用於搜尋指定地區的番劇
Bili Search = type=http-request,pattern=^https:\/\/ap(p|i)\.bili(bili|api)\.(com|net)\/x\/v\d\/search(\/type)?\?.+?%20(%E6%B8%AF|%E5%8F%B0|%E4%B8%AD)&,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Bili_Auto_Regions.js

[MITM]
hostname = ap?.bili*i.com, ap?.bili*i.net

****************************
Quantumult X 遠端腳本配置 :
****************************
[rewrite_local]
^https:\/\/ap(p|i)\.bili(bili|api)\.(com|net)\/(pgc\/view\/v\d\/app\/season|x\/offline\/version)\? url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Bili_Auto_Regions.js

#可選, 適用於搜尋指定地區的番劇
^https:\/\/ap(p|i)\.bili(bili|api)\.(com|net)\/x\/v\d\/search(\/type)?\?.+?%20(%E6%B8%AF|%E5%8F%B0|%E4%B8%AD)& url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Bili_Auto_Regions.js

[mitm]
hostname = ap?.bili*i.com, ap?.bili*i.net

[filter_local]
可選, 由於qx純tun特性, 不添加規則可能會導致腳本失效.. https://github.com/NobyDa/Script/issues/382
ip-cidr, 203.107.1.1/24, reject

****************************
Loon 遠端腳本配置 :
****************************
[Script]
http-response ^https:\/\/ap(p|i)\.bili(bili|api)\.(com|net)\/(pgc\/view\/v\d\/app\/season|x\/offline\/version)\? script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Bili_Auto_Regions.js, requires-body=true, tag=bili自动地区

#可選, 適用於搜尋指定地區的番劇
http-request ^https:\/\/ap(p|i)\.bili(bili|api)\.(com|net)\/x\/v\d\/search(\/type)?\?.+?%20(%E6%B8%AF|%E5%8F%B0|%E4%B8%AD)& script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Bili_Auto_Regions.js, tag=bili自动地区(搜索)

[Mitm]
hostname = ap?.bili*i.com, ap?.bili*i.net

***************************/

let $ = nobyda();
let run = EnvInfo();

async function SwitchRegion(title, url, body) {
    const CN_GROUP = '🇨🇳 China';          // CN 策略組名稱
    const HK_GROUP = '🇭🇰 HongKong';
    const TW_GROUP = '🇹🇼 Taiwan';
    const DF_GROUP = $.read('BiliArea_DF') || 'BiliArea_DF';  // 後備 Group，可自訂

    // WiFi 黑名單（關閉地區切換），逗號分隔
    const off = $.read('BiliArea_disabled') || '';

    // 讀取目前各 Group 的策略（用戶手動選的）
    const currentCN = await $.getPolicy(CN_GROUP);
    const currentHK = await $.getPolicy(HK_GROUP);
    const currentTW = await $.getPolicy(TW_GROUP);

    let select = {};  // 要切換的 {group: 'xxx', policy: 'yyy', mode: 'zzz'}

    let matchedRegions = [];  // 收集匹配到的地區資訊

    // 檢測港區
    if (/\u6e2f[\u4e00-\u9fa5]+\u5340|%20%E6%B8%AF&/.test(title || url)) {
        matchedRegions.push({ region: 'HK', group: HK_GROUP, policy: currentHK, mode: '香港' });
    }

    // 檢測台區（獨立，不用 else）
    if (/\u53f0[\u4e00-\u9fa5]+\u5340|%20%E5%8F%B0&/.test(title || url)) {
        matchedRegions.push({ region: 'TW', group: TW_GROUP, policy: currentTW, mode: '台湾' });
    }

    let chtMatch = title && title.split('').some(v => zhHans().includes(v));  // 簡體匹配（假設 zhHans() 已定義）

    if (body.code === -404 || chtMatch) {
        // 404 或簡體 → 後備
        select = { group: DF_GROUP, policy: 'DIRECT', mode: '后备' };
        console.log('匹配到 -404 或簡體，切換到後備 DIRECT');
    } 
    else if (matchedRegions.length > 0) {
        // 有匹配到港澳台地區

        // 先找有沒有 DIRECT
        const directOnes = matchedRegions.filter(r => r.policy === 'DIRECT');

        if (directOnes.length > 0) {
            // 有 DIRECT → 優先尊重 DIRECT，不切換（避免強制走代理）
            select = {};  
            console.log('多地區匹配，但有 DIRECT 設定，保持原策略不切換');
        } else {
            // 全部都不是 DIRECT → 按優先順序選 url-test
            // 優先順序：HK > TW（可自行調整順序）
            const priorityOrder = ['HK', 'TW'];
            for (let pri of priorityOrder) {
                const found = matchedRegions.find(r => r.region === pri);
                if (found) {
                    select = { group: found.group, policy: found.policy, mode: found.mode };
                    console.log(`無 DIRECT，切換到 ${found.mode} (${found.policy})`);
                    break;
                }
            }
        }
    } else {
        // 沒匹配到港澳台 → 預設 CN
        if (currentCN !== 'DIRECT') {
            select = { group: CN_GROUP, policy: currentCN, mode: '直连' };
            console.log(`預設切換到 CN (${currentCN})`);
        } else {
            console.log('CN 已設 DIRECT，保持不變');
        }
    }

    // QuanX 避免迴圈（原邏輯保留）
    if ($.isQuanX && currentCN === 'direct' && select.policy === 'DIRECT') {
        select = {};
    }

    // WiFi 黑名單檢查（原邏輯，假設你有 WiFi 判斷代碼；如果沒有可忽略或補上）
    // if (off && /* 你的 WiFi 名稱檢查 */) {
    //     select = {};
    //     console.log('WiFi 在黑名單，禁用地區切換');
    // }

    return select;
})()

	if (area.policy && !off.includes($.ssid || undefined)) {
		const change = await $.setPolicy(Group, area.policy);
		const msg = (() => {
			if (change && typeof current !== 'number') {
				return `${current} ➤ ${area.policy}`;
			} else if (current === 2) {
				return `策略組名未填寫或填寫有誤 ⚠️`
			} else if (current === 3) {
				return `不支持您的VPN應用版本 ⚠️`
			} else if (change === 0) {
				return `子策略名未填寫或填寫有誤 ⚠️`
			} else {
				return `未知錯誤 ⚠️`
			}
		})()
		if ($.read('BiliAreaNotify') === 'true') {
			console.log(`${title || ''}\n模式: 策略組使用"${area.mode}"子策略\n走向: ${msg}`);
		} else {
			$.notify(title || '', ``, `模式: 策略組使用"${area.mode}"子策略\n走向: ${msg}`);
		}
		if (change) {
			return true;
		}
	}
	return false;
}

function EnvInfo() {
	const url = $request.url;
	if (typeof ($response) !== 'undefined') {
		const raw = JSON.parse($response.body || "{}");
		const data = raw.data || raw.result || {};
		const title = [data.title, data.series && data.series.series_title, data.season_title]
			.filter(c => /\u5340\uff09/.test(c))[0] || data.title;
		SwitchRegion(title, null, raw)
			.then(s => s ? $done({
				status: $.isQuanX ? "HTTP/1.1 307" : 307,
				headers: {
					Location: url
				},
				body: "{}"
			}) : QueryRating(raw, data));
	} else {
		const res = {
			url: url.replace(/%20(%E6%B8%AF|%E5%8F%B0|%E4%B8%AD)&/g, '&')
		};
		SwitchRegion(null, url, {}).then(() => $done(res));
	}
}

async function QueryRating(body, play) {
	try {
		const ratingEnabled = $.read('BiliDoubanRating') === 'false';
		if (!ratingEnabled && play.title && body.data && body.data.badge_info) {
			const [t1, t2] = await Promise.all([
				GetRawInfo(play.title.replace(/\uff08[\u4e00-\u9fa5]+\u5340\uff09/, '')),
				GetRawInfo(play.origin_name)
			]);
			const exYear = body.data.publish.release_date_show.split(/^(\d{4})/)[1];
			const info1 = (play.staff && play.staff.info) || '';
			const info2 = (play.actor && play.actor.info) || '';
			const info3 = (play.celebrity && play.celebrity.map(n => n.name).join('/')) || '';
			const filterInfo = [play.title, play.origin_name, info1 + info2 + info3, exYear];
			const [rating, folk, name, id, other] = ExtractMovieInfo([...t1, ...t2], filterInfo);
			const limit = JSON.stringify(body.data.modules)
				.replace(/"\u53d7\u9650"/g, `""`).replace(/("area_limit":)1/g, '$10');
			body.data.modules = JSON.parse(limit);
			body.data.detail = body.data.new_ep.desc.replace(/連載中,/, '');
			body.data.badge_info.text = `⭐️ 豆瓣：${!$.is403 ? `${rating || '無評'}分 (${folk || '無評價'})` : `查詢頻繁！`}`;
			body.data.evaluate = `${body.data.evaluate || ''}\n\n豆瓣評分搜尋結果: ${JSON.stringify(other, 0, 1)}`;
			body.data.new_ep.desc = name;
			body.data.styles.unshift({
				name: "⭐️ 點擊此處開啟豆瓣劇集詳情頁",
				url: `https://m.douban.com/${id ? `movie/subject/${id}/` : `search/?query=${encodeURI(play.title)}`}`
			});
		}
	} catch (err) {
		console.log(`Douban rating: \n${err}\n`);
	} finally {
		$done({
			body: JSON.stringify(body)
		});
	}
}

function ExtractMovieInfo(ret, fv) {
	const sole = new Set(ret.map(s => JSON.stringify(s))); //delete duplicate
	const f1 = [...sole].map(p => JSON.parse(p))
		.filter(t => {
			t.accuracy = 0;
			if (t.name && fv[0]) { //title
				if (t.name.includes(fv[0].slice(0, 4))) t.accuracy++;
				if (t.name.includes(fv[0].slice(-3))) t.accuracy++;
			}
			if (t.origin && fv[1]) { //origin title
				if (t.origin.includes(fv[1].slice(0, 4))) t.accuracy++;
				if (t.origin.includes(fv[1].slice(-3))) t.accuracy++;
			}
			if (t.pd && fv[2]) { //producer or actor
				const len = t.pd.split('/').filter(c => fv[2].includes(c));
				t.accuracy += len.length;
			}
			if (t.year && fv[3] && t.year == fv[3]) t.accuracy++; //year
			return Boolean(t.accuracy);
		});
	let x = {}; //assign most similar
	const f2 = f1.reduce((p, c) => c.accuracy > p ? (x = c, c.accuracy) : p, 0);
	return [x.rating, x.folk, x.name, x.id, f1];
}

function GetRawInfo(t) {
	let res = [];
	let st = Date.now();
	return new Promise((resolve) => {
		if (!t) return resolve(res);
		$.get({
			url: `https://www.douban.com/search?cat=1002&q=${encodeURIComponent(t)}`,
			headers: {
				'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15',
				'Cookie': JSON.stringify(st)
			}
		}, (error, resp, data) => {
			if (error) {
				console.log(`Douban rating: \n${t}\nRequest error: ${error}\n`);
			} else {
				if (/\u767b\u5f55<\/a>\u540e\u91cd\u8bd5\u3002/.test(data)) $.is403 = true;
				let s = data.replace(/\n| |&#\d{2}/g, '')
					.match(/\[(\u7535\u5f71|\u7535\u89c6\u5267)\].+?subject-cast\">.+?<\/span>/g) || [];
				for (let i = 0; i < s.length; i++) {
					res.push({
						name: s[i].split(/\}\)">(.+?)<\/a>/)[1],
						origin: s[i].split(/\u540d:(.+?)(\/|<)/)[1],
						pd: s[i].split(/\u539f\u540d.+?\/(.+?)\/\d+<\/span>$/)[1],
						rating: s[i].split(/">(\d\.\d)</)[1],
						folk: s[i].split(/(\d+\u4eba\u8bc4\u4ef7)/)[1],
						id: s[i].split(/sid:(\d+)/)[1],
						year: s[i].split(/(\d+)<\/span>$/)[1]
					})
				}
				let et = ((Date.now() - st) / 1000).toFixed(2);
				console.log(`Douban rating: \n${t}\n${res.length} movie info searched. (${et} s)\n`);
			}
			resolve(res);
		})
	})
}

function nobyda() {
	const isHTTP = typeof $httpClient != "undefined";
	const isLoon = typeof $loon != "undefined";
	const isQuanX = typeof $task != "undefined";
	const isSurge = typeof $network != "undefined" && typeof $script != "undefined";
	const ssid = (() => {
		if (isQuanX && typeof ($environment) !== 'undefined') {
			return $environment.ssid;
		}
		if (isSurge && $network.wifi) {
			return $network.wifi.ssid;
		}
		if (isLoon) {
			return JSON.parse($config.getConfig()).ssid;
		}
	})();
	const notify = (title, subtitle, message) => {
		console.log(`${title}\n${subtitle}\n${message}`);
		if (isQuanX) $notify(title, subtitle, message);
		if (isHTTP) $notification.post(title, subtitle, message);
	}
	const read = (key) => {
		if (isQuanX) return $prefs.valueForKey(key);
		if (isHTTP) return $persistentStore.read(key);
	}
	const adapterStatus = (response) => {
		if (!response) return null;
		if (response.status) {
			response["statusCode"] = response.status;
		} else if (response.statusCode) {
			response["status"] = response.statusCode;
		}
		return response;
	}
	const getPolicy = (groupName) => {
		if (isSurge) {
			if (typeof ($httpAPI) === 'undefined') return 3;
			return new Promise((resolve) => {
				$httpAPI("GET", "v1/policy_groups/select", {
					group_name: encodeURIComponent(groupName)
				}, (b) => resolve(b.policy || 2))
			})
		}
		if (isLoon) {
			if (typeof ($config.getPolicy) === 'undefined') return 3;
			const getName = $config.getPolicy(groupName);
			return getName || 2;
		}
		if (isQuanX) {
			if (typeof ($configuration) === 'undefined') return 3;
			return new Promise((resolve) => {
				$configuration.sendMessage({
					action: "get_policy_state"
				}).then(b => {
					if (b.ret && b.ret[groupName]) {
						resolve(b.ret[groupName][1]);
					} else resolve(2);
				}, () => resolve());
			})
		}
	}
	const setPolicy = (group, policy) => {
		if (isSurge && typeof ($httpAPI) !== 'undefined') {
			return new Promise((resolve) => {
				$httpAPI("POST", "v1/policy_groups/select", {
					group_name: group,
					policy: policy
				}, (b) => resolve(!b.error || 0))
			})
		}
		if (isLoon && typeof ($config.getPolicy) !== 'undefined') {
			const set = $config.setSelectPolicy(group, policy);
			return set || 0;
		}
		if (isQuanX && typeof ($configuration) !== 'undefined') {
			return new Promise((resolve) => {
				$configuration.sendMessage({
					action: "set_policy_state",
					content: {
						[group]: policy
					}
				}).then((b) => resolve(!b.error || 0), () => resolve());
			})
		}
	}
	const get = (options, callback) => {
		if (isQuanX) {
			options["method"] = "GET";
			$task.fetch(options).then(response => {
				callback(null, adapterStatus(response), response.body)
			}, reason => callback(reason.error, null, null))
		}
		if (isHTTP) {
			if (isSurge) options.headers['X-Surge-Skip-Scripting'] = false;
			$httpClient.get(options, (error, response, body) => {
				callback(error, adapterStatus(response), body)
			})
		}
	}
	return {
		getPolicy,
		setPolicy,
		isSurge,
		isQuanX,
		isLoon,
		notify,
		read,
		ssid,
		get
	}
}
