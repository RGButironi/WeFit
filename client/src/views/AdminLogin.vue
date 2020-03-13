<template>
  <section class="has-background-danger is-fullheight">
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <form action="" class="box" @submit.prevent="login">
            {{error}}
            <div class="field">
              <label for="" class="label">Email</label>
              <div class="control has-icons-left">
                <input type="email" placeholder="Your email" class="input" v-model="email" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <input type="password" placeholder="********" class="input" v-model="password" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="checkbox">
                <input type="checkbox">
               Remember me
              </label>
            </div>
            <div class="field">
              <button class="button is-success">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>

import { AdminLogin } from "../models/Admin";

export default {
    data() {
        return {
            email: '',
            password: '',
            error: ''
            }
        },
        methods: {
            AdminLogin() {
                try {
                    AdminLogin(this.email, this.password);
                    this.$router.push('/adminworkbench');
                } catch (error) {
                    this.error = error;
                }
            }
        }
    }
</script>
