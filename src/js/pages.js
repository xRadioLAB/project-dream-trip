import isdev from './is-dev';
import ispc from './is-pc';
import getAssetsBaseUrl from './assets-base-url';
import footer from './footer';
import wechatShare from './wechat-share';

// pages
import getXpageNid from './get-xpage-nid';

$(() => {
    const $window = $(window);
    const $html = $('html');
    const $body = $('body');
    const { isDev, isPc } = {
        isDev: isdev(),
        isPc: ispc(),
    };
    const isMobile = !isPc;
    const assetsBaseUrl = getAssetsBaseUrl({
        isDev,
        url: 'http://www.xinhuanet.com/project-dream-trip/bundle'
    });

    if (isMobile) {
        const src = `${assetsBaseUrl}/banner-mobile.jpg`;
        $('.banner img').attr('src', src);
        wechatShare({
            title: $('title').text(),
            substr: $('[name="description"]').attr('content'),
            src: src,
        });
    }

    footer({
        $target: $('body'),
        isMobile
    });

    const initPage = () => {
        const xpageConfig = getXpageNid({ colunmName: '#column-title' });
        const xpage = new XHW.Xpage('#data', {
            mode: 'listView', // 插件模式
            nid: xpageConfig.cid, // 栏目id
            pageSize: 20, // 每页条数
            moreButton: '.xpage-more-btn', // 更多按钮
            orderby: 1, // 0: 时间顺序, 1: 签发库顺序
            renderItem: function (item, index, list) { // 列表渲染方法
                return (`
                    <li>
                        <a href="${item.LinkUrl}" target="_blank">
                            ${item.Title}
                        </a>
                    </li>
                `);
            }
        });
    };


    initPage();
});