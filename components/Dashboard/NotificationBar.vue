<template>
    <nuxt-ui-alert v-if="notifications.length" class="notification-bar">
      <div v-for="notification in notifications" :key="notification.id">
        <p class="text-gray-800">{{ notification.message }}</p>
      </div>
    </nuxt-ui-alert>
  </template>
  
  <script>
  export default {
    data() {
      return {
        notifications: [
          { id: 1, message: 'System maintenance scheduled for tomorrow.' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .notification-bar {
    /* Styling for notification bar */
  }
  </style>
  