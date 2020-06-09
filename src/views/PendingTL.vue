<template>
  <div class="PendingTL">
    <h1>Pending Terminal Leader</h1>
    <PendingApprovals/>
  </div>
</template>

<script>
import PendingApprovals from '@/components/PendingApprovals.vue'

export default {
  name: 'PendingTL',
  components: {
    PendingApprovals
  }
  
}
</script>
