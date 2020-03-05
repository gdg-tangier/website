<style lang="postcss">
    .imgContainer.ratio img {
        @apply absolute w-full h-full;
    }
    .imgContainer.auto img {
        /* - */
    }
    .imgContainer.cover img {
        @apply object-cover;
    }
    .imgContainer.contain img {
        @apply object-contain;
    }
    .imgContainer .innerBorder {
        border: 1px solid #00000011;
        border-radius: inherit;
        @apply absolute inset-0 pointer-events-none;
    }
</style>

<template>
    <div 
        class="imgContainer relative overflow-hidden bg-white z-0" 
        :class="[mode, (ratio === 'auto' ? 'auto' : 'ratio')]" 
        :style="{ paddingBottom }"
    >
        <slot />
        <div :class="(innerBorder ? 'innerBorder' : '')"></div>
    </div>
</template>

<script>
export default {
    props: {
        mode: {
            type: String,
            default: 'cover'
        },
        innerBorder: {
            type: Boolean,
            default: false
        },
        ratio: {
            type: String,
            default: 'auto',
        }
    },
    computed: {
        paddingBottom () {
            if (this.ratio === 'auto') return 'initial'
            let [ a, b ] = this.ratio.split(':')
            a = parseInt(a)
            b = parseInt(b)
            return ((b / a) * 100) + '%'
        }
    }
}
</script>