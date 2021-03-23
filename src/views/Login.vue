<template>
  <div id="login">
    <b-row class="row">
      <b-col class="left">
        <b-card-img class="img" src="@/assets/log.png"></b-card-img>
      </b-col>
      <b-col class="right">
        <p style="font-size:40px; letter-spacing:-0.5px;">
          <strong>Login</strong> To
        </p>
        <b-img src="@/assets/economyLogo.png"></b-img>
        <br />
        Dont have an account yet ?
        <router-link to="/Signup" style="font-size:12px">
          Sign Up Here!</router-link
        >
        <br /><br />
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
            <label class="control-label col-sm-2" for="email">Email:</label>
            <div class="col-sm-10">
              <b-input-group class="mb-2">
                <b-form-input
                  v-model="email"
                  type="text"
                  :state="validation"
                  placeholder="Email"
                  required
                ></b-form-input>
                <b-input-group-prepend is-text>
                  <b-icon icon="person-fill"></b-icon>
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
          <div class="form-group">
            <label class="control-label col-sm-2" for="email">Password:</label>
            <div class="col-sm-10">
              <b-input-group class="mb-2">
                <b-form-input
                  v-model="password"
                  :type="type"
                  placeholder="Password"
                  :state="passwordvalidate"
                  required
                ></b-form-input>
                <b-input-group-prepend is-text>
                  <b-icon @click="showPassword" :icon="icon"></b-icon>
                </b-input-group-prepend>
              </b-input-group>
              <b-form-invalid-feedback
                :state="passwordvalidate"
                v-if="hasSubmitted"
              >
                Your password must be 5-12 characters long.
              </b-form-invalid-feedback>
              <b-form-valid-feedback
                :state="passwordvalidate"
                v-if="hasSubmitted"
              >
                Looks Good.
              </b-form-valid-feedback>
              <div>
                <p style="text-align:right;  margin-top: 0em; font-size:12px">
                  <a href="javascript:" @click="link">
                    Forgot Password?
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <b-button class="logBtn" @click="onclick">Login</b-button>
      </b-col>
    </b-row>
    <b-modal id="modal-prevent-closing" ref="modal" title="Submit Your Email">
      <b-form-input
        id="input-1"
        type="email"
        placeholder="Enter email"
        required
      ></b-form-input>
    </b-modal>
  </div>
</template>

<script>
  export default {
    component: {},
    data() {
      return {
        email: '',
        password: '',
        name: '',
        msg: [],
        hasSubmitted: true,
        emailColor: 'red',
        type: 'password',
        icon: 'eye',
        dismissSecs: 5,
        dismissCountDown: 0,
        value: ''
      }
    },
    /*     mounted() {
      if (localStorage.email) {
        this.email = localStorage.email
      }
      if (localStorage.password) {
        this.password = localStorage.password
      }
    },

    watch: {
      email(newEmail) {
        localStorage.email = newEmail
      },
      password(newPassword) {
        localStorage.password = newPassword
      }
    },
 */
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
      showPassword() {
        if (this.type === 'password') {
          this.type = 'text'
          this.icon = 'eye-fill'
        } else {
          this.type = 'password'
          this.icon = 'eye'
        }
      },
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },

      onclick() {
        if (this.validation && this.passwordvalidate && localStorage.email) {
          if (
            localStorage.getItem('email') === this.email &&
            localStorage.getItem('password') === this.password
          ) {
            this.$router.push('/dashboard')
          }
        }
        this.dismissCountDown = this.dismissSecs
      },

      link() {
        this.$refs['modal'].show()
      }
    },
    computed: {
      validation() {
        if (this.email) {
          return this.validateEmail(this.email) ? true : false
        }
        return null
      },
      passwordvalidate() {
        if (this.password) {
          return this.validatepassword(this.password) ? true : false
        }
        return null
      }
    }
  }
</script>

<style scoped>
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
  .left {
    background-color: whitesmoke;
    border-radius: 1vh 0vh 0vh 1vh;
  }
  .right {
    background-color: white;
    border-radius: 0vh 1vh 1vh 0vh;
    padding-top: 20px;
  }
  #login {
    background-color: #9eb9ff;
    height: 100vh;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
  }
  .row {
    margin: auto;
    width: 80%;
    height: 100%;
    padding: 30px;
  }
  .img {
    margin-top: 8em;
    width: calc(100% - 2em);
  }
  .input {
    text-align: left;
    margin-left: auto;
    width: 120%;
  }
  .logBtn {
    background-color: #9eb9ff;
    border: none;
    border-radius: 10px;
    width: calc(50%);
    font-size: 20px;
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
