<template>
  <DashboardLayout>
    <UCard class="p-4">
      <template #header>
        <h2 class="text-2xl font-bold">Edit Party</h2>
        <div>{{ party }}</div>
      </template>
      <div class="mt-4">
        <EditForm :party="party" @submit="updatePartyHandler" />
      </div>
    </UCard>
  </DashboardLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import DashboardLayout from '@/components/DashboardLayout.vue';
import EditForm from '@/components/Party/EditForm.vue';
import { getPartyById, updatePartyById } from '@/services/partyService';

const route = useRoute();
const router = useRouter();
const party = ref(null);

onMounted(async () => {
  const partyId = route.params.id;
  const fetchedParty = await getPartyById(partyId);
  party.value = fetchedParty;
});

const updatePartyHandler = async (updatedParty) => {
  const partyId = route.params.id;
  await updatePartyById(partyId, updatedParty);
  router.push('/party');
};
</script>

<style scoped>
/* Add any custom styles for the edit page here */
</style>