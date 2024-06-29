<template>
  <div>
    <header class="bg-gray-800 text-white p-4">
      <nav class="container mx-auto flex justify-between items-center">
        <div class="text-2xl font-bold">Senatus</div>
        <ul class="flex space-x-4">
          <li><a href="#" class="hover:text-gray-400">Home</a></li>
          <li><a href="#" class="hover:text-gray-400">Features</a></li>
          <li><a href="#" class="hover:text-gray-400">Pricing</a></li>
          <li><a href="#" class="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main class="container mx-auto mt-10 p-4">
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-4">Welcome to Senatus</h1>
        <p class="text-xl text-gray-700 mb-8">Streamline the management of your congresses and legislative processes</p>
        <a href="#" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Get Started</a>
        <UMeter label="Disk usage" :value="86" />
      </div>
    </main>
    <footer class="bg-gray-800 text-white p-4 mt-10">
      <div class="container mx-auto text-center">
        &copy; 2024 Senatus. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>
