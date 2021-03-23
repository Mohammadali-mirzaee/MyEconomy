<template>
  <div id="app">
    <Onboard />
    <div
      class="overlay"
      @click="showSidebar = !showSidebar"
      :class="{ show: showSidebar }"
    ></div>
    <div
      class="wrapper"
      v-if="this.$route.name !== 'Login' && this.$route.name !== 'Signup'"
    >
      <div class="toggle" @click="showSidebar = !showSidebar">
        <b-icon-list font-scale="2" />
      </div>
      <nav class="sidebar" :class="{ show: showSidebar }">
        <div class="user">
          <div class="actions">
            <router-link
              to="/"
              style="float:left; color: white; text-decoration:none; padding-left : 10px"
            >
              <b-icon icon="box-arrow-in-left" font-scale="1.2"></b-icon>
              logout</router-link
            >

            <b-icon-bell animation="fade" @click="notification" font-scale="1.2" />
          </div>
          <div class="profile">
            <b-icon-person-fill font-scale="4.5" />
          </div>
          <div class="info">
            <h4>Hi {{ name }}</h4>
            <p>
              {{ email }}
            </p>
          </div>
        </div>
        <div class="items">
          <ul>
            <li>
              <router-link to="/dashboard">
                <b-icon-compass /> Dashboard</router-link
              >
            </li>
            <li>
              <router-link to="/Budgets"> <b-icon-cash /> Budgets</router-link>
            </li>
            <li>
              <router-link to="/history">
                <b-icon-clock-history /> History
              </router-link>
            </li>
            <li>
              <router-link to="/Stocks"
                ><b-icon-bar-chart-line /> Stocks
              </router-link>
            </li>
          </ul>
        </div>
        <div class="bottom">
          <AddButton />
        </div>
      </nav>
      <div class="container main">
        <router-view @onaccountcreated="f" />
      </div>
    </div>
    <div v-else>
      <router-view @onaccountcreated="f" />
    </div>
  </div>
</template>

<script>
  import AddButton from '@/components/expenses/AddExpense'
  import Onboard from '@/components/Onboard'
  import 'vuejs-noty/dist/vuejs-noty.css'

  import {
    BIconCompass,
    BIconClockHistory,
    BIconBarChartLine,
    BIconPersonFill,
    BIconCash,
    BIconBell,
    BIconList
  } from 'bootstrap-vue'

  export default {
    name: 'App',
    components: {
      AddButton,
      Onboard,
      BIconCompass,
      BIconClockHistory,
      BIconBarChartLine,
      BIconPersonFill,
      BIconCash,
      BIconBell,
      BIconList
    },
    data() {
      return {
        showSidebar: undefined,
        email: '',
        name: ''
      }
    },
    methods: {
      f() {
        this.email = localStorage.getItem('email')
        this.name = localStorage.getItem('name')
      },
      notification() {
        this.$noty.info('Hey! Something important comming here soon ! ', {
          killer: false,
          timeout: 6000,
          theme: 'metroui',
          layout: 'topRight'
        }),
        this.$noty.warning("There is a warrning!",{killer: false,
          timeout: 6000,
          theme: 'metroui',
          layout: 'topRight'}),
          this.$noty.error("There is an error!",{killer: false,
          timeout: 6000,
          theme: 'metroui',
          layout: 'topRight'})
      }
    },
    mounted() {
      if (localStorage.name) {
        this.name = localStorage.name
      }
      if (localStorage.email) {
        this.email = localStorage.email
      }
    }
  }
</script>

<style>
  html,
  body {
    background: #fafafa !important;
    padding: 0;
    margin: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #222222;
  }

  #nav a {
    font-weight: bold;
    color: #222222;
  }

  #nav a.router-link-exact-active {
    color: #42b983;

    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #fafafa;
    padding: 0;
    margin: 0;
  }

  .overlay {
    background-color: #222222;
    position: fixed;
    display: none;
    opacity: 0.6;
    height: 100%;
    width: 100%;
    z-index: 2;
    left: 0;
    top: 0;
  }

  .wrapper {
    display: flex;
  }

  .main {
    margin-left: 320px !important;
  }

  .sidebar {
    transition: ease-in-out 0.4s;
    background: #303d4f;
    color: #fafafa;
    position: fixed;
    height: 100%;
    width: 260px;
    z-index: 10;
    left: 0;
    top: 0;
  }

  .sidebar .bottom {
    position: absolute;
    bottom: 2rem;
    width: 100%;
  }

  .sidebar ul {
    list-style-type: none;
    text-align: left;
    margin: 0 1rem;
    padding: 0;
  }

  .sidebar li {
    transition: ease-in-out 0.4s;
    padding: 0.4rem 0.8rem;
    margin: 0.5rem 0;
    font-size: 1.1rem;
  }

  .sidebar li:hover {
    background: #415269;
    border-radius: 40px;
  }

  .sidebar .items {
    margin-top: 1rem;
  }

  .sidebar ul li a {
    color: #fafafa;
  }

  .sidebar ul li a:hover {
    text-decoration: none;
  }

  .sidebar ul li svg {
    margin-right: 0.5rem;
  }

  .sidebar .user {
    text-align: center;
    border-bottom: 2px solid #43556d;
  }

  .sidebar .user .actions {
    margin: 1rem 1rem 0.5rem 0;
    text-align: right;
  }

  .sidebar .profile svg {
    background: #415269;
    border-radius: 50px;
    margin-bottom: 0.8rem;
    padding: 0.5rem;
    color: #fafafa;
  }

  .sidebar .info h3 {
    font-size: 1.2rem;
    margin-bottom: 0;
  }

  .sidebar .info p {
    font-size: 0.9rem;
  }

  .toggle {
    background: #222222;
    padding: 0.5rem 1rem;
    text-align: right;
    position: fixed;
    display: none;
    color: #fafafa;
    z-index: 2;
    width: 100%;
    top: 0;
  }

  .toggle svg {
    cursor: pointer;
  }

  .modal-content {
    background: #fafafa !important;
    border-radius: 5px !important;
    border: 0 !important;
    color: #222222;
  }

  @media (max-width: 768px) {
    .main {
      margin-left: 0 !important;
    }
    .sidebar {
      box-shadow: 2px 0px 5px 0px rgba(0, 0, 0, 0.5);
      -webkit-box-shadow: 2px 0px 5px 0px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: 2px 0px 5px 0px rgba(0, 0, 0, 0.5);
      position: fixed;
      display: none;
      height: 100%;
      width: 35%;
    }
    .toggle {
      display: block;
    }
    .show {
      display: block;
    }
  }
  @media (max-width: 576px) {
    .sidebar {
      width: 60%;
    }
  }
</style>
