<template>
    <div class="scroll-box" ref="scrollBox"
         @mouseenter="scroller&&scroller.pause()"
         @mouseleave="scroller&&scroller.resume()">
        <slot/>
    </div>
</template>

<script>

    class Scroller {
        constructor(itemList, speed, duration, delay) {
            this.itemList = itemList
            this.paused = false
            this.speed = speed
            this.duration = duration
            this.delay = delay
            this.stopped = false

            this.firstEnded = false
            this.lastEnded = false

            this.dispatch(0)

        }

        dispatch(i) {
            // 防止setTImeout
            if (this.stopped) return
            let element = this.itemList[i]
            let style = element.style
            style.position = 'absolute'
            style.left = 100 + '%'

            requestAnimationFrame(this.generateAnimationFunc(this.duration * 60,
                () => {
                    style.left = Number(style.left.slice(0, style.left.indexOf('%'))) - this.speed + '%'
                },
                () => {
                    if (i === 0) {
                        this.firstEnded = true
                        if (this.firstEnded && this.lastEnded) {
                            this.firstEnded = false
                            this.lastEnded = false
                            this.dispatch(0)
                        }
                    }
                }, () => {

                    if (i !== this.itemList.length - 1) {
                        this.dispatch(i + 1)
                    }else {
                        this.lastEnded = true
                        if (this.firstEnded && this.lastEnded) {
                            this.firstEnded = false
                            this.lastEnded = false
                            this.dispatch(0)
                        }
                    }
                }))


        }

        pause() {
            this.paused = true
        }

        resume() {
            this.paused = false
        }

        stop() {
            this.stopped = true
        }


        generateAnimationFunc(time, func, afterFunc, mixInPointFunc) {
            let leftTime = time
            let executed = false
            let wrappedFunc = () => {
                if (leftTime <= 0) {
                    afterFunc()
                    return
                }
                if (!executed && (time - leftTime) / 60 >= this.delay) {
                    mixInPointFunc()
                    executed = true
                }
                if (this.stopped) {
                    return
                }
                if (!this.paused) {
                    func()
                    leftTime--
                }
                requestAnimationFrame(wrappedFunc)
            }
            return wrappedFunc
        }
    }

    export default {
        name: "ScrollBox",
        props: {
            speed: {
                type: Number,
                default: .15
            },
            // s
            duration: {
                type: Number,
                default: 14
            },
            // s
            delay: {
                type: Number,
                default: 3
            }
        },
        data() {
            return {
                scroller: null,
                itemList: []
            }
        },
        mounted() {
            this.reset()
        },
        watch: {
            itemList() {

                this.reset()
            }
        },
        methods: {
            updateDom() {
                this.$nextTick(() => {
                    this.itemList = Array.from(this.$refs.scrollBox.children)
                })
            },

            reset() {
                if (this.itemList.length === 0) return
                if (this.scroller) {
                    this.scroller.stop()
                }
                this.scroller = new Scroller(this.itemList, this.speed, this.duration, this.delay)
            }
        }
    }
</script>

<style scoped lang="scss">
    .scroll-box {
        width: 100%;
        position: relative;
        overflow: hidden;

        > * {
            position: absolute;
            left: 100%;
        }
    }
</style>