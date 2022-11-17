<template>
  <div class="container">
    <div class="card border-primary mt-5 shadow">
      <div class="card-body">
        <div class="column">
            <router-link to="/add" type="submit" class="btn btn-primary col-4"
              ><font-awesome-icon icon="fa-solid fa-plus" />
            </router-link>
                <select class="form-control" @change="filterproduct" value="null">
                  <option>Appetizer</option>
                  <option>Main Course</option>
                  <option>Dessert</option>
                  <option>Beverage</option>
                </select>
          <div class="row">
            <div class="col-md-4" v-for="product in products" :key="product.id">
              <div class="card mt-4 p-4">
                <div class="row">
                  <img
                    :src="`http://localhost:8000/storage/${product.image}`"
                    width="200"
                    height="200"
                    style="object-fit: contain"
                  />
                </div>
                <div class="card-body" align="right">
                  <h5 class="card-title">{{ product.title }}</h5>
                  <h6 class="card-text">Rp. {{ product.price }}</h6>
                  <p>{{ product.category }}</p>

                  <router-link
                    class="btn btn-primary btn-sm rounded shadow mr-3"
                    :to="{ name: 'editpage', params: { id: product.id } }"
                    >Edit
                  </router-link>

                  <button
                    class="btn btn-danger btm-sm rounded shadow"
                    @click.prevent="delProduct(product.id)"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      products: Array,
    };
  },
  created() {
    this.getProduct();
  },
  mounted() {
    console.log("Product List Created");
  },
  methods: {
    async getProduct() {
      let url = "http://127.0.0.1:8000/api/crud";
      await axios
        .get(url)
        .then((response) => {
          this.products = response.data.data;
          console.log(this.products);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async filterproduct(e){
      let id = e.target.value;
      let filter = e.target.value;
      let url = `http://127.0.0.1:8000/api/category/${filter}`;
      await axios
        .get(url)
        .then((response) => {
          this.products = response.data.data;
          console.log(this.products);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async delProduct(id) {
      let url = `http://127.0.0.1:8000/api/crud/${id}`;
      await axios
        .delete(url)
        .then((response) => {
          if (response.data.code == 200) {
            alert(response.data.message);
            this.getProduct();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
