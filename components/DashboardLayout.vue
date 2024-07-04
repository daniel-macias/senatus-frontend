<template>
    <div class="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div class="flex flex-1">
        <SideBar />
        <div class="flex-1">
          <div class="container mx-auto py-6 px-4">
            <slot />
          </div>
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
  