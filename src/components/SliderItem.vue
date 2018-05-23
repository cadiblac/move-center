<template>
    <div :class="['slider-item',show?'':'hidden']">
        <img class="background" :src="backgroundImage">
        <div class="content">
            <h1 class="title">{{title}}</h1>
            <h2 class="sub-title">{{subTitle}}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SliderItem",
        props: {
            title: '',
            subTitle: '',
            backgroundImage: null,
            show: true
        }
    }
</script>

<style scoped>
    .slider-item {
        position: absolute;
        left: 0;
        top: 0;
        color: white;
        width: 100%;
        height: 100%;
        transition-property: opacity;
        transition-duration: 1s;
    }

    .slider-item.hidden {
        opacity: 0;
    }

    .slider-item .background {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .slider-item .content {
        position: absolute;
        bottom: 40px;
        left: 20px;
    }
</style>