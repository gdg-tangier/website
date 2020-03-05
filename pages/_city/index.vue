<template>
    <div>
        <div class="container mx-auto px-3 py-5">
            <div class="flex -mx-3">
                <div class="px-3 w-2/3">
                    <nextEventCard :event="nextEvent" class="mb-10" />
                    <div class="mb-3 mt-10">
                        <h1 class="text-2xl text-blue-500 flex items-center">
                            <div class="fill-current h-8 w-8 rounded-full bg-gray-300 flex justify-center items-center mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                            </div>
                            <div>
                                Upcoming events
                            </div>
                        </h1>
                    </div>
                    <template v-for="e in upcoming">
                        <eventCard :key="e.id" :event="e" class="mb-5" />
                    </template>
                    <div class="mb-3 mt-10">
                        <div class="flex items-center justify-between">
                            <h1 class="text-2xl text-gray-700 flex items-center">
                                <div class="fill-current h-8 w-8 rounded-full bg-gray-300 flex justify-center items-center mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                                </div>
                                <div>
                                    Past events
                                </div>
                            </h1>
                            <div class="text-lg leading-none flex items-center fill-current cursor-pointer">
                                <span>see all</span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                            </div>
                        </div>
                    </div>
                    <template v-for="e in past">
                        <eventCard :key="e.id" :event="e" class="mb-5" />
                    </template>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import eventsData from '~/data/events'
import eventCard from '~/components/cards/events/1'
import nextEventCard from '~/components/cards/events/2'

export default {
    components: {
        eventCard,
        nextEventCard
    },
    data() {
        return {
            upcoming: eventsData.upcoming,
            past: eventsData.past,
        }
    },
    computed: {
        nextEvent() {
            return this.upcoming[0]
        }
    }
}
</script>

<style>

</style>