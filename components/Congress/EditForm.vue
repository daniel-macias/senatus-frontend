<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-4">
      <UInput v-model="form.name" label="Name" required placeholder="Name" />
    </div>
    <div class="mb-4">
      <UInput v-model="form.organization" label="Organization" required placeholder="Organization" />
    </div>
    <div class="mb-4">
      <UInput type="textarea" v-model="form.description" label="Description" placeholder="Description" />
    </div>
    <div class="flex justify-end">
      <UButton type="submit" class="btn-primary">Create</UButton>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  organization: '',
  description: ''
})

const emit = defineEmits(['submit'])

const handleSubmit = () => {
  emit('submit', form.value)
}
</script>

<style scoped>
/* Add any custom styles for the form here */
</style>
