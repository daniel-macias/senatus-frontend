<template>
  <DashboardLayout>
    <div class="bg-gray-100 min-h-screen">
      <h2 class="text-2xl font-bold mb-4 text-gray-700">Parties</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <PartyCard v-for="party in parties" :key="party._id" :party="party" />
        <nuxt-link :to="`/party/create`" class="block">
          <UCard class="ring-0 party-card bg-gray-100 dark:bg-gray-200 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 flex items-center justify-center border-2 border-dashed border-gray-400">
            <div class="card-content text-center">
              <h3 class="text-xl font-bold text-gray-800">Create New Party</h3>
              <Icon name="material-symbols:add" color="black" class="text-4xl mb-2" />
            </div>
          </UCard>
        </nuxt-link>
      </div>
    </div>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from '@/components/DashboardLayout.vue'
import PartyCard from '@/components/Party/PartyCard.vue'
import { getAllParties } from '@/services/partyService'

export default {
  components: {
    DashboardLayout,
    PartyCard,
  },
  data() {
    return {
      parties: [],
    }
  },
  async created() {
    this.parties = await getAllParties()
  },
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;
}
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
.party-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
</style>
