<template>
  <DashboardLayout>
    <UCard class="p-4">
      <template #header>
        <h2 class="text-2xl font-bold" v-if="congress">{{ congress.name }}</h2>
      </template>
      <div class="mt-4" v-if="congress">
        <p><strong>Organization:</strong> {{ congress.organization }}</p>
        <p><strong>Description:</strong> {{ congress.description }}</p>
        <p><strong>Members:</strong></p>
        <ul>
          <li v-for="member in congress.members" :key="member._id">
            <strong>Name:</strong> {{ member.name }}
            <ul>
              <li><strong>Party Name:</strong> {{ member.party.name }}</li>
              <li><strong>Party Color:</strong> {{ member.party.color }}</li>
            </ul>
          </li>
        </ul>
      </div>
      <div v-else>
        Loading...
      </div>
    </UCard>
  </DashboardLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import DashboardLayout from '@/components/DashboardLayout.vue';
import { getCongressById } from '@/services/congressService';

interface Party {
  _id: string;
  name: string;
  color: string;
}

interface Member {
  _id: string;
  name: string;
  party: Party;
}

interface Congress {
  _id: string;
  name: string;
  organization: string;
  description: string;
  members: Member[];
}

const congress = ref<Congress | null>(null);
const route = useRoute();

onMounted(async () => {
  try {
    congress.value = await getCongressById(route.params.id);
    console.log('Congress:', congress.value);
  } catch (error) {
    console.error(error);
  }
});
</script>

<style scoped>
/* Add any custom styles for the view page here */
</style>
