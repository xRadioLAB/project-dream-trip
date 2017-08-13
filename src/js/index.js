import cmsConfig from './cms-config';
import isdev from './is-dev';
import ispc from './is-pc';
import getAssetsBaseUrl from './assets-base-url';
import footer from './footer';

import Swiper from './swiper.jquery';


$(() => {
    const $window = $(window);
    const $html = $('html');
    const $body = $('body');
    const { isDev, isPc } = {
        isDev: isdev(),
        isPc: ispc(),
    };
    const isMobile = !isPc;
    const assetsBaseUrl = getAssetsBaseUrl({ isDev });

    footer({
        $target: $('.part7'),
        isMobile
    });

    const xpageConfigPageSize = 5;

    const initPage = () => {

        $('#part1 .swiper-container').append(`<div class="swiper-pagination swiper-pagination-part1"></div>`);
        var mySwiper = new Swiper('#part1 .swiper-container', {
            autoplay: 5000,//可选选项，自动滑动
            pagination: '#part1 .swiper-pagination',
            paginationClickable: true,
        });


        $('#part6 .swiper-container').append(`
            <div class="swiper-pagination"></div>
        `);
        $('#part6 .swiper-container').after(`
            <div class="swiper-button-prev" id="part6-swiper-button-prev"></div>
            <div class="swiper-button-next" id="part6-swiper-button-next"></div>
        `);
        var mySwiper = new Swiper('#part6 .swiper-container', {
            slidesPerView: 3,
            slidesPerColumn: 2,
            spaceBetween: 26,
            // autoplay: 5000,//可选选项，自动滑动
            pagination: '#part6 .swiper-pagination',
            paginationClickable: true,
            prevButton: '#part6-swiper-button-prev',
            nextButton: '#part6-swiper-button-next',
        });


        // const lists = cmsConfig['台湾青年大陆互联网＋梦想之旅1'].list;
        // const xpage = new XHW.Xpage('xpage-content', {
        //     mode: 'listView', // 插件模式
        //     nid: lists['大图'].cid, // 栏目id
        //     pageSize: xpageConfigPageSize, // 每页条数
        //     moreButton: '.xpage-more-btn', // 更多按钮
        //     renderItem: function (item, index, list) { // 列表渲染方法
        //         // ----------- 拼字符串方法 -------
        //         return (`
        //             <li class="list-item">
        //                 <a href="${item.LinkUrl}">
        //                     ${item.Title}
        //                 </a>
        //             </li>
        //         `);
        //         //-------------------------------
        //         // // ----------- 使用模板方法 -------
        //         // var itemHtml = XHW.Xpage.tmpl('item_tmpl_list', item);
        //         // return itemHtml;
        //         // //-------------------------------
        //     }
        // });

        // for (let prop in lists) {

        //     const xpage = new XHW.Xpage(`[data-name="${prop}"]`, {
        //         mode: 'listView', // 插件模式
        //         nid: lists[prop].cid, // 栏目id
        //         pageSize: xpageConfigPageSize, // 每页条数
        //         // moreButton: '.xpage-more-btn', // 更多按钮
        //         renderItem: function (item, index, list) { // 列表渲染方法
        //             // ----------- 拼字符串方法 -------
        //             return (`
        //                 <li class="list-item">
        //                     <a href="${item.LinkUrl}">
        //                         ${item.Title}
        //                     </a>
        //                 </li>
        //             `);
        //             //-------------------------------
        //             // // ----------- 使用模板方法 -------
        //             // var itemHtml = XHW.Xpage.tmpl('item_tmpl_list', item);
        //             // return itemHtml;
        //             // //-------------------------------
        //         }
        //     });
        // }
    };
    initPage();
});