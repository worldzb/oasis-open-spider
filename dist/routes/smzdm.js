import { get } from "../utils/getData.js";
import { getTime } from "../utils/getTime.js";
const typeMap = {
    "1": "今日热门",
    "7": "周热门",
    "30": "月热门",
};
export const handleRoute = async (c, noCache) => {
    const type = c.req.query("type") || "1";
    const listData = await getList({ type }, noCache);
    const routeData = {
        name: "smzdm",
        title: "什么值得买",
        type: typeMap[type],
        description: "什么值得买是一个中立的、致力于帮助广大网友买到更有性价比网购产品的最热门推荐网站。",
        link: "https://www.smzdm.com/top/",
        params: {
            type: {
                name: "文章分类",
                type: typeMap,
            },
        },
        total: listData.data?.length || 0,
        ...listData,
    };
    return routeData;
};
const getList = async (options, noCache) => {
    const { type } = options;
    const url = `https://post.smzdm.com/rank/json_more/?unit=${type}`;
    const result = await get({ url, noCache });
    const list = result.data.data;
    return {
        ...result,
        data: list.map((v) => ({
            id: v.article_id,
            title: v.title,
            desc: v.content,
            cover: v.pic_url,
            author: v.nickname,
            hot: Number(v.collection_count),
            timestamp: getTime(v.time_sort),
            url: v.jump_link,
            mobileUrl: v.jump_link,
        })),
    };
};
