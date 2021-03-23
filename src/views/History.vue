<template>
  <div>
    <b-row>
      <b-col>
        <div class="header">
          <Header title="MyEconomy" :desc="desc" :date="true" />
        </div>
      </b-col>
    </b-row>
    <b-row align-v="stretch">
      <b-col cols="8" class="current-cash">
        <div id="tooltip-target-1" class="number">{{ cashRemain }} SEK</div>
        <b-tooltip target="tooltip-target-1" triggers="hover">
          You have <b>{{ cashRemain }}</b> cash remain untill your next salary!
        </b-tooltip>
        <div>Remain This Month</div>
        <div>
          My income <b>{{ myIncome }}</b> SEK
        </div>
        <b-dropdown id="edit-btn" text="Edit">
          <b-dropdow-item>
            <b-form-input
              v-model="myIncome"
              placeholder="my new income"
              type="number"
            ></b-form-input>
          </b-dropdow-item>
        </b-dropdown>
      </b-col>
      <b-col cols="4">
        <b-icon
          icon="arrow-right"
          id="icon-arrow-right"
          @click="redirectUser"
        ></b-icon>
        <h5 id="header">History</h5>
        <addHistory @input-data="receiveInputs"></addHistory>
        <b-list-group>
          <b-list-group-item button class="button">Today</b-list-group-item>
          <b-list-group-item
            href="#"
            variant="secondary"
            v-for="data in receivedDatas"
            :key="data.key"
          >
            {{ data.cost }}kr, {{ data.description }}, time: {{ data.time }}
            <b-icon icon="trash" @click="removeInputs(n)"></b-icon>
          </b-list-group-item>
          <!-- input datas do not remain on the browser when refreshing but can be seen on localStorage, why?   -->
        </b-list-group>
      </b-col>
    </b-row>
    <b-row align-v="stretch">
      <b-col cols="8" class="days-left">
        <Countdown
          :year="2021"
          :month="2"
          :date="25"
          :hour="23"
          :minute="59"
          :second="59"
          :millisecond="31"
        />
      </b-col>
      <b-col cols="4">
        <b-list-group>
          <b-list-group-item button class="button">Yesterday</b-list-group-item>
          <b-list-group-item href="#" variant="secondary"
            >-450kr, grocery shopping, time: 17:00:00</b-list-group-item
          >
        </b-list-group>
        <b-list-group>
          <b-list-group-item button class="button"
            >This Month</b-list-group-item
          >
          <b-list-group-item href="#" variant="secondary"
            >-45kr, toilet paper, time: 16:30:00</b-list-group-item
          >
          <b-list-group-item href="#" variant="light"
            >-85kr, pizza lunch, time: 12:30:00</b-list-group-item
          >
          <b-list-group-item href="#" variant="secondary"
            >-25kr, morning coffee, time: 09:00:00</b-list-group-item
          >
          <b-list-group-item href="#" variant="light"
            >-34kr, transport, time: 08:30:00</b-list-group-item
          >
          <b-list-group-item href="#" variant="secondary"
            >-499kr, T-shirt, time: 15:00:00</b-list-group-item
          >
        </b-list-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import router from '@/router/index.js'
  import Header from '@/components/Header'
  import addHistory from '@/components/addHistory'
  import Countdown from '@/components/Countdown'
  export default {
    components: {
      Header,
      addHistory,
      Countdown
    },
    data() {
      return {
        receivedDatas: [],
        myIncome: '',
        cashRemain: '4834',
        desc: ' Welcome Back ' + (this.name = localStorage.getItem('name'))
      }
    },
    mounted() {
      if (localStorage.myIncome) {
        this.myIncome = localStorage.myIncome
      }
      if (localStorage.getItem('receivedDatas')) {
        try {
          this.receivedDatas = JSON.parse(localStorage.getItem('receivedDatas'))
        } catch (e) {
          localStorage.removeItem('receivedDatas')
        }
      }
    },
    watch: {
      myIncome(newMyIncome) {
        localStorage.myIncome = newMyIncome
      }
    },
    methods: {
      receiveInputs(value) {
        value.key = Math.random()
        this.receivedDatas.unshift(value)
      },
      redirectUser() {
        router.push({ name: 'Home' })
      },
      removeInputs(x) {
        this.receivedDatas.splice(x, 1)
        this.saveReceivedDatas()
      },
      saveReceivedDatas() {
        const parsed = JSON.stringify(this.receivedDatas)
        localStorage.setItem('receivedDatas', parsed)
      }
      // cashRemain() {
      //   this.myIncome - this.value.cost
      // }
    },
    //computed no working, need to fix it
    computed: {
      updateCashRemain: {
        get: function() {
          return this.myIncome
        },
        set: function(value) {
          const newValue = value.cost
          this.cashRemain = this.myIncome - newValue
        }
      }
    }
  }
</script>

<style scoped>
  .current-cash {
    background-color: #9eb9ff80;
    text-align: center;
    padding-top: 75px;
  }
  .days-left {
    background-color: #9eb9ff;
    text-align: center;
    padding-top: 60px;
  }
  #header {
    text-align: center;
    padding-top: 10px;
    padding-bottom: 50px;
  }
  #icon-arrow-right {
    align-content: flex-start;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  .number {
    font-size: 30px;
    font-weight: 500;
  }
  .button {
    color: #9eb9ff;
  }
  #edit-btn {
    margin-left: 5px;
    margin-top: 5px;
  }
</style>
