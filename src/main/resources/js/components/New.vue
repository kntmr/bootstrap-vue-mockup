<template>
  <div id="wrapper">
    <!-- page content -->
    <div id="page-content-wrapper">
      <!-- title -->
      <div class="row">
        <div class="col-sm-8 my-content-summary">
          <h3>新規タイトル</h3>
        </div>
      </div>
      <!-- tab -->
      <ul class="nav nav-tabs my-nav-tabs">
        <li class="active"><a href="#tab-a" data-toggle="tab">基本情報</a></li>
      </ul>
      <div class="tab-content">
        <form action="30-detail.html" id="register-form" class="form-horizontal" method="POST">
          <div class="form-group">
            <label for="" class="col-sm-2 control-label">コード</label>
            <div class="col-sm-10 my-control-text">
              <input type="text" id="content-code" class="form-control" name="content-code">
            </div>
          </div>
          <div class="form-group">
            <label for="" class="col-sm-2 control-label">タイトル</label>
            <div class="col-sm-10 my-control-text">
              <input type="text" id="content-name" class="form-control" name="content-name">
            </div>
          </div>
          <hr>
          <div class="form-group">
            <label for="" class="col-sm-2 control-label">アーティスト</label>
            <div class="col-sm-10 my-control-text">
              <input type="text" id="author-name" class="form-control" name="author-name">
            </div>
          </div>
          <div class="form-group">
            <label for="" class="col-sm-2 control-label">アルバム</label>
            <div class="col-sm-10 my-control-text">
              <input type="text" id="album-name" class="form-control" name="album-name">
            </div>
          </div>
          <div class="form-group">
            <label for="" class="col-sm-2 control-label">発売日</label>
            <div class="col-sm-10 my-control-text">
              <input type="date" id="release-date" class="form-control my-input-date" name="release-date">
            </div>
          </div>
          <div class="form-group">
            <label for="" class="col-sm-2 control-label">販売元</label>
            <div class="col-sm-10 my-control-text">
              <input type="text" id="vendor-name" class="form-control" name="vendor-name">
            </div>
          </div>
          <hr>
          <div class="form-group">
            <label for="" class="col-sm-2 control-label">拡張項目1</label>
            <div class="col-sm-10 my-control-text">
              <textarea name="extended1" id="extended1" rows="3" class="form-control"></textarea>
            </div>
          </div>
          <div class="form-group">
            <label for="" class="col-sm-2 control-label">拡張項目2</label>
            <div class="col-sm-10 my-control-text">
              <input type="text" id="extended2" class="form-control" name="extended2">
            </div>
          </div>
          <div class="form-group">
            <label for="" class="col-sm-2 control-label">拡張項目3</label>
            <div class="col-sm-10 my-control-text">
              <input type="text" id="extended3" class="form-control" name="extended3">
            </div>
          </div>
          <hr>
          <div class="form-group">
            <div class="text-center my-container-fluid">
              <button type="button" id="btn-register" class="btn my-btn my-btn-submit" @click="register">追加</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.my-content-summary {
  margin-bottom: 20px;
  font-size: 16px;
}
.my-content-summary h3 {
  margin: 0;
}
.my-icon {
  background-position: 0% 50%;
  background-repeat: no-repeat;
  padding-left: 20px;
}
.icon-edit {
  background-image: url("../../images/icon-edit.png");
}
.icon-copy {
  background-image: url("../../images/icon-copy.png");
}
.icon-add {
  background-image: url("../../images/icon-add.png");
}
.icon-delete {
  background-image: url("../../images/icon-delete.png");
}
.my-nav-tabs {
  margin-bottom: 20px;
}
.my-control-text > span {
  min-height: 27px;
  margin-top: 7px;
  display: block;
}
.my-input-date {
  width: 160px;
}
</style>

<script>
import common from '../mixins/common'
export default {
  mixins: [ common ],
  methods: {
    register() {
      this.submitWithLoading(2000, () => {
        this.$router.push('/detail')
      })
    }
  },
  created () {
    this.$router.app.$emit('initialize', true, true, 1)
  }
}
</script>