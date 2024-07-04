<template>
  <DashboardLayout>
    <nuxt-ui-card class="p-4">
      <h2>{{ isEditing ? 'Edit Congress' : 'Create Congress' }}</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="name" class="block text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            v-model="congress.name"
            class="mt-1 block w-full"
            required
          />
        </div>

        <div class="mb-4">
          <label for="organization" class="block text-gray-700">Organization</label>
          <input
            type="text"
            id="organization"
            v-model="congress.organization"
            class="mt-1 block w-full"
            required
          />
        </div>

        <div class="mb-4">
          <label for="description" class="block text-gray-700">Description</label>
          <textarea
            id="description"
            v-model="congress.description"
            class="mt-1 block w-full"
          ></textarea>
        </div>

        <div class="flex justify-end">
          <button type="submit" class="btn btn-primary">
            {{ isEditing ? 'Update' : 'Create' }}
          </button>
        </div>
      </form>
    </nuxt-ui-card>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from '@/components/DashboardLayout.vue'

export default {
  components: {
    DashboardLayout,
  },
  data() {
    return {
      isEditing: false,
      congress: {
        name: '',
        organization: '',
        description: '',
      },
    }
  },
  methods: {
    submitForm() {
      // Handle form submission (create or update congress)
      if (this.isEditing) {
        // Update existing congress
      } else {
        // Create new congress
      }
    },
  },
  created() {
    if (this.$route.params.id) {
      this.isEditing = true;
      // Fetch congress data by ID and populate the form
    }
  },
}
</script>

<style scoped>
/* Add any custom styles for the form here */
</style>
