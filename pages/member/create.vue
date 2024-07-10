<template>
  <DashboardLayout>
    <UCard class="p-4">
      <template #header>
        <h2 class="text-2xl font-bold">Create Member</h2>
      </template>
      <div class="mt-4">
        <Form @submit="createMemberHandler" />
      </div>
    </UCard>
  </DashboardLayout>
</template>

<script>
import { useRouter } from 'vue-router'
import DashboardLayout from '@/components/DashboardLayout.vue'
import Form from '@/components/Member/Form.vue'
import { createMember } from '@/services/memberService'

export default {
  components: {
    DashboardLayout,
    Form,
  },
  setup() {
    const router = useRouter()

    const createMemberHandler = async (newMember) => {
      await createMember(newMember)
      router.push('/member')
    }

    return {
      createMemberHandler
    }
  }
}
</script>

<style scoped>
/* Add any custom styles for the create page here */
</style>
