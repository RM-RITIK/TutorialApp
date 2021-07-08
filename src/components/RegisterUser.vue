<template>
  <div class="submit-form mt-3 mx-auto">
    <p class="headline">Regsiter New User</p>

    <div v-if="!submitted">
      <v-form ref="form" lazy-validation>
        <v-text-field
          v-model="user.username"
          :rules="[(v) => !!v || 'Username is required']"
          label="Username"
          required
        ></v-text-field>

        <v-text-field
          v-model="user.password"
          :rules="[(v) => !!v || 'Password is required']"
          label="Password"
          required
        ></v-text-field>
      </v-form>

      <v-btn color="primary" class="mt-3" @click="saveUser">Register</v-btn>
    </div>
  </div>
</template>

<script>
import UserDataService from "../services/UserDataService";

export default {
  name: "add-user",
  data() {
    return {
      user: {
        id: null,
        username: "",
        password: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveUser() {
      var data = {
        username: this.user.username,
        password: this.user.password,
      };

      UserDataService.register(data)
        .then((response) => {
          this.user.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
          alert("success");
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newUser() {
      this.submitted = false;
      this.user = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
}
</style>