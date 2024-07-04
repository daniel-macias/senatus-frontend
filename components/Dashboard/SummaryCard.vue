<template>
    <nuxt-ui-card class="summary-card bg-gray-600 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
      <nuxt-ui-link :to="link" class="block text-center">
        <div class="card-content">
          <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
          <p class="text-3xl font-bold">{{ count }}</p>
        </div>
      </nuxt-ui-link>
    </nuxt-ui-card>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      count: Number,
      link: String
    }
  }
  </script>
  
  <style scoped>
  .summary-card {
    /* Styling for summary card */
  }
  .card-content {
    /* Styling for card content */
  }
  </style>
  