<template>
    <nuxt-link :to="`/congress/${congress._id}`" class="block">
      <UCard class="congress-card bg-gray-100 dark:bg-gray-200 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
        <template #header>
          <h3 class="text-xl font-bold text-gray-800">{{ congress.name }}</h3>
        </template>
  
        <div class="card-content">
          <p class="text-gray-600">{{ congress.organization }}</p>
          <p class="text-gray-700 mt-2">{{ congress.description }}</p>
        </div>
  
      </UCard>
    </nuxt-link>
  </template>
  
  <script>
  export default {
    props: {
      congress: {
        type: Object,
        required: true,
      },
    },
  }
  </script>
  
  <style scoped>
  .congress-card {
    /* Styling for congress card */
  }
  
  .card-content {
    /* Styling for card content */
  }
  </style>
  