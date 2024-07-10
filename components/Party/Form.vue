<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-4">
      <UInput v-model="form.name" label="Name" required placeholder="Name" />
    </div>
    <div class="mb-4">
      <UInput v-model="form.ideology" label="Ideology" required placeholder="Ideology" />
    </div>
    <div class="mb-4">
      <UInput v-model="form.color" label="Color" required placeholder="Color" />
    </div>
    <div class="mb-4">
      <UInput v-model="form.leader" label="Leader" placeholder="Leader" />
    </div>
    <div class="mb-4">
      <UInput type="date" v-model="form.founded" label="Founded" placeholder="Founded" />
    </div>
    <div class="mb-4">
      <UInput v-model="form.headquarters" label="Headquarters" placeholder="Headquarters" />
    </div>
    <div class="mb-4">
      <UInput v-model="form.website" label="Website" placeholder="Website" />
    </div>
    <div class="mb-4">
      <UInput v-model="form.photoUrl" label="Photo URL" placeholder="Photo URL" />
    </div>
    <div class="flex justify-end">
      <UButton type="submit" class="btn-primary">Submit</UButton>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  ideology: '',
  color: '',
  leader: '',
  founded: '',
  headquarters: '',
  website: '',
  photoUrl: ''
})

const emit = defineEmits(['submit'])

const handleSubmit = () => {
  emit('submit', form.value)
}
</script>

<style scoped>
/* Add any custom styles for the form here */
</style>
