/**
 * 自定义过滤器
 * Created by zhiyuan Liang on 2016/12/26.
 */
import Vue from 'vue'

// 超过显示的最大长度部分则以...继续显示
Vue.filter('lengthLimit', (val) => {
    const showLength = 30 // 需要显示最大的长度
    if (val.length > showLength) {
        return val.substring(0, showLength) + '...'
    } else {
        return val
    }
})

// 距今的时间显示格式
Vue.filter('timeToNow', (val) => {
    function timeToNow(time) {
        const t = parseFloat(new Date - new Date(time)) / 1000
        let str
        if (t) {
            if (t > 60 && t < 3600) {
                str = `${parseInt(t / 60.0, 10)}分钟前`
            } else if (t >= 3600 && t < 86400) {
                str = `${parseInt(t / 3600.0, 10)}小时前`
            } else if (t >= 86400 && t < 86400 * 30) {
                str = `${parseInt(t / 86400.0, 10)}天前`
            } else if (t >= 86400 * 30 && t < 86400 * 365) {
                str = `${parseInt(t / (86400.0 * 30), 10)}个月前`
            } else if (t >= 86400 * 365) {
                str = `${parseInt(t / (86400.0 * 365), 10)}年前`
            } else {
                str = `${parseInt(t, 10)}秒前`
            }
        }
        return str
    }
    return timeToNow(val)
})

Vue.filter('dataFormat', (date, fmt) => {
    var o = {
        "M+": date.getMonth() + 1, //月份 
        "d+": date.getDate(), //日 
        "h+": date.getHours(), //小时 
        "m+": date.getMinutes(), //分 
        "s+": date.getSeconds(), //秒 
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
})

// 切换Tab导航的名字描述
Vue.filter('transTab', (val) => {
    function transTab(tab) {
        let str
        switch (tab) {
            case 'NEWS':
                str = '新闻资讯'
                break
            case 'CLASSSHOW':
                str = '班级秀'
                break
            default:
                str = ''
                break
        }
        return str
    }
    return transTab(val)
})

// 审核状态格式
Vue.filter('statusFormat', (val) => {
    function statusFormat(num) {
        let str
        switch (num) {
            case 0:
                str = '待审核'
                break
            case 1:
                str = '通过'
                break
            case 2:
                str = "不通过"
                break;
        }
        return str
    }
    return statusFormat(val)
})