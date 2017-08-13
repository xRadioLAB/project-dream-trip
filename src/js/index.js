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

    const initPage = () => {
        // const cms = cmsConfig['台湾青年大陆互联网＋梦想之旅1'].list;
        // for (let prop in cms) {
        //     const cid = cms[prop].cid;
        //     console.log('====================================');
        //     console.log(prop, cid);
        //     console.log('====================================');
        //     // $([data-name=${cms}])
        //     `<div class="swiper-slide part1-slide">
        //         <a href="#" target="_blank">
        //             <img src="${img}">
        //             <p class="part1-slide-title">1</p>
        //         </a>
        //     </div>`
        // }

        // part1 swiper
        $('#part1 .swiper-container').append(`<div class="swiper-pagination swiper-pagination-part1"></div>`);
        var mySwiper = new Swiper('#part1 .swiper-container', {
            autoplay: 5000,//可选选项，自动滑动
            pagination: '#part1 .swiper-pagination',
            paginationClickable: true,
        });

        // part6 swiper
        $('#part6 .swiper-container').append(`
            <div class="swiper-pagination"></div>
        `);
        $('#part6 .swiper-container').after(`
            <div class="swiper-button-prev" id="part6-swiper-button-prev"></div>
            <div class="swiper-button-next" id="part6-swiper-button-next"></div>
        `);
        var mySwiper2 = new Swiper('#part6 .swiper-container', {
            slidesPerView: isMobile ? 1 : 3,
            slidesPerColumn: 2,
            spaceBetween: isMobile ? 10 : 26,
            // autoplay: 5000,//可选选项，自动滑动
            pagination: '#part6 .swiper-pagination',
            paginationClickable: true,
            prevButton: '#part6-swiper-button-prev',
            nextButton: '#part6-swiper-button-next',
        });
    };
    initPage();
});