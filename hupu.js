#!name=HUPU Remove Ads
#!desc=虎扑去广告合集
#!author=devin
#!version=1.0

[rewrite_local]

^https:\/\/fairy\.mobileapi\.hupu\.com\/mang\/preview\/banners url script-response-body https://kelee.one/Resource/JavaScript/HUPU/HUPU_remove_ads.js

^https:\/\/bbs\.mobileapi\.hupu\.com\/\d\/\d\.\d\.\d+\/bbsallapi\/lego\/data url script-response-body https://kelee.one/Resource/JavaScript/HUPU/HUPU_remove_ads.js

^https:\/\/games\.mobileapi\.hupu\.com\/\d\/\d\.\d\.\d+\/buffer\/hotList url script-response-body https://kelee.one/Resource/JavaScript/HUPU/HUPU_remove_ads.js

^https:\/\/games\.mobileapi\.hupu\.com\/\d\/\d\.\d\.\d+\/bplapi\/user\/v1\/more url script-response-body https://kelee.one/Resource/JavaScript/HUPU/HUPU_remove_ads.js

[mitm]

hostname = fairy.mobileapi.hupu.com, bbs.mobileapi.hupu.com, games.mobileapi.hupu.com
