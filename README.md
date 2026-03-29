# Shadowrocket 設定抄考建議
[Shadowrocket(小火箭) app store超連結地址](https://apps.apple.com/hk/app/shadowrocket/id932747118)

代理分組(策略組) 使用說明
-----------------------------------------------------------
1. [首頁]向下滑即可到達[代理分組]
2. 這裏我分配了3個類型
    - [基礎] 就是只有[Default]跟[Safe]
      - [Safe] 簡單針對香港銀行 金融 股票 加密貨幣相關 如有需要可個別選用獨立/回家IP
      - [Default] 針對的是所有國際平台 在[非大陸地區]建議選擇Direct直連的[國家地區]
        - 大概就是當"本人"到[當地]為[非大陸地區], 屬於國際網絡環境[Default]就是該改為[當地] 或不經常到[大陸地區]則意味超長期於國際網絡環境, 建議設定為[Direct]
    - [應用程式] 獨立分流翻牆 獨立分配翻牆至該國家 會根據國家[Direct, url-test]是否翻牆 設定過1次後 基本上不太會更改國家選擇設定
      - 大概就是當"本人"到[當地], 網絡環境就是[當地], [當地]國家設定就會從[url-test]改為[direct] 相關軟件就會跟隨此設定即[Direct]
    - 這個很重要 [國家] 分配國家後, 可選擇當個國家[Direct, url-test]是否翻牆. 僅該國家才能用的相關軟件設定會自動翻牆, 能保證確保該程式能在一樣的網絡環境下正常執行. 建議相關設定如下:
      - 人在大陸,[中國]以外的都需要翻牆,[中國]不需要翻牆,而[Default]根據[香港]url-test自動翻牆
      - 人在港澳 [港澳]以外的都需要翻牆, [Default]根據[港澳]自動不翻牆
      - 人在台灣 [台灣]以外的都需要翻牆, [Default]改為根據[台灣]自動不翻牆
      - 人在新馬泰 [新馬泰]以外的都需要翻牆, [Default]改為根據[新馬泰]自動不翻牆
      - 人在歐美 [歐美]以外的都需要翻牆, [Default]改為根據[歐美]自動不翻牆
        
# Shadowrocket 設定
A. 首頁
-----------------------------------------------------------
  1. 全域路由: 配置(局部)

B. 配置
-----------------------------------------------------------
  1. 本地檔案:
     - [配置文件]
       - https://raw.githubusercontent.com/tszchun0915/Shadowrocket/refs/heads/main/AssignLocation.conf
         - [blackmatrix7](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Shadowrocket)規則集Rule-set大神 超齊全
  2. 配置必須打開HTTPS解密獲得證書, 3步步驟如下:
       - 1 點擊配置文件ⓘ - HTTPS解密 - 證書 - 生成新的CA證書 - 安裝證書
       - 2 手機設定 - 已下載描述文件 - 安裝
       - 3 手機設定 - 通用 - 關於手機 - 證書信任設定 - 開啟對應Shadowrocket證書信任
  3. 模組/模塊: (建議以下全部加入)
     1. [模組工具大合集]
         - https://raw.githubusercontent.com/tszchun0915/Shadowrocket/refs/heads/main/sgmoduleCompilation.sgmodule
     2. [廣告Block]
         - https://raw.githubusercontent.com/zirawell/R-Store/refs/heads/main/Rule/Surge/Adblock/All/allAdBlock.sgmodule
     3. [Youtube模塊]
         - https://yfamilys.com/module/YouTubeAd.sgmodule
       - 順帶一提
          - 你可以到這裏找[模組超齊全](https://surge.qingr.moe/)
          - Youtube模組大神[Maasea](https://github.com/Maasea/sgmodule)
          - Apple功能修整[iRingo大神](https://nsringo.github.io/) (需要BoxJs 請自行研究)
          - 雙字幕大神[Dualsubs](https://dualsubs.github.io) (需要BoxJs 請自行研究)
            
C. 資料
-----------------------------------------------------------
  1. 自動同步: 開啓

D. 設定
-----------------------------------------------------------
  1. 語言: 繁體中文
  2. 延遲測試方法: CONNECT
  3. 按需求連線:
      - 始終開啓: 開啓
      - 按需啓連線: 開啓
  4. 隧道:
      - 包括所有網絡: 開啓
  5. 代理:
      - 代理共享:
         - 啓動共享: 開啓
          - P.S. 小小教學: 相同WiFi或分享個人熱點情況下, Wi-Fi按詳情後,並滑到最底按[設定代理伺服器], 然後按[手動], 再把[代理共享]裏的[IP,埠]輸入在[伺服器,傳輸埠], 即可共用小火箭
      - 代理類型: None
      - 代理地址: 198.18.0.3
  6. TCP:
      - TLS: OpenSSL
      - 指紋: Safari15_5
      - 最大讀取長度: 4096
  7. UDP:
      - 開啓轉發: 開啓
      - 禁用STUN: 開啓
      - 超時: 30
  8. 位置: 關閉
  9. 通知: 關閉
  10. 剪貼簿: 關閉
  11. 配置:
       - 自動背景更新: 關閉
  12. 模組:
       - 自動背景更新: 開啓
       - 間隔: 7
  13. 訂閱:
       - 開啓時更新: 開啓
       - 自動背景更新: 開啓
       - 間隔: 8
       - 超時: 15
  14. GeoLite2 資料庫
       - 自動背景更新: 開啓
       - 間隔: 3
       - MaxMind: 似乎無關痛癢. 如有需要,請自行到 http://www.maxmind.com 註冊處理!
       - 國家: https://raw.githubusercontent.com/Hackl0us/GeoIP2-CN/release/Country.mmdb
       - ASN: https://raw.githubusercontent.com/P3TERX/GeoLite.mmdb/download/GeoLite2-ASN.mmdb
  15. VPN提醒: 關閉
  16. 溫和策略機制: 開啓
  17. 自動旋轉: 關閉
  18. 允許第三方鍵盤: 開啓
  19. 排除路由 0.0.0.0/31: 關閉
  20. 觸覺反饋: 開啓

E. 機場/節點
-----------------------------------------------------------
1. 僅提供簡單教學資訊 (純個人記錄使用)
    - Shadowrocket(小火箭)機場, 不是每個都能在[中國大陸以外]使用 (但確定存在些Shadowrocket(小火箭)機場在[非中國大陸地區]能用)
    - [非中國大陸地區]中,沒有[中國大陸節點], 只能借助有中國大陸居住地的家人或朋友,自行親身到他們居住地使用linux電腦搭建中國大陸節點/回國節點!
    - 如考慮[僅中國大陸使用]翻牆到外面, 可留意[Telegram群組] [機場測試論壇] 或 [機場測試排名], 甚至可以直接詢問群友們
    - 請謹記Shadowrocket群組/Module群組組皆不能提及機場
    - 尤其中國大陸的平台, Shadowrocket/機場/Module/小火箭/科學上網/梯子/模組/模塊皆不能提及
   
2. 如有需求請自費尋找/研究/搭建使用, 無論結果如何都與本人無關.
   - google搜尋, 建議如下
     - [小火箭機場]
     - [小火箭節點]
     - [Shadowrocket機場]
     - [Shadowrocket節點]
     - [科學上網機場]
     - [科學上網節點]
   - 自行搭建[數據中心]獨立IP節點
     - 可以搜尋[google vps免費搭建], [vps免費搭建], [sing-box 節點 搭建 腳本 github]
   - 自行搭建[家庭回家]獨立IP節點
     - [極具行動力]選擇: 問AI[樹莓派5 4GB 搭建shadowrocket節點]
     - 由於昂貴的[deeper connect]系列, 它的[回家節點]不適用於Shadowrocket, 因此這裏是不推介購買!
   - 機場節點轉換訂閱 (自行搭建節點需要)
     - https://sub-zh.vercel.app/
     - https://bianyuan.xyz/
   - singbox 一鍵腳本教學例子 (個人建議Ubuntu 24.04系統, "FinalShell"軟件打開 & 幾乎所有代理軟件支持連接)
     - https://github.com/fscarmen/sing-box
     - https://github.com/mack-a/v2ray-agent
     - https://github.com/sdken/sing-box_hysteria2_tuic_argo_reality
     - https://github.com/fscarmen/sing-box
     - https://github.com/yonggekkk/sing-box-yg
     - https://github.com/eooce/Sing-box
     - https://github.com/233boy/sing-box/wiki/sing-box%E4%B8%80%E9%94%AE%E5%AE%89%E8%A3%85%E8%84%9A%E6%9C%AC
     - https://github.com/Misaka-blog/sing-shadowtls-3
     - https://github.com/vveg26/sing-box-reality-hysteria2
     - https://lucklog.cc/archives/eb5DsMCC
     - https://runtufenxiang.org/8881/
     - https://www.v2ray-agent.com/archives/1682491479771
     - https://www.luv9.cn/archives/lTgFOoO0
     - https://hxch.net/vless/.html
     - https://kejilaowang.com/sing-box-tuic-hy2/
     - https://blog.free8.org/2024/08/sing-box.html
