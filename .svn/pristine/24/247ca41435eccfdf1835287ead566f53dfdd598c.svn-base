<template>
  <div id="public">
    <Header />
    <div id="container">
      <el-menu
        default-active="activeIndex"
        background-color="#f9f0da"
        text-color="#fff"
        active-text-color="pink"
        class="m1"
      >
        <el-menu-item
          index="1"
          class="nav"
        >
          <span>公共健身场所馆</span>
        </el-menu-item>
      </el-menu>
      <el-card>
        <el-row class="title">
          <el-col :span="2">
            当前位置：
          </el-col>
          <el-col
            :span="2"
            class="dy"
          >
            <span @click="$router.push('/')">首页</span> &gt;

          </el-col>
          <el-col :span="4">
            公共健身场所馆
          </el-col>
        </el-row>
        <el-row class="content">
          <el-col
            :span="8"
            class="D1"
            v-for="item in list"
            :key="item.id"
            @click.native="toDetail(item.id)"
          >
            <el-row class="d1">
              <div
                class="imgLoad"
                :style="{ backgroundImage: 'url(' + item.url + ')' }"
              ></div>
            </el-row>
            <el-row class="text">
              {{item.publicName}}
            </el-row>
            <el-row class="time">
              <el-col :span="12">
                开放时间：{{item.openTime}}
              </el-col>
            </el-row>
            <el-row class="loaction">
              <el-col :span="24">
                位置：{{item.publicAddress}}
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <van-empty
          description="暂时没有数据哦~"
          v-if="list.length===0"
        />
      </el-card>
      <el-pagination
        @current-change="change"
        :page-size="page.size"
        :current-page="page.page"
        layout="total,prev, pager, next, jumper"
        :total="page.total"
      >
      </el-pagination>
    </div>
    <el-backtop :visibility-height='500'></el-backtop>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/footer'
import Header from '@/components/header'
import { allData } from '@/api/index'
export default {
  name: 'public',
  components: { Footer, Header },
  props: {},
  data () {
    return {
      activeIndex: '1',
      page: {
        page: 1,
        size: 9,
        total: 0
      },
      list: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    change (newPage) {
      this.list = []
      this.page.page = newPage
      this.getList()
    },
    toDetail (id) {
      // console.log(id);
      let routeData = this.$router.resolve({ path: `/public-detail/${id}` });
      window.open(routeData.href, '_blank');
    },
    async getList () {
      const res = await allData({ typeId: 5, page: this.page.page, rows: this.page.size })
      this.page.page = res.data == null ? 1 : res.data.data.page
      this.page.size = res.data == null ? 10 : res.data.data.pageSize
      this.page.total = res.data == null ? 0 : res.data.data.records
      const val = res.data.data.rows == null ? null : res.data.data.rows
      console.log(val);
      for (let i = 0; i < val.length; i++) {
        // console.log(val);
        let arr = val[i];
        // console.log(arr);
        let obj = arr.pictureId.split(',')
        this.list.push(arr)
        // console.log(this.list);
        this.list[i].pictureId = obj[1]
        this.list[i].url = 'https://www.tmwhqy.cn/cot/cPicture/getList?pictureId=' + this.list[i].pictureId
        console.log(this.list);
      }
    }
  },
}
</script>
<style lang="less" scoped>
.imgLoad {
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
}
.van-empty {
  text-align: center;
}
#container {
  margin-bottom: 10%;
  #navBar {
    .el-menu {
      padding-left: 20%;
      width: 100%;
      background: linear-gradient(to left, #7763e8, #fc9ee7);
      .el-menu-item:hover {
        background: #fc9ee7;
      }
    }
  }
  .m1 {
    float: left;
    margin: 3% 0 0 10%;
    width: 12%;
    .nav {
      text-align: center;
      line-height: 50px;
      background: url('~@/assets/img/ltbg.png') no-repeat;
      background-size: 100% 100%;
      span {
        color: rgb(228, 217, 197);
      }
    }
  }
  .el-card {
    float: right;
    width: 70%;
    margin: 3% 5% 0 0;
    padding-top: -100px;
    .el-row {
      .kindart {
        margin-top: 3%;
      }
      .el-col {
        .chosenav {
          height: 20px;
          margin: 0;
          padding: 0;
          min-width: 80%;
        }
      }
      .dy {
        text-align: center;
        span {
          cursor: pointer;
        }
      }
    }
    .title {
      margin: 0;
      padding: 0;
      height: 40px;
      font-size: 14px;
      line-height: 40px;
      padding-left: 5%;
      a {
        color: #fff;
      }
      background-color: #660403;
      color: #fff;
    }
    .el-menu.el-menu--horizontal {
      border-bottom: none;
    }
    .content {
      margin: 5%;
      margin-top: 6%;
      .el-col:nth-child(n + 4) {
        margin-top: 3%;
      }
      .D1 {
        .d1 {
          width: 265px;
          height: 190px;
          cursor: pointer;
        }
        .text {
          font-weight: bold;
          width: 100%;
          margin-top: 2%;
        }
        .time {
          margin-top: 4%;
          overflow: hidden;
          white-space: nowrap;
          width: 266px;
          text-overflow: ellipsis;
        }
        .time,
        .loaction {
          font-size: 14px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .loaction {
          width: 90%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .el-col-24 {
          margin-top: 4%;
        }
      }
    }
  }
  .el-pagination {
    float: right;
    margin: 5% 50% 5% 0;
    transform: translateX(50%);
  }
}
.el-backtop {
  width: 40px;
  color: #000;
}
</style>