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
      <UButton type="submit" class="btn-primary">Save</UButton>
    </div>
  </form>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';

const props = defineProps({
  congress: {
    type: Object,
    required: true,
    default: () => ({
      name: '',
      organization: '',
      description: ''
    })
  }
});

const form = ref({ ...props.congress });

const emit = defineEmits(['submit']);

watch(() => props.congress, (newCongress) => {
  if (newCongress) {
    form.value = { ...newCongress };
  }
}, { immediate: true, deep: true });

const handleSubmit = () => {
  // Create a new object excluding the _id field and including memberIds if necessary
  const dataToSubmit = {
    name: form.value.name,
    organization: form.value.organization,
    description: form.value.description,
    memberIds: form.value.members ? form.value.members.map(member => member._id) : []
  };
  
  emit('submit', dataToSubmit);
}
</script>

<style scoped>
/* Add any custom styles for the form here */
</style>