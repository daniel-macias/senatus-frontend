<template>
  <div>
    <CongressCard
      v-for="congress in congresses"
      :key="congress._id"
      :congress="congress"
    />
  </div>
</template>

<script>
import CongressCard from './CongressCard.vue'

export default {
  props: {
    congresses: {
      type: Array,
      required: true,
    },
  },
  components: {
    CongressCard,
  },
}
</script>

<style scoped>
/* Add any custom styles for the List component here */
</style>
