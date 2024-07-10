<script setup lang="ts">
import { ref, onMounted } from 'vue';
import DashboardLayout from '@/components/DashboardLayout.vue';
import { getAllMembers } from '@/services/memberService';

interface Member {
  _id: string;
  name: string;
  party: string;
  position: string;
  photoUrl?: string;
  startDate?: string;
  endDate?: string;
  bio?: string;
}

const members = ref<Member[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    console.log('Fetching members...');
    const fetchedMembers = await getAllMembers();
    console.log('Members:', fetchedMembers);
    members.value = fetchedMembers;
  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <DashboardLayout>
    <div class="bg-gray-100 min-h-screen">
      <h2 class="text-2xl font-bold mb-4 text-gray-700">Members</h2>
      <div v-if="loading">Loading...</div>
      <div v-if="error">{{ error }}</div>
      <pre v-if="!loading && !error">{{ JSON.stringify(members, null, 2) }}</pre>
    </div>
  </DashboardLayout>
</template>

<style scoped>
/* Add any custom styles for the member list page here */
</style>
