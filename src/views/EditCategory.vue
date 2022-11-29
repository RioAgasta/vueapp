<template>
  <div class="container">
    <div class="card border-primary mt-5 shadow mt-4">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <h4><span class="badge bg-primary"> Tambah Kategori </span></h4>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col p-4">
            <form @submit.prevent="updatecategory">
              <div class="form-group row">
                <label class="col-sm-2 col-form-label"> Nama Kategori </label>
                <input
                  type="text"
                  class="form-control"
                  v-model="categories.category_name"
                />
              </div>
              <div class="form-group">
                <label class="form-label mt-4">Gambar Pesanan </label>
                <input class="form-control" type="file" @change="imgupload" />
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
  name: "inputcategorypage",
  data() {
    return {
      categories: {},
      category_image: "",
      preview: "",
    };
  },
  created() {
    this.getProductById();
  },
  methods: {
    async getProductById() {
      let url = `http://127.0.0.1:8000/api/category/${this.$route.params.id}`;
      await axios
        .get(url)
        .then((response) => {
          console.log(response);
          this.categories = response.data.data[0];
        })
        .catch((error) => {
          console.log(error);
        });
    },
    imgupload(e) {
      this.category_image = e.target.files[0];
      console.log(this.category_image);

      console.log(this.categories.category_name);

      let fileReader = new FileReader();
      fileReader.readAsDataURL(this.category_image);
      fileReader.onload = (e) => {
        this.preview = e.target.result;
        console.log(this.preview);
      };
    },
    async updatecategory() {
      let category_name = this.categories.category_name;
      let category_image = this.categories.category_image;

      axios
        .put(`http://127.0.0.1:8000/api/category/${this.$route.params.id}`, {
          category_name: category_name,
          category_image: category_image,
        })
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "homepage" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
