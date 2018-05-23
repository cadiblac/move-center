<template>
    <div class="blue-button">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "BlueButton"
    }
</script>

<style scoped>
    .blue-button {
        display: inline-block;
        padding: 1em 3em;
        color: white;
        background-color: #144483;
        letter-spacing: 5px;
    }
    .blue-button:hover{
        cursor: pointer;
        box-shadow: 1px 1px 1px rgba(50,50,50,.5);
    }
</style>