<template>
  <DashboardLayout>
    <nuxt-ui-card class="p-4">
      <h2>View Congress</h2>
      <div class="mb-4">
        <strong>Name:</strong> {{ congress.name }}
      </div>
      <div class="mb-4">
        <strong>Organization:</strong> {{ congress.organization }}
      </div>
      <div class="mb-4">
        <strong>Description:</strong> {{ congress.description }}
      </div>
    </nuxt-ui-card>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from '@/components/DashboardLayout.vue'
import { getCongressById } from '@/services/congressService'

export default {
  components: {
    DashboardLayout,
  },
  data() {
    return {
      congress: {
        name: '',
        organization: '',
        description: '',
      },
    }
  },
  async created() {
    const congressId = this.$route.params.id
    this.congress = await getCongressById(congressId)
  },
}
</script>

<style scoped>
/* Add any custom styles for the view page here */
</style>
