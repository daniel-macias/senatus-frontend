<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import DashboardLayout from '@/components/DashboardLayout.vue';
import { getAllMembersWithParty } from '@/services/memberService';
import { useRouter } from 'vue-router';

interface Member {
  _id: string;
  name: string;
  party: { name: string; color: string; };
  position: string;
  photoUrl?: string;
  startDate?: string;
  endDate?: string;
  bio?: string;
}

const router = useRouter();

const columns = [
  {
    key: 'name',
    label: 'Name',
    sortable: true
  },
  {
    key: 'party.name',
    label: 'Party',
    sortable: true
  },
  {
    key: 'party.color',
    label: 'Color'
  },
  {
    key: 'position',
    label: 'Position'
  },
  {
    key: 'actions',
    label: 'View'
  }
];

const members = ref<Member[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

const q = ref('');
const page = ref(1);
const pageCount = 5;

const filteredRows = computed(() => {
  if (!q.value) {
    return members.value || [];
  }

  return (members.value || []).filter((member: Member) => {
    return Object.values(member).some((value) => {
      return String(value).toLowerCase().includes(q.value.toLowerCase());
    });
  });
});

const paginatedRows = computed(() => {
  const start = (page.value - 1) * pageCount;
  const end = start + pageCount;
  return filteredRows.value.slice(start, end);
});

onMounted(async () => {
  try {
    console.log('Fetching members...');
    const fetchedMembers = await getAllMembersWithParty();
    console.log('Members:', fetchedMembers);
    members.value = fetchedMembers;
  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
    console.log(members.value);
  }
});

const goToMember = (id: any) => {
  console.log(id);
  //router.push(`/member/${id}`)

}
</script>

<template>
  <DashboardLayout>
    <div class="bg-gray-100 min-h-screen">
      <h2 class="text-2xl font-bold mb-4 text-gray-700">Members</h2>
      <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
        <UInput v-model="q" placeholder="Filter members..." />
      </div>
      <UTable 
        :rows="paginatedRows" 
        :columns="columns" 
        :loading="loading" 
        :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'No items.' }" 
        class="w-full"
      >
        <template #actions-data="{ row }">
          <UButton  @click="goToMember(row._id)" color="primary" variant="solid">View</UButton>
        </template>
      </UTable>
      <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
        <UPagination v-model="page" :page-count="pageCount" :total="filteredRows.values.length" />
      </div>
      <div v-if="loading">Loading...</div>
      <div v-if="error">{{ error }}</div>
    </div>
  </DashboardLayout>
</template>

<style scoped>
/* Add any custom styles for the member list page here */
</style>
