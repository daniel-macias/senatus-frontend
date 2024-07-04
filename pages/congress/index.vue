<template>
  <DashboardLayout>
    <nuxt-ui-card class="p-4">
      <h2>Congresses</h2>
      <List :congresses="congresses" @delete="deleteCongress" />
    </nuxt-ui-card>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from '@/components/DashboardLayout.vue'
import List from '@/components/Congress/List.vue'
import { getAllCongresses, deleteCongressById } from '@/services/congressService'

export default {
  components: {
    DashboardLayout,
    List,
  },
  data() {
    return {
      congresses: [],
    }
  },
  async created() {
    this.congresses = await getAllCongresses()
  },
  methods: {
    async deleteCongress(congressId) {
      await deleteCongressById(congressId)
      this.congresses = await getAllCongresses()
    },
  },
}
</script>

<style scoped>
/* Add any custom styles for the index page here */
</style>
