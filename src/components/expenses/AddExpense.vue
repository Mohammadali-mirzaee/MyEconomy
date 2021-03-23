<template>
  <div>
    <button v-b-modal.addExpense>Add Expense</button>
    <ExpenseModel />
  </div>
</template>

<script>
  import ExpenseModel from '@/components/expenses/ExpenseModel'
  export default {
    components: { ExpenseModel }
  }
</script>

<style scoped>
  button {
    box-shadow: 0px 0px 5px 3px rgb(39 174 96 / 25%);
    transition: ease-in-out 0.25s;
    background: #27ae60;
    padding: 0.6rem 4rem;
    border-radius: 5px;
    color: #fff;
    border: 0;
  }

  button:hover {
    background: #23a058;
  }
</style>
