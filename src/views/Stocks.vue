<template>
  <div class="Stocks">
    <div class="header">
      <Header title="Stocks" :desc="desc" :date="true" />
    </div>
    <h1>Your stocks</h1>
    <div class="h2 mb-0"></div>
    <b-container>
      <b-alert v-if="total < 0" show variant="warning" dismissible fade
        >You are loosing money</b-alert
      >
      <b-alert v-else show variant="success" dismissible fade
        >You are winning money</b-alert
      >
    </b-container>
    <div class="table">
      <div class="search">
      <b-input-group size="md" class="mb-2">
      <b-input-group-prepend is-text>
        <b-icon icon="search"></b-icon>
      </b-input-group-prepend>
      <b-form-input 
      type="search" 
      placeholder="Search"
      v-model="filter"
      ></b-form-input>
    </b-input-group>
    </div>
      <b-form-fieldset
        horizontal
        label="Rows per page"
        class="col-2"
        label-size="8"
      >
        <b-form-select 
          :options="[
            { text: 5, value: 5 },
            { text: 10, value: 10 },
            { text: 15, value: 15 }
          ]"
          v-model="perPage"
        >
        </b-form-select>
      </b-form-fieldset>
      <div class="table-responsive">
        <b-table
          fixed
          stacked="sm"
          class="banner"
          hover
          bordered
          :items="items"
          :filter="filter"
          :per-page="perPage"
          :current-page="currentPage"
          :fields="fields"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
        >
          <template v-slot:cell(actions)="tasks">
            <b-button variant="danger" @click="deleteItem(tasks.item)"
              ><b-icon icon="trash" aria-hidden="true"></b-icon
            ></b-button>
            /
            <b-button a href="https://www.swedbank.se/" variant="primary">
              <b-icon icon="basket" aria-hidden="true"></b-icon
            ></b-button>
          </template>
          <template v-slot:cell(stocks_24h)="data">
            <p>
              <span
                ><b-icon
                  variant="black"
                  icon="arrow-clockwise"
                  animation="spin"
                  aria-hidden="true"
                ></b-icon></span
              >{{ data.item.stocks_24h }}
            </p>
          </template>
          <template v-slot:cell(stocks_year)="data">
            <p>
              <span
                ><b-icon
                  variant="black"
                  icon="percent"
                  
                  aria-hidden="true"
                ></b-icon></span
              >{{ data.item.stocks_year }}
            </p>
          </template>
          <div>
            Sorting By: <b>{{ sortBy }}</b
            >, Sort Direction:
            <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
          </div>
        </b-table>
      </div>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
      ></b-pagination>
    </div>
    <div class="total">
      <h3>
        Total 24h 
        </h3>
        <p>
        <span class="emoji" v-if="total > 0"
          ><b-icon
            variant="success"
            icon="emoji-smile-fill"
            aria-hidden="true"
          ></b-icon
        ></span>
        <span class="emoji" v-else
          ><b-icon
            variant="danger"
            icon="emoji-angry-fill"
            aria-hidden="true"
          ></b-icon
        ></span>
        <span><input type="column" size="10" :value="total"> / </span>SEK
      </p>
    </div>
    
    
  </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    components: {
      Header
    },
    data() {
      return {
        desc: ' Welcome Back ' + (this.name = localStorage.getItem('name')),
        arrow: false,
        sortBy: 'name',
        sortDesc: false,
        fields: [
          { key: 'name', sortable: true },
          { key: 'stocks_owned', sortable: true },
          { key: 'stocks_price', sortable: true },
          { key: 'stocks_year', sortable: true },
          { key: 'stocks_24h', sortable: true },
          { key: 'actions', sortable: false }
        ],
        perPage: 5,
        currentPage: 1,
        filter: '',
        items: [
          {
            name: 'SEB',
            stocks_owned: 15,
            stocks_price: 123,
            stocks_year: +10.23,
            stocks_24h: Math.floor(Math.random() * 201) - 100,
            _cellVariants: {
              name: 'dark',
              stocks_owned: 'secondary',
              stocks_price: 'primary',
              stocks_year: 'secondary',
              stocks_24h: 'primary'
            }
          },
          {
            name: 'H&M AB',
            stocks_owned: 80,
            stocks_price: 306,
            stocks_year: 12.18,
            stocks_24h: Math.floor(Math.random() * 201) - 100,
            _cellVariants: {
              name: 'dark',
              stocks_owned: 'secondary',
              stocks_price: 'primary',
              stocks_year: 'secondary',
              stocks_24h: 'primary'
            }
          },
          {
            name: 'Telia',
            stocks_owned: 106,
            stocks_price: 103,
            stocks_year: -22.02,
            stocks_24h: Math.floor(Math.random() * 201) - 100,
            _cellVariants: {
              name: 'dark',
              stocks_owned: 'secondary',
              stocks_price: 'primary',
              stocks_year: 'secondary',
              stocks_24h: 'primary'
            }
          },
          {
            name: 'Volvo',
            stocks_owned: 12,
            stocks_price: 125,
            stocks_year: 12.16,
            stocks_24h: Math.floor(Math.random() * 201) - 100,
            _cellVariants: {
              name: 'dark',
              stocks_owned: 'secondary',
              stocks_price: 'primary',
              stocks_year: 'secondary',
              stocks_24h: 'primary'
            }
          },
          {
            name: 'NEL',
            stocks_owned: 86,
            stocks_price: 230,
            stocks_year: 4.23,
            stocks_24h: Math.floor(Math.random() * 201) - 100,
            _cellVariants: {
              name: 'dark',
              stocks_owned: 'secondary',
              stocks_price: 'primary',
              stocks_year: 'secondary',
              stocks_24h: 'primary'
            }
          },
          {
            name: 'SAS',
            stocks_owned: 29,
            stocks_price: 415,
            stocks_year: -0.45,
            stocks_24h: Math.floor(Math.random() * 201) - 100,
            _cellVariants: {
              name: 'dark',
              stocks_owned: 'secondary',
              stocks_price: 'primary',
              stocks_year: 'secondary',
              stocks_24h: 'primary'
            }
          },
          {
            name: 'Mowi',
            stocks_owned: 156,
            stocks_price: 156,
            stocks_year: 1.52,
            stocks_24h: Math.floor(Math.random() * 201) - 100,
            _cellVariants: {
              name: 'dark',
              stocks_owned: 'secondary',
              stocks_price: 'primary',
              stocks_year: 'secondary',
              stocks_24h: 'primary'
            }
          },
          {
            name: 'ICA',
            stocks_owned: 45,
            stocks_price: 94,
            stocks_year: 4.53,
            stocks_24h: Math.floor(Math.random() * 201) - 100,
            _cellVariants: {
              name: 'dark',
              stocks_owned: 'secondary',
              stocks_price: 'primary',
              stocks_year: 'secondary',
              stocks_24h: 'primary'
            }
          },
          {
            name: 'Lundin Petroleum',
            stocks_owned: 45,
            stocks_price: 94,
            stocks_year: 4.18,
            stocks_24h: Math.floor(Math.random() * 201) - 100,
            _cellVariants: {
              name: 'dark',
              stocks_owned: 'secondary',
              stocks_price: 'primary',
              stocks_year: 'secondary',
              stocks_24h: 'primary'
            }
          },
          {
            name: 'Elektra B',
            stocks_owned: 45,
            stocks_price: 94,
            stocks_year: 4.12,
            stocks_24h: Math.floor(Math.random() * 201) - 100,
            _cellVariants: {
              name: 'dark',
              stocks_owned: 'secondary',
              stocks_price: 'primary',
              stocks_year: 'secondary',
              stocks_24h: 'primary'
            }
          },
          {
            name: 'SKF B',
            stocks_owned: 45,
            stocks_price: 94,
            stocks_year: 8.11,
            stocks_24h: Math.floor(Math.random() * 201) - 100,
            _cellVariants: {
              name: 'dark',
              stocks_owned: 'secondary',
              stocks_price: 'primary',
              stocks_year: 'secondary',
              stocks_24h: 'primary'
            }
          },
          {
            name: 'DNB',
            stocks_owned: 48,
            stocks_price: 456,
            stocks_year: -9.15,
            stocks_24h: Math.floor(Math.random() * 201) - 100,
            _cellVariants: {
              name: 'dark',
              stocks_owned: 'secondary',
              stocks_price: 'primary',
              stocks_year: 'secondary',
              stocks_24h: 'primary'
            }
          }
        ]
      }
    },
    computed: {
      rows() {
        return this.items.length
      },
      total() {
        return Object.values(this.items).reduce(
          (accumulator, value) =>
            accumulator +
            (value.stocks_24h * value.stocks_owned * 100) / 100,
          0
        )
      }
    },
    methods: {
      deleteItem: function(task) {
        this.items.splice(this.items.indexOf(task), 1)
      }
    },
  }
</script>

<style scoped>
  .Stocks {
    height: 100vh;
    width: 100%;
  }
  .total {
    float: right;
    margin-right: 10px;
    margin-top: 50px;
  }
  .search {
    float: right;
    margin-top: 30px;
    
  }
  span input {
    text-align: center;
    background-color: #dee2e6;
  }
  .table {
    width: 100%;
  }
  p span {
    margin-right: 15px;
  }
  .emoji {
    margin-right: 15px;
  }
  h3 {
    text-decoration-line: underline;
    display: inline;
    
  }
  .total p {
    font-size: 25px;
    display: inline;
  }
  @media (max-width: 375px) {
    h3 {
      align-content: center;
    }
    .search {
      margin-top: 78px;
    }
    
  }
</style>
