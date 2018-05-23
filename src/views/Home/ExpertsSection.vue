<template>
    <section class="section-experts">
        <section-title>
            <template slot="eng">EXPERTS</template>
            <template slot="chs">专家资源</template>
        </section-title>
        <section-content>
            <div class="expert-group">
                <expert-display-box
                        :profile="experts1"
                        name="李树忱"
                        introduction="土建与水利学院副院长，现任地下工程系教授、博士生导师。担任中国岩石力学与工程学会地下工程分会..."
                />
                <expert-display-box
                        :profile="experts1"
                        name="李树忱"
                        introduction="土建与水利学院副院长，现任地下工程系教授、博士生导师。担任中国岩石力学与工程学会地下工程分会..."
                />
                <expert-display-box
                        :profile="experts1"
                        name="李树忱"
                        introduction="土建与水利学院副院长，现任地下工程系教授、博士生导师。担任中国岩石力学与工程学会地下工程分会..."
                />
                <expert-display-box
                        :profile="experts1"
                        name="李树忱"
                        introduction="土建与水利学院副院长，现任地下工程系教授、博士生导师。担任中国岩石力学与工程学会地下工程分会..."
                />
            </div>
            <template slot="more">
                <blue-button>更多专家资源</blue-button>
            </template>
        </section-content>
    </section>
</template>

<script>
    import experts1 from '../../assets/experts_1.jpg'
    import SectionContent from "./SectionContent";
    import SectionTitle from "./SectionTitle";
    import BlueButton from "../../components/BlueButton";
    import ExpertDisplayBox from "../../components/ExpertDisplayBox";

    export default {
        name: "ExpertsSection",
        components: {ExpertDisplayBox, BlueButton, SectionTitle, SectionContent},
        data(){
            return{
                experts1
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