<template>
  <div>
    <nav class="navbar navbar-fixed-top my-navbar">
      <div class="container-fluid">
        <div class="navbar-left">
          <p class="navbar-text my-navbar-text">Bootstrap Vue Mockup</p>
        </div>
        <div class="navbar-right" v-bind:style="logoutStyle">
          <p class="navbar-text">
            <a data-toggle="modal" data-target="#logout-modal" class="my-navbar-link">ログアウト</a>
          </p>
      </div>
      </div>
    </nav>
    <div id="sidebar-wrapper" v-bind:style="sidebarStyle">
      <ul class="sidebar-nav">
        <li v-bind:class="sidebarSearch">
          <a href="#/search">検索／更新</a>
        </li>
        <li v-bind:class="sidebarNew">
          <a href="#/new">新規追加</a>
        </li>
      </ul>
    </div>
    <router-view></router-view>
    <div id="logout-modal" class="modal fade" tabindex="-1">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-body">
            <div class="container-fluid">
              <p class="text-center">ログアウトします。よろしいですか？</p>
            </div>
          </div>
          <div class="modal-footer">
            <div class="col-xs-6 col-md-6">
              <button type="button" class="btn btn-default my-btn-submit" data-dismiss="modal" id="logout-cancel">キャンセル</button>
            </div>
            <div class="col-xs-6 col-md-6">
              <button type="button" class="btn my-btn my-btn-submit" @click="logout(1500)">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="loading-modal" class="modal fade" tabindex="-1">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-body">
            <div class="container-fluid">
              <img src="../../images/loading.gif" alt="loading" class="center-block">
              <p class="my-loading-text">処理中...</p>
              <button type="button" id="btn-loader" class="my-dummy-btn" data-toggle="modal" data-target="#loading-modal">dummy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  padding-top: 50px;
}
hr {
  margin: 10px 0;
}
/* header */
.my-navbar {
  color: #ffffff;
  background: #558eff;
  margin-bottom: 0;
}
.my-navbar-text {
  font-weight: bold;
}
.my-navbar-link,
.my-navbar-link:hover {
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
}
/* container */
.my-container {
  margin-top: 10%;
}
.my-container-fluid {
  margin: 30px 15px;
}
/* button */
.my-btn {
  color: #ffffff;
  background: #558eff;
}
.my-btn:hover {
  color: #ffffff;
  background: #3c7fcf;
}
.my-dummy-btn {
  display: none;
}
.my-btn-submit {
  width: 109px;
}
/* loading modal */
.my-loading-text {
  font-size: large;
  text-align: center;
  margin-top: 15px;
}
/* simple sidebar */
#sidebar-wrapper {
  background: #a6a6a6;
}
.sidebar-nav li a {
  color: #ffffff;
}
.sidebar-nav li a:hover,
.sidebar-nav li a:active,
.sidebar-nav li a:focus {
  background: rgba(242, 242, 242, 0.2);
}
.sidebar-nav li.active,
.sidebar-nav li.active a {
  color: #595959;
  background: #f2f2f2;
}
.sidebar-disabled {
  display: none;
}
</style>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import common from '../mixins/common'
export default {
  mixins: [ common ],
  data: function() {
    return {
      isLogin: true,
      isSidebarDisplay: true,
      sidebarType: 0
    }
  },
  computed: {
    logoutStyle() {
      return {
        display: this.isLogin ? 'block' : 'none'
      }
    },
    sidebarStyle: function() {
      return {
        display: this.isSidebarDisplay ? 'block' : 'none'
      }
    },
    sidebarSearch: function() {
      return {
        active: this.sidebarType === 0
      }
    },
    sidebarNew: function() {
      return {
        active: this.sidebarType === 1
      }
    }
  },
  methods: {
    initialize(isLogin, isDisplay, type) {
      this.isLogin = isLogin
      this.isSidebarDisplay = isDisplay
      this.sidebarType = type
    },
    logout(timeout) {
      $('#logout-cancel').click()
      this.submitWithLoading(timeout, () => {
        this.$router.push('/')
      });
    }
  },
  created () {
    this.$router.app.$on('initialize', (v1, v2, v3) => { this.initialize(v1, v2, v3) })
  }
}
</script>