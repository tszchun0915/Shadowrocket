# Shadowrocket 設定抄考建議

下載地址
app store: https://apps.apple.com/hk/app/shadowrocket/id932747118

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
  1. 模組/模塊: (建議以下全部加入)
     1. https://raw.githubusercontent.com/QingRex/LoonKissSurge/refs/heads/main/Surge/Official/%F0%9F%8D%9F%20Apple%20News%20%E8%A7%A3%E9%94%81.official.sgmodule
     2. https://raw.githubusercontent.com/QingRex/LoonKissSurge/refs/heads/main/Surge/Official/%F0%9F%8D%9F%20Apple%20TV%20%E5%A2%9E%E5%BC%BA.official.sgmodule
     3. https://raw.githubusercontent.com/QingRex/LoonKissSurge/refs/heads/main/Surge/Official/%F0%9F%8D%9F%20%E9%80%9A%E7%94%A8%E6%A8%A1%E5%9D%97.official.sgmodule
     4. https://raw.githubusercontent.com/QingRex/LoonKissSurge/refs/heads/main/Surge/Line%E5%8E%BB%E5%B9%BF%E5%91%8A.sgmodule
     - -
     6. https://github.com/NSRingo/LocationService/releases/latest/download/iRingo.LocationService.sgmodule
     7. https://github.com/NSRingo/Maps/releases/latest/download/iRingo.Maps.sgmodule
     8. https://github.com/NSRingo/TV/releases/latest/download/iRingo.TV.sgmodule
     9. https://github.com/NSRingo/News/releases/latest/download/iRingo.News.sgmodule
     - -
     9. https://raw.githubusercontent.com/tszchun0915/Shadowrocket/refs/heads/main/sgmoduleCompilation.sgmodule
     10. https://github.com/chavyleung/scripts/raw/master/box/rewrite/boxjs.rewrite.surge.sgmodule
     11. https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/Plugin2Rocket.srmodule
     12. https://raw.githubusercontent.com/zirawell/R-Store/refs/heads/main/Rule/Surge/Adblock/All/allAdBlock.sgmodule
     - -
     13. https://raw.githubusercontent.com/Maasea/sgmodule/refs/heads/master/YouTube.Lite.sgmodule
     14. https://limbopro.com/Adblock4limbo.sgmodule
     15. https://raw.githubusercontent.com/NobyDa/Script/refs/heads/master/Surge/Module/RewriteRules.sgmodule
     16. https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/Kuwo/kuwo.sgmodule
       - 順帶一提
          - 你可以到這裏找模組 超齊全 https://surge.qingr.moe/
          - 另外這個是Youtube模組大神 https://github.com/Maasea/sgmodule
          - Apple功能修正大神         https://nsringo.github.io/
            - 方法一: 🆕點擊[訂閱](http://boxjs.com/#/sub/add/https://github.com/NSRingo/BoxJs/raw/main/iRingo.BoxJs.json)(推薦，安装BoxJs後點擊導入)
            - 方法二: 複製貼上導入(傳統，安裝BoxJs後複製導入)
              - 瀏覽器訪問BoxJs.com，在訂閱頁面點擊+複製貼上添加本項目訂閱鏈接
              - https://github.com/NSRingo/BoxJs/raw/main/iRingo.BoxJs.json
  3. 本地檔案:
     - https://raw.githubusercontent.com/tszchun0915/Shadowrocket/refs/heads/main/AssignLocation.conf
  4. 配置必須打開HTTPS解密獲得證書, 3步步驟如下:
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
     - [具行動力]之選擇: [google vps免費搭建]
     - [極具行動力]選擇: [vps免費搭建]
   - 自行搭建[家庭回家]獨立IP節點
     - [極具行動力]選擇: 問AI[樹莓派5 4GB 搭建shadowrocket節點]
     - 由於昂貴的[deeper connect]系列, 它的[回家節點]不適用於Shadowrocket, 因此這裏是不推介購買!
   - 機場節點轉換訂閱 (自行搭建節點需要)
     - https://sub-zh.vercel.app/
     - https://bianyuan.xyz/
