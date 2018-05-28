<template>
    <div class="pagination">
        <el-button type="text" class="el-icon-arrow-left" :disabled="currentPage===1"/>
        <el-button type="text" v-for="i in pagerCountBeforeEllipsis" @click="emitNavigate(i)">{{i}}</el-button>
        <el-button type="text" v-if="needOmit">...</el-button>
        <el-button type="text" v-if="needOmit" @click="emitNavigate(totalPage)">{{totalPage}}</el-button>
        <el-button type="text" class="el-icon-arrow-right" :disabled="currentPage===totalPage"/>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        props: {
            totalPage: {
                type: Number,
                default: 1
            },
            currentPage: {
                type: Number,
                default: 1
            },
            // 最大页码按钮数
            pagerCount: {
                type: Number,
                default: 5
            }
        },
        computed: {
            // 是否需要省略 由pagerCount和totalPage共同决定
            needOmit() {
                return this.pagerCount < this.totalPage
            },
            // 省略号之前的页码数量
            pagerCountBeforeEllipsis() {
                return this.needOmit ? this.pagerCount - 1 : this.totalPage
            }

        },
        methods: {
            emitNavigate(page) {
                this.emit('navigate', page)
            }
        }
    }
</script>

<style scoped lang="scss">

</style>