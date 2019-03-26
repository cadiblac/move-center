<template>
    <div class="home">
        <the-nav-bar id="nav-bar"/>
        <slider auto id="banner-slider" :displayedItems="sliderItems" v-if="sliderItems.length>=1"/>
        <news-section/>
        <experts-section/>
        <research-section/>
        <the-footer/>
    </div>
</template>

<script>
    import TheNavBar from '../../components/TheNavBar'
    import Slider from '../../components/Slider'
    import TheFooter from "../../components/TheFooter";
    import NewsSection from "./NewsSection";
    import ExpertsSection from "./ExpertsSection";
    import ResearchSection from "./ResearchSection";
    import {getResourceUrl, getRotationList} from "../../API";
    import Editor from "../../components/Editor";
    import Pagination from "../../components/detail/Pagination";
    import ScrollBox from "./ScrollBox";
    import ExpertDisplayBox from "../../components/ExpertDisplayBox";

    export default {
        name: 'home',
        components: {
            ExpertDisplayBox,
            ScrollBox,
            Pagination,
            Editor,
            ResearchSection,
            ExpertsSection,
            NewsSection,
            TheFooter, TheNavBar, Slider
        },
        created() {
            getRotationList().then(list => list.map(item => ({
                title: item.title,
                subTitle: item.subTitle,
                backgroundImage: getResourceUrl(item.id),
                link: item.link
            }))).then(list => {
                this.sliderItems = list
            })

        },
        data() {
            return {
                sliderItems: [],
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "../../variables";
    #nav-bar {
        position: absolute;
        width: $index-navigation-width;
        left: 50%;
        top: 50px;
        transform: translateX(-50%);
        z-index: 999;

    }

    #banner-slider {
        width: 100%;
        height: 642px;
    }

</style>
