export default () => {
    const href = window.location.href;
    return (/dev/.test(href) || /localhost/.test(href) || /117:3000/.test(href));
};
