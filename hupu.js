/**
 * @supported Quantumult X
 * @name HUPU_remove_ads
 * @description 屏蔽虎扑广告，保留帖子内容
 * @author ChatGPT
 * @version 1.0
 */

let body = $response.body;
let url = $request.url;

// ---------- 首页广告 ----------
if (/cnode\.hupu\.com.*ad/.test(url)) {
    // 直接返回空 JSON
    body = JSON.stringify({});
}

// ---------- 资讯/帖子列表广告 ----------
if (/bbs\.hupu\.com.*ad/.test(url)) {
    let obj = JSON.parse(body);
    // 删除帖子列表中的广告项
    if (obj && obj.list) {
        obj.list = obj.list.filter(item => !item.ad);
    }
    body = JSON.stringify(obj);
}

// ---------- 视频广告 ----------
if (/video\.hupu\.com.*ad/.test(url)) {
    body = JSON.stringify({});
}

// ---------- Banner 广告 ----------
if (/img\d*\.hupu\.com.*banner/.test(url)) {
    body = '';
}

// ---------- 插屏/弹窗广告 ----------
if (/ad\.hupu\.com/.test(url)) {
    body = '';
}

// ---------- 推荐/猜你喜欢广告接口 ----------
if (/api\.hupu\.com.*recommend.*ad/.test(url)) {
    let obj = JSON.parse(body);
    if (obj && obj.items) {
        obj.items = obj.items.filter(item => !item.ad);
    }
    body = JSON.stringify(obj);
}

// 返回修改后的响应体
$done({ body });
