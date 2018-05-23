<template>
    <div class="my-slider">
        <img src="../assets/back.png" class="navgation-icon back" @click="back">
        <img src="../assets/forward.png" class="navgation-icon forward" @click="forward">
        <slider-item
                v-for="(item,index) in displayedItems"
                :key="index"
                :title="item.title"
                :subTitle="item.subTitle"
                :backgroundImage="item.backgroundImage"
                :show="curDisplayedItemIndex===index"
        />
    </div>
</template>

<script>
    import SliderItem from "./SliderItem";

    export default {
        name: "Slider",
        components: {SliderItem},
        props: {
            displayedItems: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data(){
            return{
                curDisplayedItemIndex:0
            }
        },
        mounted() {
        },
        methods:{
            back(){
                this.curDisplayedItemIndex--
                if (this.curDisplayedItemIndex<0){
                    this.curDisplayedItemIndex = this.displayedItems.length-1
                }
            },
            forward(){
                this.curDisplayedItemIndex++
                if (this.curDisplayedItemIndex>=this.displayedItems.length){
                    this.curDisplayedItemIndex = 0
                }
            }
        }
    }
</script>

<style scoped>
    .my-slider{
        position: relative;
    }
    .navgation-icon{
        padding-top: 1em;
        padding-bottom: 1em;
        height: 3em;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 100;
        transition-property: background-color;
        transition-duration: .2s;
    }
    .navgation-icon.back{
        padding-left: 1em;
        left: 0;
    }
    .navgation-icon:hover{
        background-color: rgba(200,200,200,.5);
        cursor: pointer;
    }
    .navgation-icon.forward{
        padding-right: 1em;
        right: 0;
    }
</style>