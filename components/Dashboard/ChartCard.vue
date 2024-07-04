<template>
    <div class="bg-gray-600 shadow rounded-lg p-4">
      <h2 class="text-xl font-semibold mb-4">{{ title }}</h2>
      <!-- Chart content here -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add any custom styles for the chart card here */
  </style>
  