<template>
  <DashboardLayout>
    <UCard class="p-4">
      <template #header>
        <h2 class="text-2xl font-bold" v-if="member">{{ member.name }}</h2>
      </template>
      <UButton @click="goToEdit()" color="primary" variant="solid">Edit Member Details</UButton>
      <div class="mt-4" v-if="member">
        <p><strong>Position:</strong> {{ member.position }}</p>
        <p><strong>Party:</strong> {{ member.party.name }}</p>
        <p><strong>Ideology:</strong> {{ member.party.ideology }}</p>
        <p><strong>Color:</strong> {{ member.party.color }}</p>
        <p><strong>Leader:</strong> {{ member.party.leader }}</p>
        <p><strong>Founded:</strong> {{ member.party.founded }}</p>
        <p><strong>Headquarters:</strong> {{ member.party.headquarters }}</p>
        <p><strong>Website:</strong> {{ member.party.website }}</p>
        <p><strong>Party Photo URL:</strong> {{ member.party.photoUrl }}</p>
        <p><strong>Member Photo URL:</strong> {{ member.photoUrl }}</p>
        <p><strong>Start Date:</strong> {{ member.startDate }}</p>
        <p><strong>End Date:</strong> {{ member.endDate }}</p>
        <p><strong>Bio:</strong> {{ member.bio }}</p>
      </div>
      <div v-else>
        Loading...
      </div>
    </UCard>
  </DashboardLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import DashboardLayout from '@/components/DashboardLayout.vue'
import { getMemberById } from '@/services/memberService'

interface Party {
  _id: string;
  name: string;
  ideology: string;
  color: string;
  leader: string;
  founded: string;
  headquarters: string;
  website: string;
  photoUrl: string;
}

interface Member {
  _id: string;
  name: string;
  party: Party;
  position: string;
  photoUrl?: string;
  startDate?: string;
  endDate?: string;
  bio?: string;
}

const member = ref<Member | null>(null)
const route = useRoute()

onMounted(async () => {
  member.value = await getMemberById(route.params.id)
  console.log('Member:', member.value)
})

const router = useRouter();

const goToEdit = () => {
  const congressId = route.params.id;
  router.push(`/member/${congressId}/edit`);
}

</script>

<style scoped>
/* Add any custom styles for the view page here */
</style>
