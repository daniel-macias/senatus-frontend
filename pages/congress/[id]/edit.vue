<template>
  <DashboardLayout>
    <UCard class="p-4">
      <template #header>
        <h2 class="text-2xl font-bold">Edit Congress</h2>
        <div>{{congress}}</div>
      </template>
      <div class="mt-4">
        <Form :congress="congress" @submit="updateCongressHandler" />
      </div>
    </UCard>
  </DashboardLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import DashboardLayout from '@/components/DashboardLayout.vue';
import Form from '@/components/Congress/EditForm.vue';
import { getCongressById, updateCongressById } from '@/services/congressService';

const route = useRoute();
const router = useRouter();
const congress = ref(null);

onMounted(async () => {
  const congressId = route.params.id;
  const fetchedCongress = await getCongressById(congressId);
  congress.value = fetchedCongress;
  console.log(congress.value);
});

const updateCongressHandler = async (updatedCongress) => {
  const congressId = route.params.id;
  await updateCongressById(congressId, updatedCongress);
  router.push('/congress');
};
</script>

<style scoped>
/* Add any custom styles for the edit page here */
</style>
