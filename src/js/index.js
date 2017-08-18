import cmsConfig from './cms-config';
import isdev from './is-dev';
import ispc from './is-pc';
import getAssetsBaseUrl from './assets-base-url';
import footer from './footer';

import Swiper from './swiper.jquery';
import wechatShare from './wechat-share';
import setBlockHide from './set-block-hide';

setBlockHide({
    regexp: '隐藏整个区块',
    regexp2: '隐藏这个区块',
    $array: $('body').find('.part'),
});

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
        $target: $('#part7'),
        isMobile
    });



    const initPage = () => {
        // part1 swiper
        $('#part1 .swiper-container').append(`<div class="swiper-pagination swiper-pagination-part1"></div>`);
        var mySwiper = new Swiper('#part1 .swiper-container', {
            loop: true,
            autoplay: 5000,//可选选项，自动滑动
            pagination: '#part1 .swiper-pagination',
            paginationClickable: true,
            spaceBetween: 1,
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
            slidesPerColumnFill: 'row',
            // autoplay: 5000,//可选选项，自动滑动
            pagination: '#part6 .swiper-pagination',
            paginationClickable: true,
            prevButton: '#part6-swiper-button-prev',
            nextButton: '#part6-swiper-button-next',
        });
    };
    initPage();
});