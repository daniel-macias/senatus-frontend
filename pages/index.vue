<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <header class="bg-slate-800 text-white py-4 px-8">
      <nav class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">Senatus</h1>
        <ul class="flex space-x-4">
          <li><a href="#" class="hover:underline">Home</a></li>
          <li><a href="#" class="hover:underline">Features</a></li>
          <li><a href="#" class="hover:underline">Pricing</a></li>
          <li><a href="#" class="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="flex-grow bg-slate-200 text-center flex flex-col items-center justify-center py-20">
      <h2 class="text-4xl font-bold mb-4 text-gray-800">Welcome to Senatus</h2>
      <p class="text-lg mb-8 text-gray-600">Streamline the management of your congresses and legislative processes</p>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Get Started
      </button>
      <div class="w-full max-w-lg mt-12">
        <div class="bg-gray-900 rounded-full h-4 w-full overflow-hidden mb-2">
          <div class="bg-green-500 h-full" style="width: 50%"></div>
        </div>
        <p class="text-green-500">Disk usage</p>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-slate-800 text-white py-4">
      <div class="container mx-auto text-center">
        © 2024 Senatus. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup>
// Your script logic (if any)
</script>

<style scoped>
/* Custom styles (if any) */
</style>
