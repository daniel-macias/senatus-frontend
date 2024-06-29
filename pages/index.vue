<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold mb-4">Welcome to Your Nuxt.js App</h1>
    <p class="mb-4">This is the home page of your Nuxt.js application.</p>
    <nuxt-link to="/about" class="text-blue-500 hover:underline">Go to About Page</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}
</style>
