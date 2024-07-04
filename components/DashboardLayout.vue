<template>
    <div class="flex min-h-screen">
      <SideBar />
      <div class="flex-1">
        <Header />
        <div class="container mx-auto py-6 px-4">
          <slot />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header.vue'
  import SideBar from '@/components/SideBar.vue'
  
  export default {
    components: {
      Header,
      SideBar,
    },
  }
  </script>
  
  <style scoped>
  /* Add any custom styles for the layout here */
  </style>
  