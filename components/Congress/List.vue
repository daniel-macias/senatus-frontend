<template>
  <div>
    <nuxt-ui-card v-for="congress in congresses" :key="congress._id" class="mb-4">
      <h3>{{ congress.name }}</h3>
      <p>{{ congress.organization }}</p>
      <p>{{ congress.description }}</p>
    </nuxt-ui-card>
  </div>
</template>

<script>
import { getAllCongresses } from '@/services/congressService.js';

export default {
  data() {
    return {
      congresses: [],
    };
  },
  async created() {
    try {
      const response = await getAllCongresses();
      this.congresses = response;
    } catch (error) {
      console.error('Error fetching congresses:', error);
    }
  },
};
</script>

<style scoped>
/* Add any custom styles for the list of congresses here */
</style>
