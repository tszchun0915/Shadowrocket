# Shadowrocket 設定參考建議

下載地址
app store: https://apps.apple.com/hk/app/shadowrocket/id932747118

A. 首頁
-----------------------------------------------------------
  1. 全域路由: 配置(局部)

B. 配置
-----------------------------------------------------------
  1. 模組/模塊: (建議以下全部加入)
     - https://raw.githubusercontent.com/tszchun0915/Shadowrocket/refs/heads/main/YTMod.Module
     - https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/Plugin2Rocket.srmodule
     - https://raw.githubusercontent.com/tszchun0915/Shadowrocket/refs/heads/main/ModuleCompilation.module
     - https://raw.githubusercontent.com/zirawell/R-Store/refs/heads/main/Rule/Surge/Adblock/All/allAdBlock.sgmodule
     - http://script.hub/file/_start_/https://kelee.one/Tool/Loon/Lpx/Block_HTTPDNS.lpx/_end_/Block_HTTPDNS.sgmodule?type=loon-plugin&target=shadowrocket-module&del=true&jqEnabled=true
  2. 本地檔案:
     - https://raw.githubusercontent.com/tszchun0915/Shadowrocket/refs/heads/main/AssignLocation.conf
  3. 配置必須打開HTTPS解密獲得證書, 3步步驟如下:
       - 1 點擊配置文件ⓘ - HTTPS解密 - 證書 - 生成新的CA證書 - 安裝證書
       - 2 手機設定 - 已下載描述文件 - 安裝
       - 3 手機設定 - 通用 - 關於手機 - 證書信任設定 - 開啟對應Shadowrocket證書信任

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

E. BoxJS 使用設定教學
-----------------------------------------------------------
模塊 - [Module合集] 已包括BoxJS, 請務必下載並啓用Module, 然後開啓Shadowrocket連線,然後步驟如下:
1. 前往 https://boxjs.com
2. 點擊底部[訂閱]
3. 點擊[添加訂閱]
4. 輸入 https://raw.githubusercontent.com/NobyDa/Script/master/NobyDa_BoxJs.json 並保存
5. 這樣已經設定完成基礎了, 請點擊底部[應用]根據需求自行設定.
   - 在網址右手邊可以點擊[...],後按分享, 可以[加入主畫面], 桌面就會有個快捷鍵小程式了
   - [應用]>[內置應用]>[靜默運行]: 開啓
   - 弄好[應用]設定後, 右上角[≡]開啓, 認為界面會變得更簡化
     - [勿擾模式]
     - [不顯示查詢警告]
     - [隱藏幫助按鈕]
     - [隱藏懸浮按鈕]
     - [隱藏我的標題]
     - [隱藏編碼按鈕]
   - 更多資源: https://docs.boxjs.app/awesome/subscriptions
   - 更多教學: https://docs.boxjs.app/awesome/videos

F. 機場/節點
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
     - [具行動力]之選擇: [google vps免費搭建]
     - [極具行動力]選擇: [vps免費搭建]
   - 自行搭建[家庭回家]獨立IP節點
     - [極具行動力]選擇: 問AI[樹莓派5 4GB 搭建shadowrocket節點]
     - 由於昂貴的[deeper connect]系列, 它的[回家節點]不適用於Shadowrocket, 因此這裏是不推介購買!
   - 機場節點轉換訂閱 (自行搭建節點需要)
     - https://sub-zh.vercel.app/
     - https://bianyuan.xyz/
