<template>
    <nuxt-link :to="`/party/${party._id}`" class="block">
      <UCard class="bg-gray-100 dark:bg-gray-200 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
        <h3 class="text-xl font-bold text-gray-800">{{ party.name }}</h3>
        <p class="text-gray-600">{{ party.ideology }}</p>
        <p class="text-gray-700 mt-2">{{ party.color }}</p>
        <p class="text-gray-700 mt-2">{{ party.leader }}</p>
        <p class="text-gray-700 mt-2">{{ party.founded }}</p>
        <p class="text-gray-700 mt-2">{{ party.headquarters }}</p>
        <p class="text-gray-700 mt-2">{{ party.website }}</p>
        <p class="text-gray-700 mt-2">{{ party.photoUrl }}</p>
      </UCard>
    </nuxt-link>
  </template>
  
  <script setup>
  const props = defineProps({
    party: {
      type: Object,
      required: true,
    },
  })
  </script>
  
  <style scoped>
  /* Add any custom styles for the PartyCard here */
  </style>
  