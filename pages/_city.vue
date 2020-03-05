<template>
    <div class="--city-layout">
        <center-img ratio="3:1" class="z-0">
            <img :src="covers[$route.params.city]" />
        </center-img>
        <div class="-mt-56 relative">
            <div class="container mx-auto px-3">
                <div class="flex mb-2">
                    <nuxt-link to="/tangier" class="--city-link-item" exact-active-class="--active">
                        Tangier
                    </nuxt-link>
                    <nuxt-link to="/casablanca" class="--city-link-item" exact-active-class="--active">
                        Casablanca
                    </nuxt-link>
                    <nuxt-link to="/settat" class="--city-link-item" exact-active-class="--active">
                        Settat
                    </nuxt-link>
                    <nuxt-link to="/agadir" class="--city-link-item" exact-active-class="--active">
                        Agadir
                    </nuxt-link>
                </div>
                <div class="flex -mx-3">
                    <div class="w-2/3 px-3">
                        <div class="--city-card rounded-lg p-5 shadow">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat obcaecati repudiandae accusantium adipisci veniam. Impedit delectus quasi blanditiis cum in cupiditate eaque nobis, qui at, fugiat accusantium expedita. Maiores.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat obcaecati repudiandae accusantium adipisci veniam. Impedit delectus quasi blanditiis cum in cupiditate eaque nobis, qui at, fugiat accusantium expedita. Maiores.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat obcaecati repudiandae accusantium adipisci veniam. Impedit delectus quasi blanditiis cum in cupiditate eaque nobis, qui at, fugiat accusantium expedita. Maiores.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat obcaecati repudiandae accusantium adipisci veniam. Impedit delectus quasi blanditiis cum in cupiditate eaque nobis, qui at, fugiat accusantium expedita. Maiores.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat obcaecati repudiandae accusantium adipisci veniam. Impedit delectus quasi blanditiis cum in cupiditate eaque nobis, qui at, fugiat accusantium expedita. Maiores.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nuxt-child />
    </div>
</template>

<script>
export default {
    data() {
        return {
            covers: {
                tangier: 'https://cdn.telquel.ma/content/uploads/2019/02/Tanja-Marina-Bay-1.jpg',
                casablanca: 'https://www.alibabuy.com/photos/library/1500/10748.jpg',
                settat: 'https://www.alibabuy.com/photos/library/1500/10748.jpg',
                agadir: 'https://images.pexels.com/photos/1632228/pexels-photo-1632228.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            }
        }
    }
}
</script>

<style lang="postcss">
.--city-layout {
    .--city-link-item {
        transition: all .2s;
        @apply px-5 py-2 rounded-lg mr-2 font-semibold text-white shadow;
        backdrop-filter: blur(2px);
        background: #00000055;
        &:hover {
            @apply text-blue-500;
            background: #FFFFFFCC;
        }
        &.--active {
            @apply text-blue-500;
            background: #FFFFFFCC;
        }
    }
    .--city-card {
        backdrop-filter: blur(4px);
        background: #FFFFFFCC;
    }
}
</style>