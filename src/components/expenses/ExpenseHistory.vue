<template>
  <div class="container history">
    <div v-if="this.$store.state.expenses.length !== 0">
      <div
        class="expense"
        v-for="expense in this.$store.state.expenses.slice().reverse()"
        :key="expense.id"
      >
        <div class="left">
          <h4>{{ expense.name }}</h4>
          <span>{{ expense.date }}</span>
        </div>
        <div class="right">
          <p>-{{ expense.amount }}</p>
        </div>
      </div>
    </div>
    <div v-else style="text-align:center;">
      <p>No Expenses</p>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .history {
    -ms-overflow-style: none;
    scrollbar-width: none;
    text-align: left;
    margin-top: 2rem;
    overflow: scroll;
    max-height: 300px;
  }

  .history::-webkit-scrollbar {
    display: none;
  }

  .history .expense {
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding: 0.6rem 0;
    margin: 0 0.5rem;
    display: flex;
    display: flex;
  }

  .history .expense:last-of-type {
    border: 0;
  }

  .history h4 {
    font-size: 1.15rem;
    color: #222222;
    margin: 0;
  }

  .history p {
    margin-top: 1rem;
    margin-bottom: 0;
  }

  .history span {
    font-size: 0.9rem;
    color: #636e72;
  }
</style>
