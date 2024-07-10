<template>
    <DashboardLayout>
      <UCard class="p-4">
        <template #header>
          <h2 class="text-2xl font-bold">{{ party.name }}</h2>
        </template>
        <div class="mt-4">
          <p><strong>Ideology:</strong> {{ party.ideology }}</p>
          <p><strong>Color:</strong> {{ party.color }}</p>
          <p><strong>Leader:</strong> {{ party.leader }}</p>
          <p><strong>Founded:</strong> {{ party.founded }}</p>
          <p><strong>Headquarters:</strong> {{ party.headquarters }}</p>
          <p><strong>Website:</strong> {{ party.website }}</p>
          <p><strong>Photo URL:</strong> {{ party.photoUrl }}</p>
        </div>
      </UCard>
    </DashboardLayout>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import DashboardLayout from '@/components/DashboardLayout.vue'
  import { getPartyById } from '@/services/partyService'
  
  export default {
    components: {
      DashboardLayout,
    },
    setup() {
      const party = ref(null)
      const route = useRoute()
  
      onMounted(async () => {
        party.value = await getPartyById(route.params.id)
      })
  
      return { party }
    }
  }
  </script>
  
  <style scoped>
  /* Add any custom styles for the view page here */
  </style>
  