const cmsConfig = {
    "title": "台湾青年大陆互联网+梦想之旅",
    "pos": "台湾频道>专访专题>台湾青年大陆互联网+梦想之旅",
    "url": "http://www.xinhuanet.com/tw/zhuanti/twqndlmxzl/index.htm",
    "isFreeMod": true,
    "台湾青年大陆互联网+梦想之旅1":
    {
        "list": {
            "要闻": { "nid": "11161097", "cid": "11160645" }
        }
    },
    "台湾青年大陆互联网+梦想之旅2": {
        "list": {
            "亮点扫描": { "nid": "11161099", "cid": "11160647" }
        }
    },
    "台湾青年大陆互联网+梦想之旅3": {
        "list": {
            "两岸青年交流": { "nid": "11161104", "cid": "11160652" }
        }
    }
};

window.XH_GLOBAL = {
    "dataImg": true,
    "pageNid": ["1176508"],
    "pageCnt": "40",
    "pageTp": "1",
    "pageName": "",
    "themeColor": "grey"
};

var isTouchDevice = 'ontouchstart' in window;
var userAgent = navigator.userAgent.toLowerCase(),
    l = window.location;
if (isTouchDevice) {
    var currurl = location.href;
    if (currurl.indexOf("?app=0") > 0) {
        document.getElementsByTagName("body")[0].setAttribute("class", "app");
    }
    if (userAgent.indexOf("mi pad") != -1 || userAgent.indexOf("xiaomi/miuibrowser") != -1 || userAgent.indexOf(
        "ipad") != -1) {
        var padViewPort = document.getElementById("viewport");
        padViewPort.content = "";
    }
}