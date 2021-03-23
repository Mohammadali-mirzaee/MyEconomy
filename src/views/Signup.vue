<template>
  <div
    id="Signup"
    v-if="this.$route.name !== 'Login' || this.$route.name !== 'Signup'"
  >
    <b-row class="row">
      <b-col class="left">
        <b-card-img class="img" src="@/assets/log.png"></b-card-img>
      </b-col>
      <b-col class="right">
        <br />
        <br />
        <p style="font-size:35px; letter-spacing:-0.5px;">
          <strong>Sign Up</strong> To MyEconomy
        </p>
        <p style="font-size:15px">
          Allready have an account yet ?
          <router-link tag="a" style="font-size:12px" to="/"
            >Login Here!</router-link
          >
        </p>
        <br />
        <b-alert
          :show="dismissCountDown"
          dismissible
          variant="danger"
          @dismissed="dismissCountDown = 0"
          @dismiss-count-down="countDownChanged"
        >
          Pleas Write the corecct values {{ dismissCountDown }} seconds...
        </b-alert>
        <div class="input">
          <div class="form-group">
            <label class="control-label col-sm-2" for="Name">Name:</label>
            <div class="col-sm-10">
              <b-input-group class="mb-2">
                <b-form-input
                  type="text"
                  placeholder="Name"
                  v-model="name"
                  :state="namevalidate"
                ></b-form-input>
                <b-input-group-prepend is-text>
                  <b-icon icon="person-fill"></b-icon>
                </b-input-group-prepend>
              </b-input-group>
              <b-form-invalid-feedback
                :state="namevalidate"
                v-if="hasSubmitted"
              >
                Your Name must be 3-5 characters long.
              </b-form-invalid-feedback>
              <b-form-valid-feedback :state="namedvalidate" v-if="hasSubmitted">
                Looks Good.
              </b-form-valid-feedback>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="password"
              >Password:</label
            >
            <div class="col-sm-10">
              <b-input-group class="mb-2">
                <b-form-input
                  :type="type"
                  placeholder="Password"
                  v-model="password"
                  :state="passwordvalidate"
                ></b-form-input>
                <b-input-group-prepend is-text>
                  <b-icon @click="showPassword" :icon="icon"></b-icon>
                </b-input-group-prepend>
              </b-input-group>
              <b-form-invalid-feedback
                :state="passwordvalidate"
                v-if="hasSubmitted"
              >
                Your password must be 7-12 characters long.
              </b-form-invalid-feedback>
              <b-form-valid-feedback
                :state="passwordvalidate"
                v-if="hasSubmitted"
              >
                Looks Good.
              </b-form-valid-feedback>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="email">Email:</label>
            <div class="col-sm-10">
              <b-input-group class="mb-2">
                <b-form-input
                  type="text"
                  placeholder="Email"
                  v-model="email"
                  :state="validation"
                ></b-form-input>
                <b-input-group-prepend is-text>
                  <b-icon icon="at"></b-icon>
                </b-input-group-prepend>
              </b-input-group>
              <b-form-invalid-feedback :state="validation" v-if="hasSubmitted">
                invlid Email Address
              </b-form-invalid-feedback>
              <b-form-valid-feedback :state="validation" v-if="hasSubmitted">
                Looks Good.
              </b-form-valid-feedback>
            </div>
          </div>
        </div>
        <!-- <b-form-file id="file-small" size="sm"></b-form-file> -->
        <b-button class="logBtn" @click="onclick">Sign Up</b-button>
      </b-col>
    </b-row>
    <b-modal ref="my-modal" hide-footer title="">
      <div class="d-block text-center">
        <h2>Registration successful !</h2>
      </div>
      <b-button class="mt-3" variant="outline-primary" block @click="intoLogin"
        >Login</b-button
      >
    </b-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        hasSubmitted: true,
        type: 'password',
        dismissSecs: 5,
        dismissCountDown: 0,
        icon: 'eye'
      }
    },

    mounted() {
      if (localStorage.name) {
        this.name = localStorage.name
      }
      if (localStorage.password) {
        this.password = localStorage.password
      }
      if (localStorage.email) {
        this.email = localStorage.email
      }
    },
    watch: {
      name(newName) {
        localStorage.name = newName
      },
      password(newPassword) {
        localStorage.password = newPassword
      },
      email(newEmail) {
        localStorage.email = newEmail
      }
    },

    methods: {
      validateEmail() {
        let req = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/
        return req.test(this.email)
      },
      validatepassword() {
        if (this.password) {
          return this.password.length > 6 && this.password.length < 13
        }
        return this.password.test(this.password)
      },
      validatename() {
        if (this.name) {
          return this.name.length > 2 && this.name.length < 25
        }
        return this.name.test(this.name)
      },

      onclick() {
        if (this.validation && this.passwordvalidate && this.namevalidate) {
          this.$refs['my-modal'].show()
        } else {
          this.dismissCountDown = this.dismissSecs
        }
      },
      intoLogin() {
        this.$emit('onaccountcreated')
        // this.$router.app.$emit('onaccountcreated')

        /*     localStorage.setItem('email', '')
        localStorage.setItem('password', '')
        localStorage.setItem('name', '') */
        this.$router.push('/')
      },
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showPassword() {
        if (this.type === 'password') {
          this.type = 'text'
          this.icon = 'eye-fill'
        } else {
          this.type = 'password'
          this.icon = 'eye'
        }
      }
    },
    computed: {
      validation() {
        if (this.email) {
          return this.validateEmail() ? true : false
        }
        return null
      },
      passwordvalidate() {
        if (this.password) {
          return this.validatepassword(this.password) ? true : false
        }
        return null
      },
      namevalidate() {
        if (this.name) {
          return this.validatename(this.name) ? true : false
        }
        return null
      }
    }
  }
</script>

<style scoped>
  .left {
    background-color: whitesmoke;
    border-radius: 1vh 0vh 0vh 1vh;
  }
  .right {
    background-color: white;
    border-radius: 0vh 1vh 1vh 0vh;
  }
  img {
    max-width: 100%;
  }
  .input-group-text {
    border-right: none;
    border-top: none;
    border-left: none;
    background-color: white;
  }
  .form-control {
    border-right: none;
    border-top: none;
    border-left: none;
  }
  .form-control:focus {
    border: none;
  }
  #Signup {
    background-color: #9eb9ff;
    height: 100%;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
  }
  .row {
    margin: auto;
    width: 80%;
    height: 100vh;
    padding: 30px;
  }
  .img {
    margin-top: 7em;
    width: calc(100% - 2em);
  }
  .input {
    text-align: left;
    margin-left: auto;
    height: auto;
    width: 120%;
  }
  .logBtn {
    background-color: #9eb9ff;
    border: none;
    border-radius: 10px;
    width: calc(50%);
    font-size: 20px;
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    .img {
      display: none;
    }
    .left {
      display: none;
    }
    .right {
      border-radius: 1vh 1vh 1vh 1vh;
      height: auto;
      width: auto;
    }
    .right h1 {
      font-size: 30px;
    }
    .input {
      width: 100%;
    }
    .row {
      width: auto;
    }
  }
  @media (max-width: 576px) {
    .right {
      height: auto;
      border-radius: 1vh 1vh 1vh 1vh;
      width: auto;
    }
    .form-group {
      width: auto;
    }
  }
</style>
