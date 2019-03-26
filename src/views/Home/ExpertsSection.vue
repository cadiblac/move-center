<template>
    <section class="section-experts">
        <section-title>
            <template slot="eng">EXPERTS</template>
            <template slot="chs">人才蓄水池</template>
        </section-title>
        <section-content>
            <div class="expert-group">
                <scroll-box style="height: 307px" ref="expertScroller">
                    <expert-display-box
                            style="margin-right: 3em"
                            v-for="expertItem in expertItems"
                            :profile="expertItem.face"
                            :name="expertItem.title"
                            :introduction="expertItem.summary"
                            :id="expertItem.id"
                    />
                </scroll-box>
            </div>
            <template slot="more">
                <blue-button @click="$router.push('/experts/gdrc')">更多高端人才</blue-button>
            </template>
        </section-content>
    </section>
</template>

<script>
    import SectionContent from "./SectionContent";
    import SectionTitle from "./SectionTitle";
    import BlueButton from "../../components/BlueButton";
    import ExpertDisplayBox from "../../components/ExpertDisplayBox";
    import {getSelfAdaptionArticle} from "../../API";
    import ScrollBox from "./ScrollBox";

    export default {
        name: "ExpertsSection",
        components: {ScrollBox, ExpertDisplayBox, BlueButton, SectionTitle, SectionContent},
        created(){
            // 试探性的取一个 然后得到数量
            getSelfAdaptionArticle(7,0,1,1)
                .then(res=>res.count)
                .then(count=>getSelfAdaptionArticle(7,0,1,count))
                .then(res=>res.articleList)
                .then(articleList=>{
                    this.expertItems = articleList
                })
        },
        data(){
            return{
                expertItems:[]
            }
        },
        methods:{
        },
        watch:{
            expertItems(val){
                this.$refs.expertScroller.updateDom()
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../style/variables";

    .section-experts {
        padding: $index-section-paddding;
        background: {
            image: url("../../assets/bg_experts.jpg");
            size: cover;
        }

        .expert-group {
            width: 100%;
            box-sizing: border-box;
            padding: 0 2em 3em 2em;
        }

    }
</style>