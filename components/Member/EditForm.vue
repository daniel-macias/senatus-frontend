<template>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <UInput v-model="form.name" label="Name" required placeholder="Name" />
      </div>
      <div class="mb-4">
        <USelect v-model="form.party" label="Party" :options="partyOptions" required />
      </div>
      <div class="mb-4">
        <UInput v-model="form.position" label="Position" required placeholder="Position" />
      </div>
      <div class="mb-4">
        <UInput v-model="form.photoUrl" label="Photo URL" placeholder="Photo URL" />
      </div>
      <div class="mb-4">
        <UInput type="date" v-model="form.startDate" label="Start Date" />
      </div>
      <div class="mb-4">
        <UInput type="date" v-model="form.endDate" label="End Date" />
      </div>
      <div class="mb-4">
        <UInput type="textarea" v-model="form.bio" label="Bio" placeholder="Bio" />
      </div>
      <div class="flex justify-end">
        <UButton type="submit" class="btn-primary">Save</UButton>
      </div>
    </form>
  </template>
  
  <script setup>
  import { ref, watch, onMounted, defineProps, defineEmits } from 'vue'
  import { getAllParties } from '@/services/partyService'
  
  const props = defineProps({
    member: {
      type: Object,
      required: true,
      default: () => ({
        name: '',
        party: {},
        position: '',
        photoUrl: '',
        startDate: '',
        endDate: '',
        bio: ''
      })
    }
  });
  
  const form = ref({ ...props.member });
  
  const partyOptions = ref([])
  
  onMounted(async () => {
    const parties = await getAllParties();
    partyOptions.value = parties.map(party => ({ label: party.name, value: party._id }));

    if (props.member && props.member.party && props.member.party._id) {
        form.value.party = props.member.party._id;
    }
    });
  
  const emit = defineEmits(['submit'])
  
  watch(() => props.member, (newMember) => {
    if (newMember) {
      form.value = { ...newMember, party: newMember.party ? newMember.party._id : '' }
    }
  }, { immediate: true, deep: true });
  
  const handleSubmit = () => {
    emit('submit', { ...form.value, party: form.value.party });
    };
  </script>
  
  <style scoped>
  /* Add any custom styles for the form here */
  </style>
  