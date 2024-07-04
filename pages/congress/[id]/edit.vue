<template>
  <DashboardLayout>
    <nuxt-ui-card class="p-4">
      <h2>Edit Congress</h2>
      <Form :congress="congress" @submit="updateCongress" />
    </nuxt-ui-card>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from '@/components/DashboardLayout.vue'
import Form from '@/components/Congress/Form.vue'
import { getCongressById, updateCongressById } from '@/services/congressService'

export default {
  components: {
    DashboardLayout,
    Form,
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
  methods: {
    async updateCongress(updatedCongress) {
      const congressId = this.$route.params.id
      await updateCongressById(congressId, updatedCongress)
      this.$router.push('/congress')
    },
  },
}
</script>

<style scoped>
/* Add any custom styles for the edit page here */
</style>
