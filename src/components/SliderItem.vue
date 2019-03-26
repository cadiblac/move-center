<template>
    <a :href="link" target="_blank" :class="['slider-item',show?'':'hidden']">
        <img class="background" :src="backgroundImage">
        <div class="content">
            <h1 class="title">{{title}}</h1>
            <h2 class="sub-title">{{subTitle}}</h2>
        </div>
    </a>
</template>

<script>
    export default {
        name: "SliderItem",
        props: {
            title: '',
            subTitle: '',
            backgroundImage: null,
            show: true,
            link: ''
        }
    }
</script>

<style scoped lang="scss">
    .slider-item {
        display: block;
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
        pointer-events: none;
        opacity: 0;
    }

    .slider-item .background {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .slider-item .content {
        position: absolute;
        width: 600px;
        height: 150px;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(50, 50, 50, .2);
        
        &:hover {
            background-color: rgba(44, 66, 99, .7);
        }
    }
</style>