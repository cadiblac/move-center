<template>
    <div class="home">
        <the-nav-bar id="nav-bar"/>
        <slider id="banner-slider" :displayedItems="sliderItems" v-if="sliderItems.length>=1"/>
        <news-section/>
        <experts-section/>
        <research-section/>
        <the-footer/>
    </div>
</template>

<script>
    import pic1 from '../../assets/bb3.jpg'
    import pic2 from '../../assets/bb2.jpg'
    import TheNavBar from '../../components/TheNavBar'
    import Slider from '../../components/Slider'
    import TheFooter from "../../components/TheFooter";
    import NewsSection from "./NewsSection";
    import ExpertsSection from "./ExpertsSection";
    import ResearchSection from "./ResearchSection";
    import {getResourceUrl, getRotationList} from "../../API";

    export default {
        name: 'home',
        components: {
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
<style scoped>
    #nav-bar {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 999;

    }

    #banner-slider {
        width: 100%;
        height: 500px;
    }

</style>
