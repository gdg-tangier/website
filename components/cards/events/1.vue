<template>
    <div class="shadow rounded-lg bg-white p-5">
        <div class="flex -mx-2">
            <div class="w-3/4 px-2">
                <div class="text-sm text-gray-500 leading-none">
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
                <div class="text-2xl font-bold my-2">{{ event.name }}</div>
                <div class="flex items-center text-green-600 fill-current">
                    <div class="mr-1 -ml-1">
                        <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                    </div>
                    <div>
                        {{ event.address }}
                    </div>
                </div>
                <div>{{ event.description }}</div>
                <div class="mt-2">
                    <button class="bg-blue-100 text-blue-500 rounded py-2 px-4 leading-none uppercase text-xs font-bold hover:text-white hover:bg-blue-500">
                        see more
                    </button>
                </div>
            </div>
            <div class="w-1/4 px-2">
                <div>
                    <center-img ratio="3:2" class="rounded" inner-border>
                        <img :src="event.image.original">
                    </center-img>
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
        moment
    }
}
</script>

<style>

</style>