<template>
    <div class="--event-card-2 shadow rounded-lg bg-white">
        <div class="relative">
            <center-img ratio="3:2" class="rounded-lg" inner-border>
                <img :src="event.image.original">
            </center-img>
            <div class="absolute inset-0">
                <div class="h-full flex flex-col justify-between p-5">
                    <div>
                        <div class="w-24 h-24 bg-blue-100 rounded-md shadow flex items-center justify-center flex-col">
                            <div class="text-xl text-blue-500">
                                {{ moment(event.start_at).format('ddd') }} <span class="font-bold">{{ moment(event.start_at).format('D') }}</span>
                            </div>
                            <div class="uppercase text-blue-300 text-sm">
                                {{ moment(event.start_at).format('MMM') }} 
                                <template v-if="moment(event.start_at).format('YYYY') !== moment().format('YYYY')">
                                    {{ moment(event.start_at).format('YYYY') }}
                                </template>
                            </div>
                        </div>
                    </div>
                    <div class="--event-info">
                        <div class="flex items-end">
                            <div class="flex-grow">
                                <div class="text-3xl font-bold mb-2 leading-none">
                                    {{ event.name }}
                                </div>
                                <div class="text-sm leading-none">
                                    <table>
                                        <tr>
                                            <td class="pr-2"><b>starts</b></td>
                                            <td class="uppercase">{{ moment(event.start_at).format('MMM-DD HH:mm') }}</td>
                                        </tr>
                                        <tr v-if="event.end_at">
                                            <td class="pr-2"><b>ends</b></td>
                                            <td class="uppercase">{{ moment(event.end_at).format('MMM-DD HH:mm') }}</td>
                                        </tr>
                                    </table>
                                </div>
                                <div class="flex items-center fill-current mt-2">
                                    <div class="mr-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                                    </div>
                                    <div>
                                        {{ event.address }}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button class="border rounded py-2 px-4 leading-none uppercase text-xs font-bold hover:text-blue-500 hover:bg-white">
                                    see more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    props: {
        event: { type: Object, required: true }
    },
    methods: {
        moment,
    }
}
</script>

<style lang="postcss">
.--event-card-2 {
    .--event-info {
        @apply rounded-md p-3 text-white;
        background: #00000055;
        backdrop-filter: blur(2px);
    }
}
</style>