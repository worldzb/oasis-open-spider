import jieba from 'nodejieba';
function addTag(data) {
    if (Array.isArray(data)) {
        return data.map(item => {
            if (item.title) {
                item['tags'] = jieba.extract(item.title, 10);
            }
            return item;
        });
    }
    return data;
}
// 定义一个中间件来修改响应结果
const addTagsRespones = async (c, next) => {
    await next();
    const originalData = await c.res.json();
    // 添加一个新的字段
    originalData.data = addTag(originalData.data);
    const modifiedData = { ...originalData };
    c.res = new Response(JSON.stringify(modifiedData), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
    // c.res = new Response('Modified Response', { status: 200 });
};
export default addTagsRespones;
