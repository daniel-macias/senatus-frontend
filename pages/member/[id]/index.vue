<template>
    <DashboardLayout>
      <UCard class="p-4">
        <template #header>
          <h2 class="text-2xl font-bold" v-if="member">{{ member.name }}</h2>
        </template>
        <div class="mt-4" v-if="member">
          <p><strong>Position:</strong> {{ member.position }}</p>
          <p><strong>Party:</strong> {{ member.party.name }}</p>
          <p><strong>Photo URL:</strong> {{ member.photoUrl }}</p>
          <p><strong>Start Date:</strong> {{ member.startDate }}</p>
          <p><strong>End Date:</strong> {{ member.endDate }}</p>
          <p><strong>Bio:</strong> {{ member.bio }}</p>
        </div>
        <div v-else>
          Loading...
        </div>
      </UCard>
    </DashboardLayout>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import DashboardLayout from '@/components/DashboardLayout.vue'
  import { getMemberById } from '@/services/memberService'
  
  export default {
    components: {
      DashboardLayout,
    },
    setup() {
      const member = ref(null)
      const route = useRoute()
  
      onMounted(async () => {
        member.value = await getMemberById(route.params.id)
      })
  
      return { member }
    }
  }
  </script>
  
  <style scoped>
  /* Add any custom styles for the view page here */
  </style>
  