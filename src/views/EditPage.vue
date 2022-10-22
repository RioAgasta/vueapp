<template>
  <div class="container">
    <div class="card border-primary mt-5 shadow mt-4">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <h4><span class="badge bg-primary"> Edit Data Product </span></h4>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col p-4">
            <form @submit.prevent="updateproduct">
              <div class="form-group row">
                <label class="col-sm-2 col-form-label"> Nama Pesanan </label>
                <input
                  type="text"
                  class="form-control"
                  v-model="products.title"
                />
              </div>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label"> Harga Pesanan </label>
                <input
                  type="text"
                  class="form-control"
                  v-model="products.price"
                />
              </div>
              <div class="form-group">
                <label class="form-label mt-4">Gambar Pesanan </label>
                <input class="form-control" type="file" @change="imgupload" />
                <input class="form-control" type="text" v-model="products.image" />
              </div>
              <div class="form-group mt-4">
                <img :src="preview" alt="" width="200" />
              </div>
              <button
                type="submit"
                class="btn btn-primary"
                style="float: right"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "editpage",
  data() {
    return {
      products: {},
      image: "",
      preview: "",
    };
  },
  created() {
    this.getProductById();
  },
  methods: {
    async getProductById() {
      let url = `http://127.0.0.1:8000/api/crud/${this.$route.params.id}`;
      await axios
        .get(url)
        .then((response) => {
          console.log(response);
          this.products = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    imgupload(e) {
      this.image = e.target.files[0];
      console.log(this.image);

      this.products.image = this.image;

      let fileReader = new FileReader();
      fileReader.readAsDataURL(this.image);
      fileReader.onload = (e) => {
        this.preview = e.target.result;
        console.log(this.preview);
      };
    },
    async updateproduct() {
      let title = this.products.title;
      let price = this.products.price;
      let image = this.products.image;

      console.log(title);
      console.log(price);
      console.log(image);

      axios
        .put(`http://127.0.0.1:8000/api/crud/${this.$route.params.id}`, {
          title: title,
          price: price,
          image: image,
        })
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "listpage" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
