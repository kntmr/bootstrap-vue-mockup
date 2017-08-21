<template>
  <div id="wrapper">
    <div id="page-content-wrapper">
      <!-- search condition area -->
      <div id="search-condition-wrapper" class="panel-group">
        <div class="panel panel-default">
          <!-- header -->
          <div class="panel-heading">
            <h3 class="panel-title">
              <a href="#search-condition" data-toggle="collapse" data-parent="#search-condition-wrapper">検索条件</a>
            </h3>
          </div>
          <!-- conditions -->
          <div id="search-condition" class="panel-collapse in">
            <div class="panel-body">
              <form action="#" id="search-form" method="POST">
                <div class="form-group">
                  <div class="form-inline">
                    <div class="form-group">
                      <input type="text" id="content-code" class="form-control" name="content-id" placeholder="コード">
                    </div>
                    <div class="form-group">
                      <input type="text" id="content-name" class="form-control" name="content-name" placeholder="タイトル">
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-inline">
                    <input type="text" id="author-name" class="form-control" name="author-name" placeholder="アーティスト">
                    <div class="checkbox">
                      <label>
                        <input type="checkbox" id="my-checkbox" name="my-checkbox" value="1">チェックボックス
                      </label>
                    </div>
                  </div>
                </div>
                <!-- extended conditions -->
                <div id="extended-search-condition"></div>
                <hr>
                <div class="row">
                  <div class="col-xs-6 col-md-6">
                    <div class="dropdown">
                      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                        検索条件追加
                        <span class="caret"></span>
                      </button>
                      <ul class="dropdown-menu" role="menu">
                        <li><a href="#" onclick="extendSearchCondition1()">アルバム</a></li>
                        <li><a href="#" onclick="extendSearchCondition2()">発売日</a></li>
                        <li><a href="#" onclick="extendSearchCondition3()">販売元</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-xs-6 col-md-6 text-right">
                    <button type="button" id="btn-search" class="btn my-btn my-btn-submit" @click='search'>検索</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- search result area -->
      <div id="search-result-wrapper" style="display:none;">
        <form action="#" id="search-result-form" method="POST">
          <div class="container-fluid">
            <div class="col-sm-4">
              <span>1-20 / 100 件</span>
            </div>
            <div class="col-sm-8 text-right">
              <nav>
                <ul class="pagination" style="margin-top:0;">
                  <li><a href="#" aria-label="前のページへ"><span aria-hidden="true">&laquo;</span></a></li>
                  <li class="active"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#" aria-label="次のページへ"><span aria-hidden="true">&raquo;</span></a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="table-responsive">
            <table id="search-result-table" class="table table-hover text-nowrap my-table">
              <thead>
                <tr>
                  <th>コード</th>
                  <th>タイトル</th>
                  <th>アーティスト</th>
                  <th>アルバム</th>
                  <th>発売日</th>
                  <th>販売元</th>
                </tr>
              </thead>
              <tbody>
                <tr @click='detail'>
                  <td>010001</td>
                  <td>Motherless Children</td>
                  <td>Eric Clapton</td>
                  <td>461 Ocean Boulevard</td>
                  <td>1985/12/30</td>
                  <td>XYZ</td>
                </tr>
                <tr @click='detail'>
                  <td>010002</td>
                  <td>Before You Accuse Me</td>
                  <td>Eric Clapton</td>
                  <td>Unplugged</td>
                  <td>1985/12/30</td>
                  <td>ABC</td>
                </tr>
                <tr @click='detail'>
                  <td>020123</td>
                  <td>Goodbye Pork Pie Hat</td>
                  <td>Jeff Beck</td>
                  <td>Wired</td>
                  <td>1985/12/30</td>
                  <td>ABC</td>
                </tr>
                <tr @click='detail'>
                  <td>030980</td>
                  <td>インディゴ地平線</td>
                  <td>スピッツ</td>
                  <td>インディゴ地平線</td>
                  <td>1985/07/20</td>
                  <td>AAA</td>
                </tr>
                <tr @click='detail'>
                  <td>050050</td>
                  <td>New Kid In Town</td>
                  <td>Eagles</td>
                  <td>The Very Best of the Eagles</td>
                  <td>1985/07/20</td>
                  <td>PPAP</td>
                </tr>
                <tr @click='detail'>
                  <td>…</td>
                  <td>…</td>
                  <td>…</td>
                  <td>…</td>
                  <td>…</td>
                  <td>…</td>
                </tr>
                <tr @click='detail'>
                  <td>…</td>
                  <td>…</td>
                  <td>…</td>
                  <td>…</td>
                  <td>…</td>
                  <td>…</td>
                </tr>
                <tr @click='detail'>
                  <td>…</td>
                  <td>…</td>
                  <td>…</td>
                  <td>…</td>
                  <td>…</td>
                  <td>…</td>
                </tr>
                <tr @click='detail'>
                  <td>090123</td>
                  <td>Alright!!</td>
                  <td>Superfly</td>
                  <td>Box Emotions</td>
                  <td>1985/07/20</td>
                  <td>ZZZ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="container-fluid">
            <div class="col-sm-4">
              <span>1-20 / 100 件</span>
            </div>
            <div class="col-sm-8 text-right">
              <nav>
                <ul class="pagination" style="margin-top:0;">
                  <li><a href="#" aria-label="前のページへ"><span aria-hidden="true">&laquo;</span></a></li>
                  <li class="active"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#" aria-label="次のページへ"><span aria-hidden="true">&raquo;</span></a></li>
                </ul>
              </nav>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.my-logo {
  color: #558eff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 32px;
}
.my-table:hover {
  cursor: pointer;
}
</style>

<script>
import common from '../mixins/common'
export default {
  mixins: [ common ],
  methods: {
    search() {
      this.submitWithLoading(2000, () => {
        $('#search-result-wrapper').show();
      })
    },
    detail() {
      this.submitWithLoading(2000, () => {
        this.$router.push('/detail')
      })
    }
  },
  created () {
    this.$router.app.$emit('initialize', true, true, 0)
  }
}
</script>