<template>
   <div>
        <h3>Pending Approvals</h3>
        <div class="approvals">
            <div 
                v-for="(pending,i) in allPending" :key="i" 
                class="pending">
                <br>{{ pending.driverCode }} - {{ pending.applicant }} - {{ pending.status}}
            </div>
        </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "PendingApprovals",
    methods: {
      ...mapActions(['fetchApprovals'])
    },
    computed: mapGetters(['allPending']),
    created() {
      this.fetchApprovals();
    }
}
</script>
.approvals {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.pending {
  border: 1px solid #000;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
<style>

</style>