<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <Header />
    <div class="flex flex-1">
      <Sidebar />
      <div class="flex-1">
        <div class="container mx-auto py-6 px-4">
          <NotificationBar />

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SummaryCard title="Total Congresses" count="12" link="/congress" />
            <SummaryCard title="Total Members" count="120" link="/member" />
            <SummaryCard title="Upcoming Sessions" count="5" link="/session" />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <ChartCard title="Member Participation" />
            <ChartCard title="Poll Results" />
          </div>

          <div class="grid grid-cols-1 gap-4 mt-4">
            <RecentActivity />
          </div>

          <div class="grid grid-cols-1 gap-4 mt-4">
            <QuickActions />
          </div>
        </div>
        <Footer />
      </div>
      
    </div>
    
  </div>
</template>

<script>
import Header from '../components/Dashboard/Header.vue'
import SummaryCard from '../components/Dashboard/SummaryCard.vue'
import ChartCard from '../components/Dashboard/ChartCard.vue'
import RecentActivity from '../components/Dashboard/RecentActivity.vue'
import QuickActions from '../components/Dashboard/QuickActions.vue'
import Footer from '../components/Dashboard/Footer.vue'
import NotificationBar from '../components/Dashboard/NotificationBar.vue'
import Sidebar from '../components/Dashboard/Sidebar.vue'

export default {
  components: {
    Header,
    SummaryCard,
    ChartCard,
    RecentActivity,
    QuickActions,
    Footer,
    NotificationBar,
    Sidebar
  }
}
</script>

<style scoped>
/* Add any custom styles for the dashboard page here */
</style>
