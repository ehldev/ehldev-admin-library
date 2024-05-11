<template>
  <div class="login-page">
    <section>
      <div class="content pt-4">
        <div></div>

        <div>
          <div class="text-center">
            <img :src="getLogoLg" alt="" class="logo" />
          </div>

          <div class="text-center">
            <h1 class="mt-5">¡Bienvenido!</h1>
            <p>Ingresa para administrar tu app web.</p>
          </div>

          <form
            action=""
            class="mt-5"
            @submit.prevent="login()"
            novalidate
            v-if="!showFormResetPassword"
          >
            <div
              class="form-group"
              :class="{ 'form-group-error': $v.form.email.$error }"
            >
              <span class="form-icon"><i class="ri-user-line"></i></span>
              <div class="fields">
                <label for="email">Correo electrónico</label>
                <input
                  type="email"
                  placeholder="Ingresar"
                  class="form-field"
                  v-model="form.email"
                />
              </div>
            </div>

            <AdminFormError
              message="Campo requerido"
              v-if="$v.form.email.$error && !$v.form.email.required"
            />
            <AdminFormError
              message="Debe ingresar un email válido"
              v-if="$v.form.email.$error && !$v.form.email.email"
            />

            <div
              class="form-group mt-4"
              :class="{ 'form-group-error': $v.form.password.$error }"
            >
              <span class="form-icon"><i class="ri-lock-line"></i></span>
              <div class="fields">
                <label for="password">Contraseña</label>
                <input
                  type="password"
                  placeholder="Ingresar"
                  class="form-field"
                  v-model="form.password"
                />
              </div>
            </div>

            <AdminFormError
              message="Campo requerido"
              v-if="$v.form.password.$error"
            />

            <AdminFormError :message="error" v-if="error" />

            <!-- <div class="d-flex mt-4">
                <input type="checkbox" class="checkbox" />
                <span class="checkbox-label ml-1">Recordar</span>
              </div> -->

            <div class="text-center mt-4">
              <button
                type="submit"
                :disabled="form.loading"
                class="admin-button admin-button-green cursor-pointer mx-auto py-3 px-9"
              >
                Ingresar
                <i class="ri-login-box-line"></i>
              </button>
            </div>

            <div class="text-center mt-4">
              <a
                href=""
                class="admin-link d-inline-block text-decoration-none"
                @click.prevent="showFormResetPassword = true"
                >¿Olvidaste tu contraseña?</a
              >
            </div>
          </form>

          <FormResetPassword @cancel="showFormResetPassword = false" v-if="showFormResetPassword" />
        </div>

        <p class="text-center d-inline-block pb-4">
          © 2022 Programado por <a :href="webUrl" target="_blank">@ehldev</a>
        </p>
      </div>
    </section>

    <div class="bg position-relative d-flex align-items-center">
      <h2 class="bg-title text-white" v-html="loginMessage">
      </h2>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import { required, email } from "vuelidate/lib/validators";

import AuthService from "@/services/auth.js";

import FormResetPassword from "./FormResetPassword";
import AdminFormError from '../form/AdminFormError'

export default {
  data() {
    return {
      webUrl: process.env.VUE_APP_WEB_URL,
      form: {
        email: null,
        password: null,
        loading: false,
      },
      error: null,
      showFormResetPassword: false,
      loginMessage: this.$route.meta.loginMessage
    };
  },
  validations: {
    form: {
      email: { required, email },
      password: { required },
    },
  },
  components: {
    AdminFormError,
    FormResetPassword
  },
  watch: {
    email: function () {
      this.error = null;
    },
    password: function () {
      this.error = null;
    },
  },
  methods: {
    async login() {
      this.$v.$touch();
      if (this.$v.$error) return;

      this.form.loading = true;

      try {
        let params = {
          email: this.form.email,
          password: this.form.password,
        };

        let response = await AuthService.login(this.getAuthRoute, params);

        if (response.data.user) {
          this.$store.commit("auth/SET_SESSION", response.data.token);

          setTimeout(() => {
            this.$router.push({ name: "Home" });
          }, 500);
        } else {
          this.error = response.data.error;
        }
      } catch (error) {
        this.$toast.open({
          message: "Ocurrió un error, por favor inténtelo nuevamente.",
          type: "error",
        });
      } finally {
        this.form.loading = false
      }
    },
  },
  computed: {
    ...mapGetters({
      getAuthToken: "auth/getAuthToken",
      getLogoLg: "app/getLogoLg",
      getAuthRoute: "auth/getAuthRoute",
    }),
  },
};
</script>

<style lang="scss"></style>