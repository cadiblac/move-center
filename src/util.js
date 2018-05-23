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
    getMonthEngWord: month => monthEngWord[month]
}