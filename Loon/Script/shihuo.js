let response = JSON.parse($response.body);
const keysToRemove = new Set(["xiaoyuanhuodong", "qianggou", "chuangzuozhezhongxin", "request", "expert_list", "kanjia", "invitenew", "part-time recruitment"]);
if (response.data) {
    if (response.data.list) {
        // 过滤掉"生活服务"和"二手服务"
        response.data.list = response.data.list.filter(item => item.name === "功能中心");

        // 过滤功能中心当中的一些功能
        const gongNengZhongXin = response.data.list.find(item => item.name === "功能中心");
        if (gongNengZhongXin && gongNengZhongXin.list) {
            gongNengZhongXin.list = gongNengZhongXin.list.filter(item => !keysToRemove.has(item.key));
        }
    }
    // 省钱卡
    if (response.data.savings_card) {
        delete response.data.savings_card;
    }

    // 删除背景
    if (response.data.background) {
        delete response.data.background
    }
}
$done({ body: JSON.stringify(response) });
