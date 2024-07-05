<template>
  <DashboardLayout>
    <UCard class="p-4">
      <template #header>
        <h2 class="text-2xl font-bold">Create Party</h2>
      </template>
      <div class="mt-4">
        <Form @submit="createPartyHandler" />
      </div>
    </UCard>
  </DashboardLayout>
</template>

<script>
import { useRouter } from 'vue-router'
import DashboardLayout from '@/components/DashboardLayout.vue'
import Form from '@/components/Party/Form.vue'
import { createParty } from '@/services/partyService'

export default {
  components: {
    DashboardLayout,
    Form,
  },
  setup() {
    const router = useRouter()

    const createPartyHandler = async (newParty) => {
      await createParty(newParty)
      router.push('/party')
    }

    return { createPartyHandler }
  }
}
</script>

<style scoped>
/* Add any custom styles for the create page here */
</style>
