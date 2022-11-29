<template>
  <div class="mt-5">
    <div class="col">
      <div class="row">
      <div
        class="card"
        style="width: 18rem;"
        v-for="category in categories"
        :key="categories.id"
      >
        <img
          class="card-img img-top"
          style="object-fit: cover;"
          :src="`http://localhost:8000/storage/${category.category_image}`"
          alt="Card image cap"
          height="200"
          width="200"
        />
        <div class="card-body">
          <h5 class="card-title">{{ category.category_name }}</h5>
          <p class="card-text">
            {{ category.category_name }}
          </p>
          <router-link
            :to="{ name: 'filteredlist', params: { id: category.id } }"
            class="btn btn-primary"
            >Lihat Produk</router-link
          ><router-link
            :to="{ name: 'editcategory', params: { id: category.id } }"
            class="btn btn-warning"
            >Edit Produk</router-link
          >
          <button
            class="btn btn-danger"
            @click.prevent="delProduct(category.id)"
          >
            Delete
          </button>
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
      categories: Array,
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
      let url = "http://127.0.0.1:8000/api/category";
      await axios
        .get(url)
        .then((response) => {
          this.categories = response.data.data;
          console.log(this.categories);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async delProduct(id) {
      let url = `http://127.0.0.1:8000/api/category/${id}`;
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
