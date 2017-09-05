<template>
    <li :class="{ 'media': data.preview }" @click="openResult(data.id)">
        <figure v-if="data.preview">
            <img :src="data.preview" :style="{ visibility: (searching) ? 'hidden': 'visible' }" alt="">
            <figcaption v-html="data.title" v-if="data.title && data.title.indexOf(' ') > -1"></figcaption>
        </figure>
        <span v-html="data.title" v-if="data.title && data.title.indexOf(' ') > -1 && !searching"></span>
    </li>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    export default {
        name: 'Result',
        computed: {
            ...mapState(['searching'])
        },
        props: {
            data: {
                type: Object,
                required: true
            }
        },
        methods: {
            ...mapMutations(['toggle_modal']),
            openResult (id) {
                this.$router.push({path: '', params: {id: id}})
                this.toggle_modal(true)
            }
        }
    }
</script>

<style lang="scss" scoped>
    li {
        backface-visibility: hidden;
        background: rgba(255, 255, 255, 1);
        border-radius: 4px;
        border: 1px solid #5a5a5a;
        cursor: pointer;
        display: inline-block;
        font-size: 1.1em;
        font-weight: 300;
        margin: 0.5em 0.2em;
        overflow: hidden;
        padding: 0.7em 0.5em;
        position: relative;
        transition: all .2s;
        user-select: none;
        width: 100%;
        will-change: transform;
        &:after {
            background: #97C93C;
            content: '';
            height: 100%;
            left: 0;
            opacity: 0;
            position: absolute;
            top: 0;
            transition: all .2s;
            width: 100%;
        }
        &:hover {
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.1) inset;
            &:after {
                opacity: 0.2;
            }
        }
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
                background: #454339;
                bottom: 0;
                color: white;
                padding-bottom: 0.4em;
                padding: 0.5em;
                text-align: center;
            }
        }
    }
</style>
