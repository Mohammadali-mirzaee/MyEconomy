<template>
  <div class="header">
    <h1>{{ title }}</h1>
    <p>{{ desc }}</p>
    <div class="dateboxwrap" v-if="date">
      <div class="date">
        {{ moment(new Date()).format('YYYY-MM-DD') }}
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      title: String,
      desc: String,
      date: Boolean
    }
  }
</script>

<style scoped>
  .header {
    width: calc(100% - 4em);
    text-align: left;
    float: left;
    margin: 2rem 0;
  }

  .header h1 {
    color: #222222;
  }

  .header p {
    margin-left: 3px;
    color: #505050;
  }

  .date {
    display: block;
    width: 100px;
    height: auto;
    border-radius: 6px;
    background-color: #9eb9ff;
    float: right;
    margin-top: -3.5em;
    border: 1px solid hsla(0, 0%, 0%, 0.1);
    text-align: center;
    color: #ffffff;
    padding: 5px;
  }

  @media (max-width: 768px) {
    .header {
      margin-top: 5rem;
    }
  }
</style>
