<template>
  <div v-if="loaded">
    <h5 v-if="!expired" class="title" id="countdown">Countdown</h5>       
    <h5 v-else>Timer is Done</h5> 
    <b-tooltip target="countdown" triggers="hover">
      There are <b>{{displayDays}}</b> days remain until your next salary!
    </b-tooltip>      
    <b-row class="row-wrapper">       
      <div class="days">{{displayDays}}
        <div class="lable">days</div>
        <b-icon icon="circle" class="icon-circle"></b-icon>
      </div>
      <span class="leading-snug">:</span>
      <div class="hours ">{{displayHours}}
        <div class="lable">hours</div>
        <b-icon icon="circle" class="icon-circle"></b-icon>
      </div>
      <span class="leading-snug">:</span>
      <div class="minutes ">{{displayMinutes}}
        <div class="lable">minutes</div>
        <b-icon icon="circle" class="icon-circle"></b-icon>
      </div>
      <span class="leading-snug">:</span>
      <div class="seconds">{{displaySeconds}}
        <div class="lable">seconds</div>
         <b-icon icon="arrow-clockwise" class="icon-clockwise" animation="spin"></b-icon>
      </div>
    </b-row>            
  </div>
</template>
           

<script>
  export default {
    name: "Countdown",
    props: ['year', 'month', 'date', 'hour', 'minute', 'second', 'millisecond'],
    data(){
      return {
        displayDays: 0, 
        displayHours: 0, 
        displayMinutes: 0, 
        displaySeconds: 0,
        loaded: false,
        expired: false 
      }
    },
    computed: {
      _seconds: () => 1000,
      _minutes(){
        return this._seconds * 60
      },
      _hours() {
        return this._minutes * 60
      },
      _days() {
        return this._hours * 24
      },
      end() {
        return new Date(
          this.year,
          this.month,
          this.date,
          this.hour,
          this.minute,
          this.second,
          this.millisecond
        )
      }
    },
    mounted() {
      this.showRemaining()
    },
    methods: {
      formatNum: num => (num < 10 ? "0" + num : num),
  
      showRemaining() {
        const timer = setInterval(() => {
          const now = new Date()
          //const end = new Date(2021, 2, 25, 10, 10, 10, 10)
          const distance = this.end.getTime() - now.getTime()
  
          if (distance < 0) {
            clearInterval(timer)
            this.expired = true
            this.loaded = true
            return
          }
  
          const days = Math.floor(distance / this._days)
          const hours = Math.floor((distance % this._days) / this._hours)
          const minutes = Math.floor((distance % this._hours) / this._minutes)
          const seconds = Math.floor((distance % this._minutes) / this._seconds)
          this.displayMinutes = this.formatNum(minutes)
          this.displaySeconds = this.formatNum(seconds)
          this.displayHours = this.formatNum(hours)
          this.displayDays = this.formatNum(days)
          this.loaded = true
        }, 1000)
      } 
    }
  
  }
</script>

<style scoped>
 .row-wrapper {
   justify-content: center;
   margin-bottom: 80px;
 }
 .days {
   margin-right: 15px;
 }
 .hours {
   margin-right: 15px;
 }
 .minutes {
   margin-right: 15px;
 }
 .leading-snug {
   margin-right: 15px;
   font-size: 30px;
 }
 .icon-clockwise{
    width: 150px; 
    height: 150px;
    color: #ffffff;
    align-content: center; 
    margin-top: -100px;     
  }
  .icon-circle{
    width: 110px; 
    height: 110px;
    color: #ffffff;
    align-content: center; 
    margin-top: -80px; 
  }
  .title {
    margin-top: 80px;
    margin-bottom: 80px;
  }  

</style>