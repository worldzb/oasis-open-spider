import { get } from "../utils/getData.js";
import { getTime } from "../utils/getTime.js";
export const handleRoute = async (_, noCache) => {
    const listData = await getList(noCache);
    const routeData = {
        name: "huxiu",
        title: "虎嗅",
        type: "24小时",
        link: "https://www.huxiu.com/moment/",
        total: listData.data?.length || 0,
        ...listData,
    };
    return routeData;
};
// 标题处理
const titleProcessing = (text) => {
    const paragraphs = text.split("<br><br>");
    const title = paragraphs.shift()?.replace(/。$/, "");
    const intro = paragraphs.join("<br><br>");
    return { title, intro };
};
const getList = async (noCache) => {
    const url = `https://www.huxiu.com/moment/`;
    const result = await get({
        url,
        noCache,
    });
    // 正则查找
    const pattern = /<script>[\s\S]*?window\.__INITIAL_STATE__\s*=\s*(\{[\s\S]*?\});[\s\S]*?<\/script>/;
    const matchResult = result.data.match(pattern);
    const jsonObject = JSON.parse(matchResult[1]).moment.momentList.moment_list.datalist;
    return {
        ...result,
        data: jsonObject.map((v) => ({
            id: v.object_id,
            title: titleProcessing(v.content).title,
            desc: titleProcessing(v.content).intro,
            author: v.user_info.username,
            timestamp: getTime(v.publish_time),
            hot: undefined,
            url: v.url || `https://www.huxiu.com/moment/${v.object_id}.html`,
            mobileUrl: v.url || `https://m.huxiu.com/moment/${v.object_id}.html`,
        })),
    };
};
