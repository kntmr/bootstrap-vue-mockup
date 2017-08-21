<template>
  <div class="container">
    <div class="my-section-wrapper">
      <section class="my-section text-center">
        <h2 class="text-left">トップメニューA</h2>
        <div class="my-category text-left">
          <h3>メニューA</h3>
          <ul>
            <li><a href="#/search">検索／更新</a></li>
            <li><a href="#/new">新規追加</a></li>
          </ul>
        </div>
        <div class="my-category text-left">
          <h3>メニューB</h3>
          <ul>
            <li><a href="#">サブメニュー1</a></li>
            <li><a href="#">サブメニュー2</a></li>
            <li><a href="#">サブメニュー3</a></li>
            <li><a href="#">サブメニュー4</a></li>
          </ul>
        </div>
        <div class="my-category text-left">
          <h3>メニューC</h3>
          <ul>
            <li><a href="#">サブメニュー1</a><span class="badge my-badge">12</span></li></li>
          </ul>
        </div>
        <div class="my-category text-left">
          <h3>メニューD</h3>
          <ul>
            <li><a href="#">サブメニュー1</a></li>
            <li><a href="#">サブメニュー2</a></li>
            <li><a href="#">サブメニュー3</a></li>
            <li><a href="#">サブメニュー4</a></li>
            <li><a href="#">サブメニュー5</a></li>
            <li><a href="#">サブメニュー6</a></li>
            <li><a href="#">…</a></li>
          </ul>
        </div>
      </section>
      <hr>
      <section class="my-section text-center">
        <h2 class="text-left">トップメニューB</h2>
        <div class="my-category text-left">
          <h3>メニューA</h3>
          <ul>
            <li><a href="#">サブメニュー1</a></li>
            <li><a href="#">サブメニュー2</a></li>
          </ul>
        </div>
        <div class="my-category text-left">
          <h3>メニューB</h3>
          <ul>
            <li><a href="#">サブメニュー1</a></li>
            <li><a href="#">サブメニュー2</a></li>
            <li><a href="#">サブメニュー3</a></li>
            <li><a href="#">サブメニュー4</a></li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
@media (min-width: 1200px) {
  .my-section-wrapper {
    width: 800px;
  }
}
.my-section-wrapper {
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
}
.my-section {
}
.my-category {
  display: inline-block;
  width: 320px;
  vertical-align: top;
  margin: 0 20px 20px 0;
}
.my-section h2,
.my-category h3 {
  color: #4bacc6;
}
.my-category li {
  list-style: url("../../images/icon-arrow.png");
}
.my-badge {
  margin-left: 5px;
  background-color: #b3b3b3;
  vertical-align: top;
  font-weight: normal;
}
</style>

<script>
export default {
  created () {
    this.$router.app.$emit('initialize', true, false, 0)
  }
}
</script>