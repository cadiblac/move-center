<template>
    <div>
        <h1>Module:{{currentModule.name}}</h1>
        <router-link
                v-for="subModule in subModules" :key="subModules.path"
                :to="path.join('/',currentCategory.path,currentModule.path,subModule.path)">
            <el-button>{{subModule.name}}</el-button>
        </router-link>
        <div>
            <div v-if="currentModule.subModules">
                <router-view/>
            </div>
            <self-adaption-article-list v-else :type="type" :sub-type="0"/>
        </div>
    </div>
</template>

<script>
    import path from 'path'
    import SelfAdaptionArticleList from "../../components/detail/SelfAdaptionArticleList";

    export default {
        name: "index",
        components: {SelfAdaptionArticleList},
        props: {},
        data() {
            return {
                path
            }
        },
        computed: {

            meta() {
                return Object.assign({}, ...this.$route.matched.map(route => route.meta))
            },
            subModules() {
                return this.meta.subModules
            },
            currentCategory() {
                return this.meta.currentCategory
            },
            currentModule() {
                return this.meta.currentModule
            },
            type() {
                return this.meta.type
            }

        }
    }
</script>

<style scoped>

</style>