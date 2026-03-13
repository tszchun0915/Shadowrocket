const fs = require('fs');
const path = require('path');

// 要合併的 11 個檔案（按你給的路徑）
const sourceFiles = [
  'C:\\Users\\User\\Downloads\\dompling.boxjs.json',
  'C:\\Users\\User\\Downloads\\box.json',
  'C:\\Users\\User\\Downloads\\zZPiglet.boxjs.json',
  'C:\\Users\\User\\Downloads\\toulanboy.boxjs.json',
  'C:\\Users\\User\\Downloads\\syzzzf.box.json',
  'C:\\Users\\User\\Downloads\\lowking.boxjs.json',
  'C:\\Users\\User\\Downloads\\evilbutcher.boxjs.json',
  'C:\\Users\\User\\Downloads\\vei.boxjs.json',
  'C:\\Users\\User\\Downloads\\chavy.boxjs.json',
  'C:\\Users\\User\\Downloads\\box.js.json',
  'C:\\Users\\User\\Downloads\\NobyDa_BoxJs.json',
];

// 合併後輸出的檔案
const outputFile = 'C:\\Users\\User\\Downloads\\merged.boxjs.json';

// 合併結果的基礎信息（可按需要改）
const merged = {
  id: 'merged.app.sub',
  name: 'Merged BoxJS 11-in-1',
  author: '@User',
  icon: '',
  repo: '',
  apps: [],
  task: [],
};

const appMap = new Map();   // key: app.id, value: app object
const taskSet = new Set();  // 用 config 去重

for (const file of sourceFiles) {
  if (!fs.existsSync(file)) {
    console.warn(`找不到檔案，略過：${file}`);
    continue;
  }

  try {
    const raw = fs.readFileSync(file, 'utf8');
    const json = JSON.parse(raw);

    // 合併 apps（按 id 去重）
    if (Array.isArray(json.apps)) {
      for (const app of json.apps) {
        if (!app || !app.id) continue;
        if (!appMap.has(app.id)) {
          appMap.set(app.id, app);
        } else {
          // 如果想優先後面的檔案，可以改為覆蓋：
          // appMap.set(app.id, app);
        }
      }
    }

    // 合併 task（按 config 去重）
    if (Array.isArray(json.task)) {
      for (const t of json.task) {
        if (!t || typeof t.config !== 'string') continue;
        if (!taskSet.has(t.config)) {
          taskSet.add(t.config);
          merged.task.push(t);
        }
      }
    }
  } catch (e) {
    console.error(`讀取或解析失敗：${file}`, e.message);
  }
}

// 把 Map 轉回陣列
merged.apps = Array.from(appMap.values());

// 輸出結果
fs.writeFileSync(outputFile, JSON.stringify(merged, null, 2), 'utf8');
console.log(`已合併完成，寫入：${outputFile}`);
console.log(`共 ${merged.apps.length} 個 apps，${merged.task.length} 條 task（如有）。`);
