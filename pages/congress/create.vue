<template>
  <DashboardLayout>
    <nuxt-ui-card class="p-4">
      <h2>Create Congress</h2>
      <Form @submit="createCongress" />
    </nuxt-ui-card>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from '@/components/DashboardLayout.vue'
import Form from '@/components/Congress/Form.vue'
import { createCongress } from '@/services/congressService'

export default {
  components: {
    DashboardLayout,
    Form,
  },
  methods: {
    async createCongress(newCongress) {
      await createCongress(newCongress)
      this.$router.push('/congress')
    },
  },
}
</script>

<style scoped>
/* Add any custom styles for the create page here */
</style>
