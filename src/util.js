const defaultAnimationFunc = x => x

export class TweenGenerator {
    constructor(start, end, count, animationFunc = defaultAnimationFunc) {
        this.curFrame = 0
        this.start = start
        this.end = end
        this.count = count
        this.f = animationFunc
        this.isEnd = false
    }

    next() {
        if (this.curFrame >= this.count) {
            this.isEnd = true
            return this.end
        }
        this.curFrame++
        return this.start + this.f(this.curFrame / this.count) * (this.end - this.start)
    }
}


const monthEngWord = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', "JLY", "AUG", "SEP", "OCT", "NOV", "DEC"]
export const dateUtils = {
    getMonthEngWord: month => monthEngWord[month],
    // 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
    format: function (d, fmt) {
        var o = {
            "M+": d.getMonth() + 1, //月份
            "d+": d.getDate(), //日
            "h+": d.getHours(), //小时
            "m+": d.getMinutes(), //分
            "s+": d.getSeconds(), //秒
            "q+": Math.floor((d.getMonth() + 3) / 3), //季度
            "S": d.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
}