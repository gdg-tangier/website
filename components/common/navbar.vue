<template>
    <div>
        <div class="fixed inset-x-0 z-50" :class="{ 'opacity-0': !inTop }">
            <div class="container mx-auto flex px-3 pt-5">
                <div class="bg-white rounded-lg px-5 py-3 shadow text-xl flex items-center">
                    <img src="/logo.svg" style="width: 45px" class="mr-3" /> 
                    <div>
                        GDG &nbsp;<span class="capitalize font-bold">{{ $route.params.city }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="--navbar h-12 fixed inset-x-0 z-50 bg-white shadow" :class="{ 'opacity-0': inTop }">
            <div class="container mx-auto flex justify-between h-full">
                <div class="mx-3 flex items-center capitalize">
                    <img src="/logo.svg" style="width: 45px" class="mr-3" />
                    <div class="text-xl">
                        GDG &nbsp;<span class="capitalize">{{ $route.params.city }}</span>
                    </div>
                </div>
                <div class="flex">
                    <nuxt-link to="/tangier" class="flex items-center px-3 hover:text-blue-500" exact-active-class="bg-blue-100 text-blue-500">
                        Tangier
                    </nuxt-link>
                    <nuxt-link to="/casablanca" class="flex items-center px-3 hover:text-blue-500" exact-active-class="bg-blue-100 text-blue-500">
                        Casablanca
                    </nuxt-link>
                    <nuxt-link to="/settat" class="flex items-center px-3 hover:text-blue-500" exact-active-class="bg-blue-100 text-blue-500">
                        Settat
                    </nuxt-link>
                    <nuxt-link to="/agadir" class="flex items-center px-3 hover:text-blue-500" exact-active-class="bg-blue-100 text-blue5100">
                        Agadir
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inTop: true
        }
    },
    mounted() {
        window.addEventListener('scroll', () => {
            this.inTop = window.pageYOffset < 100
        })
    }
}
</script>

<style lang="postcss">
.--navbar {
    transition: all .2s;
}
</style>