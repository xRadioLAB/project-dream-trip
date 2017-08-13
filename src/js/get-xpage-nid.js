// import setColumnName from './set-column-name';
// import setPageNav from './set-page-nav';
// import setTitleName from './set-title-name';

export default ({
    href,
    cmsConfig,
    mapping,
    colunmName = '#cube-column-name'
}) => {
    for (let porp in mapping) {
        if (mapping.hasOwnProperty(porp)) {
            // const regex = new RegExp(mapping[porp], 'i');
            // const hasNid = regex.test(href);
            if (hasNid) {
                /*
                    TIPS: `cmsConfig[cmsConfig.title + '1']`
                    cms tools 制作的参数，第一个页面为 title + '1'
                    例如：
                        当 `{ "title": "这是页面名字" }`，
                        那么这个参数配置会包含属性 `"这是页面名字1": { "list": { ... }}`;
                */
                const result = cmsConfig[cmsConfig.title + '1'].list[porp].cid;
                // setColumnName({
                //     columnName: porp,
                //     columnTag: colunmName
                // });
                // setTitleName({
                //     columnName: porp,
                // });
                // setPageNav({
                //     columnName: porp,
                // });
                return {
                    porp: porp,
                    cid: result
                };
            }
        }
    }
    return false;
};