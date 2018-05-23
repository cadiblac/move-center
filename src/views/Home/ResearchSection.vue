<template>
    <section class="section-research">
        <section-title>
            <template slot="eng">REASEARCH</template>
            <template slot="chs">研究专利</template>
        </section-title>
        <my-hr/>
        <section-content>
            <el-menu
                    class="research-nav-bar"
                    mode="horizontal"
            >
                <el-menu-item index="1">技术成果</el-menu-item>
                <el-menu-item index="2">专利信息</el-menu-item>
                <el-menu-item index="3">成功案例</el-menu-item>
            </el-menu>
            <div class="research-display-box-wrapper" style="font-size: .9em">
                <research-display-box
                        :photo="research1"
                        title="电子信息类"
                        title-eng="digital information"
                        content="万兆网络多核处理器SOC芯片产业化"
                />
                <research-display-box
                        :photo="research1"
                        title="电子信息类"
                        title-eng="digital information"
                        content="万兆网络多核处理器SOC芯片产业化"
                />
                <research-display-box
                        :photo="research1"
                        title="电子信息类"
                        title-eng="digital information"
                        content="万兆网络多核处理器SOC芯片产业化"
                />
            </div>
            <template slot="more">
                <blue-button>更多技术成果</blue-button>
            </template>
        </section-content>
    </section>
</template>

<script>
    import SectionTitle from "./SectionTitle";
    import MyHr from "../../components/MyHr";
    import SectionContent from "./SectionContent";
    import BlueButton from "../../components/BlueButton";
    import ResearchDisplayBox from "../../components/ResearchDisplayBox";
    import research1 from '../../assets/research_1.jpg'

    export default {
        name: "ResearchSection",
        components: {ResearchDisplayBox, BlueButton, SectionContent, MyHr, SectionTitle},
        data(){
            return {
                research1
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../style/variables";

    .section-research {
        padding: $index-section-paddding;
        .research-nav-bar {
            padding-left: 400px;
            margin-bottom: 4em;
        }
        .research-display-box-wrapper {
            font-size: .9em;
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            padding: 0 2em 3em 2em;
        }

    }
</style>