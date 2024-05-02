<template>
  <section class="bg-dark py-3 py-md-5 py-xl-8 vh-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4 mt-5">
          <div class="card border border-light-subtle rounded-4">
            <div class="card-body p-3 p-md-4 p-xl-5">
              <form>
                <div class="row gy-3 overflow-hidden">
                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <input
                        v-model="data.username"
                        class="form-control"
                        placeholder="user123"
                        required
                      />
                      <label for="email" class="form-label">Usuario</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <input
                        v-model="data.password"
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        required
                      />
                      <label for="password" class="form-label">Password</label>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="d-grid">
                      <button
                        class="btn btn-primary btn-lg"
                        type="submit"
                        @click.prevent="login"
                      >
                        Iniciar Sesión
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";
import { api } from "../api/client";
import router from "../router";

const data = reactive({
  username: "",
  password: "",
});

const login = async () => {
  let datos = {
    username: data.username,
    password: data.password,
  };
  try {
    const res = await api.post("auth/login", datos, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });

    localStorage.setItem("auth", true);
    console.log(res);
    router.replace({name:'home'})
  } catch (error) {
    console.log(error)
  }
};
</script>
