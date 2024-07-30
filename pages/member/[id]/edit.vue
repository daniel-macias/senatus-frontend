<template>
  <DashboardLayout>
    <UCard class="p-4">
      <template #header>
        <h2 class="text-2xl font-bold">Edit Member</h2>
      </template>
      <div class="mt-4">
        <EditForm :member="member" @submit="updateMemberHandler" />
      </div>
    </UCard>
  </DashboardLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import DashboardLayout from '@/components/DashboardLayout.vue';
import EditForm from '@/components/Member/EditForm.vue';
import { getMemberById, updateMemberById } from '@/services/memberService';

const route = useRoute();
const router = useRouter();
const member = ref(null);

onMounted(async () => {
  const memberId = route.params.id;
  const fetchedMember = await getMemberById(memberId);
  member.value = fetchedMember;
});

const updateMemberHandler = async (updatedMember) => {
  const memberId = route.params.id;
  await updateMemberById(memberId, updatedMember);
  router.push('/member');
};
</script>

<style scoped>
/* Add any custom styles for the edit page here */
</style>
