<template>
  <div>
    <b-form class="add"  @submit="onSubmit">          
      <b-form-input type="number" v-model="cost" placeholder="Add minus number for expense"></b-form-input>
      <b-form-input type="text" v-model="description" placeholder="Add description"></b-form-input>
      <b-form-timepicker v-model="value" locale="en"></b-form-timepicker>
      <b-button type="submit" id="button">Save</b-button>
      <b-button type="reset" id="reset-btn" variant="outline-danger">Reset</b-button>
    </b-form>      
  </div>
</template>

<script>
  export default {
    name: "addHistory",
    data(){
      return {
        cost:'',
        description:'',
        value:''
          
      }
    },
    mounted(){
      if (localStorage.cost) {
        this.cost = localStorage.cost
      }
      if (localStorage.description) {
        this.description = localStorage.description
      }
      if (localStorage.value) {
        this.value = localStorage.value
      }
    },
    watch: {
      cost(newCost) {
        localStorage.cost = newCost
        //watch cost for calculation        
        //this.$emit('new-cost', newCost)
      },
      description(newDescription) {
        localStorage.description = newDescription
      },
      value(newValue) {
        localStorage.value = newValue
      },      
    },        
    methods: {
      onSubmit(){
        //console.log('abc')
        this.$emit('input-data',{cost:this.cost, 
        description:this.description, 
        time:this.value})       
      }
    }
  }
</script>          

<style scoped>
  #button {
    background-color: #9eb9ff; 
    margin-top: 5px;
    margin-bottom: 15px;     
    padding-left: 27px;
    padding-right: 27px;
  }
  #reset-btn {
    /* background-color: rgb(226, 43, 202); */
    margin-top: 5px;
    margin-bottom: 15px;
    padding-left: 27px;
    padding-right: 27px;
  }
</style>