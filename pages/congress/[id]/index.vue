<template>
  <DashboardLayout>
      <h2 class="text-2xl font-bold text-gray-800" v-if="congress">{{ congress.name }}</h2>
      <div class="mt-4" v-if="congress">
        <p class="text-gray-600"><strong>Organization:</strong> {{ congress.organization }}</p>
        <p class="text-gray-600"><strong>Description:</strong> {{ congress.description }}</p>
      </div>
      <div class="bg-gray-100 mt-4">
        <h2 class="text-2xl font-bold mb-4 text-gray-700">Members</h2>
        <div class="flex py-3.5 border-b border-gray-200 dark:border-gray-700">
          <UInput v-model="q" placeholder="Filter members..." />
        </div>
        <UTable 
          :rows="paginatedRows" 
          :columns="columns" 
          :loading="loading" 
          :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'No items.' }" 
          class="w-full"
        >
          <template #name-data="{ row }">
            <td :style="{ color: 'black' }">
              {{ row.name }}
            </td>
          </template>
          <template #party.name-data="{ row }">
            <td :style="{ backgroundColor: row.party.color, color: 'white' }">
              {{ row.party.name }}
            </td>
          </template>
          <template #actions-data="{ row }">
            <UButton @click="goToMember(row._id)" color="primary" variant="solid">View</UButton>
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

const route = useRoute();
const router = useRouter();

const congress = ref<Congress | null>(null);
const members = ref<Member[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

const columns = [
  {
    key: 'name',
    label: 'Name',
    sortable: true,
    class: 'dark:bg-gray-600'
  },
  {
    key: 'party.name',
    label: 'Party',
    sortable: true,
    class: 'dark:bg-gray-600'
  },
  {
    key: 'actions',
    label: 'View',
    class: 'dark:bg-gray-600'
  }
];

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

const goToMember = (id: any) => {
  router.push(`/member/${id}`);
};

onMounted(async () => {
  try {
    const congressId = route.params.id;
    const fetchedCongress = await getCongressById(congressId);
    congress.value = fetchedCongress;
    members.value = fetchedCongress.members || [];
  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
</style>