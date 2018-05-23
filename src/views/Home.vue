<template>
    <div class="home">
        <the-nav-bar id="nav-bar"/>
        <slider id="banner-slider" :displayedItems="testItems"/>
        <news-section/>
        <experts-section/>
        <research-section/>
        <the-footer/>
    </div>
</template>

<script>
    import pic1 from '../assets/bb3.jpg'
    import pic2 from '../assets/bb2.jpg'
    import TheNavBar from '../components/TheNavBar'
    import Slider from '../components/Slider'
    import TheFooter from "../components/TheFooter";
    import NewsSection from "./Home/NewsSection";
    import ExpertsSection from "./Home/ExpertsSection";
    import ResearchSection from "./Home/ResearchSection";

    export default {
        name: 'home',
        components: {
            ResearchSection,
            ExpertsSection,
            NewsSection,
            TheFooter, TheNavBar, Slider
        },
        data() {
            return {
                testItems: [
                    {
                        title: 'test1',
                        subTitle: 'test2',
                        backgroundImage: pic1
                    },
                    {
                        title: 'test1',
                        subTitle: 'test2',
                        backgroundImage: pic2
                    }
                ],
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
