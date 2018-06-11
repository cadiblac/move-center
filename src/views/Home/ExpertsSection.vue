<template>
    <section class="section-experts">
        <section-title>
            <template slot="eng">EXPERTS</template>
            <template slot="chs">专家资源</template>
        </section-title>
        <section-content>
            <div class="expert-group">
                <expert-display-box
                        v-for="expertItem in expertItems"
                        :profile="expertItem.face"
                        :name="expertItem.title"
                        :introduction="expertItem.summary"
                        :id="expertItem.id"
                />
            </div>
            <template slot="more">
                <blue-button @click="$router.push('/experts/all')">更多专家资源</blue-button>
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

    export default {
        name: "ExpertsSection",
        components: {ExpertDisplayBox, BlueButton, SectionTitle, SectionContent},
        created(){
            getSelfAdaptionArticle(7,0,1,4).then(list=>{
                this.expertItems = list
            })
        },
        data(){
            return{
                expertItems:[]
            }
        },
        methods:{
            test(){
                console.log('test')
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
            padding: 0 2em 3em 2em;
            display: flex;
            justify-content: space-between;
            flex-wrap: nowrap;
        }

    }
</style>