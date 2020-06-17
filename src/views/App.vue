<template>
  <div class="Application">
    <h2>Application</h2>

    <span>Id: {{ id }}</span>
  </div>
</template>

<script>
import PendingApprovals from '@/components/PendingApprovals.vue'

export default {
  name: 'App',
  components: {
    
  },
  props: [
    'id'
  ]
}
</script>
