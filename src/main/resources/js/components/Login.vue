<template>
  <div class="container my-container">
    <div class="form-group">
      <span class="center-block text-center my-logo">Bootstrap Vue Mockup</span>
    </div>
    <form action="10-portal.html" id="login-form" class="form-horizontal" method="POST">
      <div class="form-group">
        <div class="col-sm-4 col-sm-offset-4">
          <input type="text" class="form-control" placeholder="ログインID" id="loginid" name="loginid">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-4 col-sm-offset-4">
          <input type="password" class="form-control" placeholder="パスワード" id="password" name="password">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-4 col-sm-offset-4">
          <button type="button" id="btn-login" class="btn btn-block my-btn" @click='login'>ログイン</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style>
.my-logo {
  color: #558eff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 32px;
}
</style>

<script>
import common from '../mixins/common'
export default {
  mixins: [ common ],
  methods: {
    login() {
      this.submitWithLoading(2000, () => {
        this.$router.push('/home')
      })
    }
  },
  created () {
    this.$router.app.$emit('initialize', false, false, 0)
  }
}
</script>