<template>
  <DashboardLayout>
    <div class="bg-gray-100 min-h-screen">
      <h2 class="text-2xl font-bold mb-4 text-gray-700">Congresses</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <CongressCard v-for="congress in congresses" :key="congress._id" :congress="congress" />
        <nuxt-link :to="`/congress/create`" class="block">
          <UCard class="congress-card bg-gray-100 dark:bg-gray-200 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">

      
            <div class="card-content">
              <h3 class="text-xl font-bold text-gray-800 text-center">Create New Congress</h3>
            </div>
      
          </UCard>
        </nuxt-link>
      </div>
    </div>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from '@/components/DashboardLayout.vue'
import CongressCard from '@/components/Congress/CongressCard.vue'
import { getAllCongresses } from '@/services/congressService'

export default {
  components: {
    DashboardLayout,
    CongressCard,
  },
  data() {
    return {
      congresses: [],
    }
  },
  async created() {
    this.congresses = await getAllCongresses()
  },
}
</script>

<style scoped>
/* Add any custom styles for the index page here */
</style>
