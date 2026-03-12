香港人全球適用 Shadowrocket 設定參考
(冇提及可以唔使郁/唔洗理)




A. 首頁
    1. 全域路由: 配置(局部)
    2. 呢度唔提供任何機場/節點 純個人記錄使用 btw.唔係個個小火箭機場喺香港都用得 請自行研究/自行搭建

==============================================

B. 配置
     1. 模組: 
      - https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/Plugin2Rocket.srmodule
      - http://script.hub/file/_start_/https://kelee.one/Tool/Loon/Lpx/Block_HTTPDNS.lpx/_end_/Block_HTTPDNS.sgmodule?type=loon-plugin&target=shadowrocket-module&del=true&jqEnabled=true
      - https://raw.githubusercontent.com/zirawell/R-Store/refs/heads/main/Rule/Surge/Adblock/All/allAdBlock.sgmodule
      - https://raw.githubusercontent.com/tszchun0915/Shadowrocket/refs/heads/main/YTMod.Module
      - https://raw.githubusercontent.com/tszchun0915/Shadowrocket/refs/heads/main/ModuleCompilation.module
    2. 本地檔案:
      - https://raw.githubusercontent.com/tszchun0915/Shadowrocket/refs/heads/main/AssignLocation.conf

==============================================

C. 資料
  1. 自動同步: 開啓

==============================================

D. 設定
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
       - MaxMind: 似乎無關痛癢. 如有需要,請自行到http://www.maxmind.com註冊處理!
       - 國家: https://raw.githubusercontent.com/Hackl0us/GeoIP2-CN/release/Country.mmdb
       - ASN: https://raw.githubusercontent.com/P3TERX/GeoLite.mmdb/download/GeoLite2-ASN.mmdb
  15. VPN提醒: 關閉
  16. 溫和策略機制: 開啓
  17. 自動旋轉: 關閉
  18. 允許第三方鍵盤: 開啓
  19. 排除路由 0.0.0.0/31: 關閉
  20. 觸覺反饋: 開啓
