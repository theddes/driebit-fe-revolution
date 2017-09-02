<template>
    <li :class="{ 'media': data.preview }">
        <figure v-if="data.preview">
            <img :src="data.preview">
            <figcaption v-html="data.title" v-if="data.title && data.title.indexOf(' ') > -1"></figcaption>
        </figure>
        <span v-html="data.title" v-if="data.title && data.title.indexOf(' ') > -1"></span>
    </li>
</template>

<script>
    export default {
        name: 'Result',
        props: {
            data: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    li {
        backface-visibility: hidden;
        background: rgba(255, 255, 255, 1);
        border: 1px solid #e6e6e6;
        cursor: pointer;
        display: inline-block;
        font-size: 1.1em;
        font-weight: 300;
        margin: 0.5em;
        overflow: hidden;
        padding: 0.7em 0.5em;
        transition: all .2s;
        user-select: none;
        width: 100%;
        will-change: transform;
        &.media {
            padding: 0;
            position: relative;
        }
        figure {
            display: block;
            overflow: hidden;
            padding-bottom: 100%;
            img, figcaption {
                position: absolute;
                width: 100%;
            }
            img {
                height: 100%;
                left: 0;
                top: 0;
            }
            figcaption {
                background: rgba(255, 255, 255, 0.8);
                bottom: 0;
                padding-bottom: 0.4em;
                padding: 0.5em;
                text-align: center;
            }
        }
    }
</style>
