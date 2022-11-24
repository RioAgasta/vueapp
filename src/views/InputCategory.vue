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
            <form @submit.prevent="savecategory">
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
  methods: {
    imgupload(e) {
      this.category_image = e.target.files[0];
      console.log(this.category_image);

      console.log(this.categories.title);

      let fileReader = new FileReader();
      fileReader.readAsDataURL(this.category_image);
      fileReader.onload = (e) => {
        this.preview = e.target.result;
        console.log(this.preview);
      };
    },
    async savecategory() {
      let formData = new FormData();
      formData.append("category_name", this.categories.category_name);
      formData.append("category_image", this.category_image);

      console.log(formData);

      let url = "http://127.0.0.1:8000/api/category";
      await axios
        .post(url, formData)
        .then((response) => {
          if (response.data.success == true) {
            alert(response.data.message);
            this.categories.category_name = "";
            this.category_image = "";
            this.preview = "";

            this.$router.push({ name: "listpage" });
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
};
</script>
