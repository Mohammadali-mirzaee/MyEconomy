<template>
  <b-modal id="addExpense" title="Add Expense" size="lg" centered hide-footer>
    <b-alert
      @dismiss-count-down="countDownChanged"
      :show="dismissCountDown"
      variant="success"
      dismissible
      fade
    >
      Expense Added
    </b-alert>
    <b-form @submit="onSubmit">
      <div class="row mb-2 mt-2">
        <div class="col-md-6">
          <b-form-group label="Expense Name" label-for="name">
            <b-form-input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Expense Name"
              autocomplete="off"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-6">
          <b-form-group label="Expense Amount" label-for="amount">
            <b-form-input
              id="amount"
              v-model="form.amount"
              type="number"
              placeholder="Expense Amount"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-md-6">
          <b-form-group label="Expense Type" label-for="type">
            <b-form-select
              id="type"
              v-model="form.type"
              :options="categories"
              required
            ></b-form-select>
          </b-form-group>
        </div>
        <div class="col-md-6">
          <b-form-group label="Expense Date" label-for="date">
            <b-form-datepicker
              id="date"
              v-model="form.date"
              :date-format-options="{
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
              }"
              placeholder="Expense Date"
              locale="en"
              required
            ></b-form-datepicker>
          </b-form-group>
        </div>
      </div>
      <b-button type="submit" variant="dark">Submit</b-button>
    </b-form>
  </b-modal>
</template>

<script>
  export default {
    data() {
      return {
        dismissCountDown: 0,
        showDismissibleAlert: false,
        form: {
          id: null,
          name: null,
          amount: null,
          type: null,
          date: null
        },
        categories: [
          { text: 'Expense Type', value: null },
          { text: 'Clothing', value: 'Clothing' },
          { text: 'Savings', value: 'Savings' },
          { text: 'Travel', value: 'Travel' },
          { text: 'Food', value: 'Food' },
          { text: 'Others', value: 'Others' }
        ]
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        this.id = this.$uuid.v4()
        this.$store.commit('addExpense', this.form)

        this.form.id = null
        this.form.name = null
        this.form.amount = null
        this.form.type = null
        this.form.date = null
        this.dismissCountDown = 5
      },
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      }
    }
  }
</script>

<style scoped>
  button {
    float: right;
  }
</style>
