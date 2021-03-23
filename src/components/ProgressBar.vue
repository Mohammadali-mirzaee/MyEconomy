<template>
  <b-progress :max="max" height="3rem">
    <b-progress-bar :value="value">
      <span>
        <strong> {{ value }} / {{ max }}</strong>
      </span>
    </b-progress-bar>
  </b-progress>
</template>

<script>
  export default {
    data() {
      return {
        value: 0,
        max: ''
      }
    },
    mounted() {
      if (localStorage.myIncome) {
        this.max = localStorage.myIncome
      }
      for (let n = 0; n < this.$store.state.expenses.length; n++) {
        this.value += parseInt(this.$store.state.expenses[n].amount)
      }
    },
    watch: {
      value(newValue) {
        this.value = newValue
      }
    }
  }
</script>
