<template>
  <div id="contentX">
    <div id="budgetCards" class="travels">
      <h3>
        Travels
        <img
          id="icon"
          src="@/assets/DashboardIcons/plane.png"
          alt="planeIcon"
        />
      </h3>
      <h2>{{ budget1 }} SEK</h2>
    </div>
    <div id="budgetCards">
      <h3>
        Foods
        <img
          id="icon"
          src="@/assets/DashboardIcons/hamburger.png"
          alt="hamburgerIcon"
        />
      </h3>
      <h2>{{ budget2 }} SEK</h2>
    </div>
    <div id="budgetCards" class="travels">
      <h3>
        Clothes
        <img
          id="icon"
          src="@/assets/DashboardIcons/shirt.png"
          alt="shirtIcon"
        />
      </h3>
      <h2>{{ budget3 }} SEK</h2>
    </div>
    <div id="budgetCards">
      <h3>
        Savings
        <img
          id="icon"
          src="@/assets/DashboardIcons/coins.png"
          alt="coinsIcon"
        />
      </h3>
      <h2>{{ budget4 }} SEK</h2>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      budget1: '',
      budget2: '',
      budget3: '',
      budget4: ''
    }
  },
  mounted(){
    this.budget1 = localStorage.getItem('budget1')
    this.budget2 = localStorage.getItem('budget2')
    this.budget3 = localStorage.getItem('budget3')
    this.budget4 = localStorage.getItem('budget4')
  }
}
</script>
<style scoped>
  #budgetCards {
    width: calc(50% - 1em);
    height: 15%;
    padding: 10px;
    background-color: #ffffff;
    border-radius: 6px;
    border: 2px solid hsla(0, 0%, 0%, 0.2);
    text-align: left;
    margin-left: 2em;
    margin-bottom: 2em;
    float: left;
  }
  #budgetCards h3 {
    margin-top: 0em;
  }
  #budgetCards h2 {
    margin-top: 1.5em;
    margin-bottom: 0em;
    float: left;
    font-size: 28px;
  }
  #icon {
    width: 20px;
    height: 20px;
    float: right;
    margin-top: 0.3em;
  }
  .travels {
    margin-left: 0em !important;
  }
  #contentX {
    width: calc(100% - 4em);
    float: left;
  }
  @media (max-width: 576px) {
    #budgetCards {
      width: calc(100% + 2em);
      margin-left: 0em;
    }
  }
</style>
