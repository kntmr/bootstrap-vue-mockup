<template>
  <div id="wrapper">
    <!-- page content -->
    <div id="page-content-wrapper">
      <!-- title -->
      <div class="row">
        <div class="col-sm-8 my-content-summary">
          <h3>010001　Motherless Children</h3>
        </div>
        <div class="col-sm-4 text-right">
          <a href="#/edit" class="my-icon icon-edit">更新</a>
          <a href="#" class="my-icon icon-copy">コピー</a>
          <a href="#" class="my-icon icon-add">タイトル追加</a>
          <a href="#" class="my-icon icon-delete">削除</a>
        </div>
      </div>
      <!-- tab -->
      <ul class="nav nav-tabs my-nav-tabs">
        <li class="active"><a href="#tab-a" data-toggle="tab">基本情報</a></li>
        <li><a href="#tab-b" data-toggle="tab">タブ2</a></li>
        <li><a href="#tab-c" data-toggle="tab">タブ3</a></li>
      </ul>
      <div class="tab-content">
        <div id="tab-a" class="tab-pane active">
          <div class="form-horizontal">
            <div class="form-group">
              <label for="" class="col-sm-2 control-label">コード</label>
              <div class="col-sm-10 my-control-text">
                <span>010001</span>
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-2 control-label">タイトル</label>
              <div class="col-sm-10 my-control-text">
                <span>Motherless Children</span>
              </div>
            </div>
            <hr>
            <div class="form-group">
              <label for="" class="col-sm-2 control-label">アーティスト</label>
              <div class="col-sm-10 my-control-text">
                <span>Eric Clapton</span>
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-2 control-label">アルバム</label>
              <div class="col-sm-10 my-control-text">
                <span>461 Ocean Boulevard</span>
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-2 control-label">発売日</label>
              <div class="col-sm-10 my-control-text">
                <span>1985/12/30</span>
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-2 control-label">販売元</label>
              <div class="col-sm-10 my-control-text">
                <span>XYZレコード</span>
              </div>
            </div>
            <!-- extended area -->
            <div id="extended-wrapper" class="collapse">
              <hr>
              <div class="form-group">
                <label for="" class="col-sm-2 control-label">拡張項目1</label>
                <div class="col-sm-10 my-control-text">
                  <span>aaa</span>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-2 control-label">拡張項目2</label>
                <div class="col-sm-10 my-control-text">
                  <span>bbb</span>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-2 control-label">拡張項目3</label>
                <div class="col-sm-10 my-control-text">
                  <span>ccc</span>
                </div>
              </div>
            </div>
            <!-- extended area toggle -->
            <div class="container-fluid">
              <a href="#extended-wrapper" id="extended-area-toggle" data-toggle="collapse">拡張項目を表示</a>
            </div>
          </div>
        </div>
        <div id="tab-b" class="tab-pane">
          <div class="container-fluid">
            タブ2
          </div>
        </div>
        <div id="tab-c" class="tab-pane">
          <div class="container-fluid">
            タブ3
          </div>
        </div>
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
</style>

<script>
import common from '../mixins/common'
export default {
  mixins: [ common ],
  created () {
    this.$router.app.$emit('initialize', true, true, 0)
  }
}
</script>