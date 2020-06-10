<template>
  <div class="PendingTL">
    <h2>Pending Approval</h2>
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
