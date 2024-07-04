<template>
  <DashboardLayout>
    <UCard class="p-4">
      <template #header>
        <h2 class="text-2xl font-bold">Create Congress</h2>
      </template>
      <div class="mt-4">
        <Form @submit="createCongressHandler" />
      </div>
    </UCard>
  </DashboardLayout>
</template>

<script setup>
import { useRouter } from 'vue-router'
import DashboardLayout from '@/components/DashboardLayout.vue'
import Form from '@/components/Congress/Form.vue'
import { createCongress } from '@/services/congressService'

const router = useRouter()

const createCongressHandler = async (newCongress) => {
  await createCongress(newCongress)
  router.push('/congress')
}
</script>

<style scoped>
/* Add any custom styles for the create page here */
</style>
