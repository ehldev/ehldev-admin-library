<template>
    <form action="" class="mt-5" @submit.prevent="submit()" novalidate>
      <p class="mb-3">
        Te enviaremos un email con la opción de recuperar tu contraseña.
      </p>
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
  
      <AdminFormError :message="error" v-if="error" />
  
      <div class="text-center mt-4">
        <button
          type="  "
          :disabled="form.loading"
          class="admin-button admin-button-green cursor-pointer mx-auto py-3 px-9"
        >
          Recuperar acceso
          <i class="ri-login-box-line"></i>
        </button>
  
        <div class="text-left">
          <a
            href=""
            class="admin-link admin-link-back d-flex align-items-center mt-4"
            @click.prevent="$emit('cancel')"
          >
            <i class="ri-arrow-left-s-line"></i>
            Regresar
          </a>
        </div>
      </div>
    </form>
  </template>
  
  <script>
  import { required, email } from "vuelidate/lib/validators";
  
  import AdminFormError from "@/components/form/AdminFormError";
  
  import AuthService from "@/services/auth"
  
  export default {
    data() {
      return {
        form: {
          email: null,
          loading: false,
        },
        error: null,
      };
    },
    validations: {
      form: {
        email: { required, email },
      },
    },
    components: {
      AdminFormError,
    },
    watch: {
      'form.email': function() {
        if(this.error) {
          this.error = null
        }
      }
    },
    methods: {
      async submit() {
        this.$v.$touch();
        if (this.$v.$error) return;
  
        this.form.loading = true;
  
        try {
          let params = {
            email: this.form.email,
          };
  
          let response = await AuthService.resetPassword(params);
  
          let responseMessage = response.data.message;
  
          if (response.data.code === "success") {
            this.$toast.open({
              message: responseMessage,
              type: "success",
              position: 'bottom-left'
            });
          } else {
            this.error = responseMessage;
          }

        } catch (error) {
          console.log(error);
        } finally {
          this.form.loading = false;
        }
      },
    },
  };
  </script>
  
  <style>
  </style>