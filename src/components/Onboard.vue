<template>
  <div
    v-if="
      onboard && this.$route.name !== 'Login' && this.$route.name !== 'Signup'
    "
  >
    <div class="onboard-overlay" @click="close"></div>
    <div class="onboard" v-for="onboard in onboardItem" :key="onboard.step">
      <template v-if="onboard.step === currentStep">
        <div class="image">
          <img :src="onboard.image" alt="Onboard Image" width="200" />
        </div>
        <div class="desc">
          <h2>{{ onboard.title }}</h2>
          <p>{{ onboard.desc }}</p>
          <div class="actions">
            <div class="steps">
              <span
                v-for="step in totalSteps"
                @click="changeStep(step)"
                :style="
                  currentStep === step
                    ? 'background: #9eb9ff'
                    : 'background: #d8d8d8;'
                "
                :key="step"
              ></span>
            </div>
            <div class="next" v-if="currentStep !== totalSteps" @click="next">
              Next
            </div>
            <div class="next" v-else @click="close">
              Done
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        onboard: this.$store.state.showOnboard,
        totalSteps: 4,
        currentStep: 1,
        stepData: [
          {
            title: 'Saving made easy',
            desc:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sapien augue, facilisis nec tellus ac, pulvinar blandit dolor. Duis semper rhoncus efficitur.',
            image: require('@/assets/step_one.svg'),
            step: 1
          },
          {
            title: 'Create your budget',
            desc:
              'Maecenas at nibh eu dui tristique dapibus vitae eget dui. Sed quis ultrices est. Nam enim magna, interdum a neque a, viverra aliquam nulla',
            image: require('@/assets/step_two.svg'),
            step: 2
          },
          {
            title: 'Add expenses',
            desc:
              'Etiam consectetur dapibus imperdiet. Ut tortor lectus, egestas a fermentum eu, consequat nec risus. Mauris ut libero vitae nisl scelerisque luctus.',
            image: require('@/assets/step_three.svg'),
            step: 3
          },
          {
            title: 'Follow the stock market',
            desc:
              'Morbi urna turpis, congue nec arcu a, rutrum dictum libero. Donec cursus, tortor et bibendum sagittis, ipsum ipsum pellentesque felis.',
            image: require('@/assets/step_four.svg'),
            step: 4
          }
        ]
      }
    },
    methods: {
      changeStep(step) {
        this.currentStep = step
      },
      next() {
        this.currentStep += 1
      },
      close() {
        this.onboard = false
        this.$store.commit('changeOnboard')
      }
    },
    computed: {
      onboardItem() {
        return this.stepData.filter(data => data.step === this.currentStep)
      }
    }
  }
</script>

<style scoped>
  .onboard-overlay {
    background-color: #222222;
    position: fixed;
    opacity: 0.6;
    height: 100%;
    width: 100%;
    z-index: 11;
    left: 0;
    top: 0;
  }

  .onboard {
    background: #ffff;
    position: fixed;
    border-radius: 5px;
    align-items: center;
    display: flex;
    margin: auto;
    height: 400px;
    width: 800px;
    z-index: 12;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
  }

  .onboard .image {
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    background: #f9f9f9;
    padding: 0 5rem;
    display: flex;
    height: 100%;
  }

  .onboard .desc {
    text-align: left;
    margin: 0 2rem;
  }

  .onboard .desc h2 {
    color: #222;
  }

  .onboard .actions {
    align-items: center;
    position: absolute;
    display: flex;
    bottom: 2.5rem;
    right: 2rem;
  }

  .onboard .actions .next {
    transition: ease-in-out 0.25s;
    padding: 0.5rem 1.5rem;
    background: #9eb9ff;
    border-radius: 2px;
    cursor: pointer;
    color: #fff;
    float: right;
  }

  .onboard .actions .next:hover {
    background: #7b9ffb;
  }

  .onboard .actions .steps {
    margin-right: 1.25rem;
  }

  .onboard .actions .steps span {
    display: inline-block;
    background: #d8d8d8;
    border-radius: 100%;
    margin: 0 0.25rem;
    cursor: pointer;
    height: 8px;
    width: 8px;
  }

  @media (max-width: 768px) {
    .onboard {
      display: block;
      height: auto;
      width: 100%;
      bottom: unset;
      top: 8rem;
    }
    .onboard .image {
      justify-content: center;
      padding: 1rem 0;
      border-radius: 0;
    }
    .onboard .desc {
      margin: 2rem 1.5rem;
    }
    .onboard .actions {
      position: initial;
    }
  }
</style>
