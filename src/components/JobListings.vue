<script setup>
import JobListing from './JobListing.vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

import { onMounted, reactive } from 'vue'
import axios from 'axios'

const props = defineProps({
    limit: Number,
    showButton: {
        type: Boolean,
        default: false,
    },
})

// reactive solo recibo objetos como valor, ref recibe tipos de datos primitivos (strings, numbers, etc.)
const state = reactive({
    jobs: [],
    isLoading: true,
})

onMounted(async () => {
    try {
        const { data } = await axios.get('/api/jobs')
        state.jobs = data
    } catch (error) {
        console.error('Error fetching jobs: ', error)
    } finally {
        state.isLoading = false
    }
})
</script>

<template>
    <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse jobs
            </h2>
            <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
                <PulseLoader />
            </div>
            <div v-else>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <JobListing
                        v-for="job in state.jobs.slice(0, limit)"
                        :job="job"
                        :key="job.id"
                    />
                </div>
                <section class="m-auto max-w-lg my-10 px-6" v-if="showButton">
                    <RouterLink
                        to="/jobs"
                        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
                        >View All Jobs</RouterLink
                    >
                </section>
            </div>
        </div>
    </section>
</template>
