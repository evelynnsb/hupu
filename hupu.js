/**
 * HUPU_remove_ads.js
 * Quantumult X Script-response-body 去虎扑广告
 * Author: ChatGPT
 * Version: 3.0
 * GitHub: 可直接放在 GitHub 上使用
 */

let body = $response.body;
let url = $request.url;

// -------------------- 首页 & 帖子列表 --------------------
if (/cnode\.hupu\.com|bbs\.hupu\.com/.test(url)) {
    try {
        let obj = JSON.parse(body);
        // 删除广告、推广、推荐内容
        if (obj.list && Array.isArray(obj.list)) {
            obj.list = obj.list.filter(item => !item.ad && !item.promote && !item.recommend_type);
        }
        // 清理 banner 广告字段
        if (obj.banner && Array.isArray(obj.banner)) {
            obj.banner = [];
        }
        body = JSON.stringify(obj);
    } catch (e) {
        // 非 JSON 不处理
        body = body;
    }
}

// -------------------- 视频广告 --------------------
else if (/video\.hupu\.com/.test(url)) {
    try {
        let obj = JSON.parse(body);
        if (obj.videoAds && Array.isArray(obj.videoAds)) {
            obj.videoAds = [];
        }
        body = JSON.stringify(obj);
    } catch (e) {
        body = body;
    }
}

// -------------------- Banner 广告 --------------------
else if (/img\d*\.hupu\.com.*banner/.test(url)) {
    body = '';
}

// -------------------- 插屏 & 弹窗广告 --------------------
else if (/ad\.hupu\.com/.test(url)) {
    body = '';
}

// -------------------- 推荐 & 猜你喜欢 --------------------
else if (/api\.hupu\.com.*recommend/.test(url)) {
    try {
        let obj = JSON.parse(body);
        if (obj.items && Array.isArray(obj.items)) {
            obj.items = obj.items.filter(item => !item.ad && !item.promote && !item.recommend_type);
        }
        body = JSON.stringify(obj);
    } catch (e) {
        body = body;
    }
}

// -------------------- 其他潜在广告接口 --------------------
else if (/api\.hupu\.com.*feed/.test(url)) {
    try {
        let obj = JSON.parse(body);
        if (obj.data && Array.isArray(obj.data)) {
            obj.data = obj.data.filter(item => !item.ad && !item.promote);
        }
        body = JSON.stringify(obj);
    } catch (e) {
        body = body;
    }
}

// 返回修改后的响应体
$done({ body });
