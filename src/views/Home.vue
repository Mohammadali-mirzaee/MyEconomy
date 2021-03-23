<template>
  <div class="Home">
    <Header title="Dashboard" :desc="desc" :date="true" />
    <div id="content">
      <div id="cardWrapLeft">
        <BudgetNumbers />
        <div class="chartDough">
          <ChartDoughnut />
        </div>
      </div>
      <div id="cardWrapRight">
        <div style="z-index:1;position: relative;">
          <h2>
            Money spent
            <!-- <img
            id="iconMoney"
            src="@/assets/DashboardIcons/money.png"
            alt="coinsIcon"
          /> -->
          </h2>
          <hr />
        </div>
        <img src="../assets/DashboardIcons/coin.gif" alt="Coin" id="imgCoin" />
        <div style="margin-top:-4rem;z-index:1;position: relative;">
          <h4 style="margin-bottom: 1em; text-align:center;">19 days left</h4>
          <ProgressBar id="progress" />
        </div>
        <expense-history />
      </div>
    </div>
  </div>
</template>

<script>
  import ChartDoughnut from '@/components/ChartDoughnut'
  import Header from '@/components/Header'
  import BudgetNumbers from '@/components/BudgetNumbers'
  import ProgressBar from '@/components/ProgressBar'
  import ExpenseHistory from '../components/expenses/ExpenseHistory.vue'

  export default {
    components: {
      Header,
      ChartDoughnut,
      BudgetNumbers,
      ProgressBar,
      ExpenseHistory
    },
    data() {
      return {
        desc: ' Welcome Back ' + (this.name = localStorage.getItem('name'))
      }
    }
  }
</script>

<style scoped>
  .Home {
    background-color: #fafafa;
    width: 100%;
    height: auto;
    /* background-color: aqua; */
    font-family: 'Open Sans', sans-serif;
    float: left;
  }
  #iconMoney {
    width: 50px;
    height: 50px;
    float: right;
  }
  #content {
    width: calc(100% - 2em);
    height: auto;
    float: left;
  }
  #cardWrapLeft {
    width: calc(50% - 2em);
    float: left;
    margin-bottom: 2em;
  }
  #cardWrapRight {
    /* background: url('../assets/DashboardIcons/coin.gif'); */
    /* background-size: cover; */
    /* background-position: center; */
    /* background-position-y: bottom; */
    /* background-repeat: no-repeat; */
    width: calc(50% - 2em);
    height: 100%;
    float: left;
    margin-bottom: 2em;
    padding: 10px;
    background-color: #ffffff;
    border-radius: 6px;
    border: 2px solid hsla(0, 0%, 0%, 0.2);
    text-align: center;
    margin-left: 2em;
  }
  #progress {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
  .chartDough {
    text-align: center;
    float: left;
    width: calc(100% - 4em);
    height: auto;
    border-radius: 6px;
    border: 1px solid hsla(0, 0%, 0%, 0.2);
    margin-top: 4em;
  }
  #line {
    width: 100%;
    text-align: center;
    opacity: 60%;
  }
  #imgCoin {
    margin-top: -5em;
    width: 80%;
    height: auto;
  }
  @media (max-width: 576px) {
    .Home {
      margin-left: 2em;
    }
    #cardWrapLeft {
      width: 100%;
      float: left;
      margin-bottom: 2em;
    }
    #cardWrapRight {
      width: calc(100% - 2em);
      background-position-y: -2em;
      text-align: center;
      float: left;
      margin-top: 2em;
      margin-bottom: 2em;
      margin-left: 0;
    }
    .travels {
      margin-right: 2em;
    }
    .clothes {
      margin-right: 2em;
    }
    .chartDough {
      text-align: center;
      float: left;
      width: calc(100% - 2em);
      height: auto;
      border-radius: 6px !important;
      border: 1px solid hsla(0, 0%, 0%, 0.2) !important;
      margin-bottom: 2em;
    }
    #line {
      width: 100%;
      text-align: center;
      opacity: 60%;
    }
    #imgCoin {
      width: 100%;
      margin-top: -4em;
      margin-bottom: 1em;
    }
  }
</style>
