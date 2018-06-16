<template>
    <div class="pagination">
        <el-button
                type="text"
                class="el-icon-arrow-left"
                :disabled="currentPage===1"
                @click="emitNavigate(currentPage-1)"
        />
        <el-button
                type="text"
                :disabled="currentPage===i+pagerCountStart-1"
                v-for="i in actualPagerCount"
                @click="emitNavigate(i+pagerCountStart-1)"
                :key="i+pagerCountStart-1"
        >{{i+pagerCountStart-1}}
        </el-button>
        <el-button
                type="text"
                class="el-icon-arrow-right"
                :disabled="currentPage===totalPage"
                @click="emitNavigate(currentPage+1)"
        />
        <el-button
                type="text"
                @click="emitNavigate(1)"
                :disabled="currentPage===1"
        >首页</el-button>
        <el-button
                type="text"
                @click="emitNavigate(totalPage)"
                :disabled="currentPage===totalPage"
        >尾页</el-button>
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
            actualPagerCount() {
                return Math.min(this.pagerCount, this.totalPage)
            },
            pagerCountStart() {
                if (this.pagerCount >= this.totalPage) return 1
                let touchStart = this.currentPage - Math.floor(this.pagerCount / 2) <= 1
                if (touchStart) return 1
                let touchEnd = this.currentPage + Math.floor(this.pagerCount / 2) >= this.totalPage
                if (touchEnd) {
                    return this.totalPage - this.pagerCount + 1
                } else {
                    return this.currentPage - Math.floor(this.pagerCount / 2)
                }
            },

        },
        methods: {
            emitNavigate(page) {
                this.$emit('navigate', page)
            }
        }
    }
</script>

<style scoped lang="scss">
    .pagination{
        font-size: 1.5em;
        margin: 1em 0;
        width: 100%;
        background-color: #ededed;
        text-align: center;
    }
</style>