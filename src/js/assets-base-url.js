export default ({ isDev, url }) => {
    return isDev ? './bundle' : url;
};