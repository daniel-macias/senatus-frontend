<template>
    <nuxt-ui-card>
      <h3 class="text-gray-800 mb-4">Recent Activity</h3>
      <div class="flex space-x-4">
        <nuxt-ui-card v-for="activity in activities" :key="activity.id" class="w-1/4 p-4">
          <p class="text-gray-800">{{ activity.message }}</p>
        </nuxt-ui-card>
      </div>
    </nuxt-ui-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activities: [
          { id: 1, message: 'Congress A was created.' },
          { id: 2, message: 'Member B joined Congress A.' },
          { id: 3, message: 'Poll X concluded.' },
          { id: 4, message: 'Session Y scheduled.' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  h3 {
    color: #4a5568; /* Dark gray */
  }
  
  p {
    color: #4a5568; /* Dark gray */
  }
  </style>
  