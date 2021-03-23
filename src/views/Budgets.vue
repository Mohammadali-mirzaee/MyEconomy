<template>
  <div class="Budget">
    <Header title="Budgets" :desc="desc" :date="true" />
    <BudgetNumbers />
    <div>
      <form id="budgetForm" class="txtBox" @submit="subForm">
        <input
          style="margin-left: 0em;"
          id="txtInput"
          type="text"
          placeholder="Travels Amount..."
          v-model="budget1"
        />
        <input
          id="txtInput"
          type="text"
          placeholder="Foods Amount..."
          v-model="budget2"
        />
        <input
          id="txtInput"
          type="text"
          placeholder="Clothes Amount..."
          v-model="budget3"
        />
        <input
          id="txtInput"
          type="text"
          placeholder="Savings Amount..."
          v-model="budget4"
        />
        <br />
        <input id="btn" type="submit" value="Edit budgets" />
      </form>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import BudgetNumbers from '@/components/BudgetNumbers'

  export default {
    components: {
      Header,
      BudgetNumbers
    },
    data() {
      return {
        budget1: '',
        budget2: '',
        budget3: '',
        budget4: '',
        desc: ' Welcome Back ' + (this.name = localStorage.getItem('name'))
      }
    },
    methods: {
      subForm() {
        localStorage.setItem(this.budget1, 'budget1')
        localStorage.setItem(this.budget2, 'budget2')
        localStorage.setItem(this.budget3, 'budget3')
        localStorage.setItem(this.budget4, 'budget4')

        document.getElementById('budgetForm').reset()
      }
    },
    mounted() {
      if (localStorage.budget1) {
        this.budget1 = localStorage.budget1
      }
      if (localStorage.budget2) {
        this.budget2 = localStorage.budget2
      }
      if (localStorage.budget3) {
        this.budget3 = localStorage.budget3
      }
      if (localStorage.budget4) {
        this.budget4 = localStorage.budget4
      }
    },
    watch: {
      budget1(newBudget1) {
        localStorage.budget1 = newBudget1
      },
      budget2(newBudget2) {
        localStorage.budget2 = newBudget2
      },
      budget3(newBudget3) {
        localStorage.budget3 = newBudget3
      },
      budget4(newBudget4) {
        localStorage.budget4 = newBudget4
      }
    }
  }
</script>

<style scoped>
  .Budget {
    width: 100%;
    height: auto;
    /* background-color: aqua; */
    font-family: 'Open Sans', sans-serif;
    float: left;
  }
  .txtBox {
    width: calc(100% - 4em);
    margin-top: 2em;
    display: inline-grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 2em;
    float: left;
  }
  #btn {
    background-color: #9eb9ff;
    border: 1px solid hsla(0, 0%, 0%, 0.1);
    border-radius: 6px;
    color: #ffffff;
    margin-left: calc(75% + 1em);
  }
  #txtInput {
    background-color: #ffffff;
    border-radius: 6px;
    border: 2px solid hsla(0, 0%, 0%, 0.2);
    text-align: center;
  }
  @media (max-width: 576px) {
    .Budget {
      margin-left: 1em;
    }
    #budgetCards {
      width: 100%;
      float: left;
      margin-left: 0em;
      margin-bottom: 1em;
    }
    #budgetCards h2 {
      margin-top: 0em;
    }
    .txtBox {
      display: block;
    }
    #txtInput {
      width: calc(100% + 2em);
      margin-bottom: 1em;
      height: auto;
      float: left;
    }
    #btn {
      margin-left: calc(25% - 2em);
      margin-bottom: 2em;
    }
  }
</style>
