import { get } from "../utils/getData.js";
import { genHeaders } from "../utils/getToken/coolapk.js";
export const handleRoute = async (_, noCache) => {
    const listData = await getList(noCache);
    const routeData = {
        name: "coolapk",
        title: "酷安",
        type: "热榜",
        link: "https://www.coolapk.com/",
        total: listData.data?.length || 0,
        ...listData,
    };
    return routeData;
};
const getList = async (noCache) => {
    const url = `https://api.coolapk.com/v6/page/dataList?url=/feed/statList?cacheExpires=300&statType=day&sortField=detailnum&title=今日热门&title=今日热门&subTitle=&page=1`;
    const result = await get({
        url,
        noCache,
        headers: genHeaders(),
    });
    const list = result.data.data;
    return {
        ...result,
        data: list.map((v) => ({
            id: v.id,
            title: v.message,
            cover: v.tpic,
            author: v.username,
            desc: v.ttitle,
            timestamp: undefined,
            hot: undefined,
            url: v.shareUrl,
            mobileUrl: v.shareUrl,
        })),
    };
};
