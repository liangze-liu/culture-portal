<template>
  <div id="activity">
    <Header />
    <div id="container">
      <el-menu
        :default-active="activeIndex"
        background-color="#f9f0da"
        text-color="#000"
        active-text-color="red"
        class="m1"
      >
        <el-menu-item>
          <span>场馆/景点信息</span>
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
            <span
              href="javascript:;"
              @click="$router.push('/')"
            >首页</span> &gt;

          </el-col>
          <el-col :span="4">
            场馆/景点信息
          </el-col>
          <el-col :span="2">
          </el-col>
        </el-row>
        <el-row class="content">
          <el-row class="navtitle">
            <el-col
              :span="2"
              class="kindart"
            >
              场馆类型：
            </el-col>
            <el-col :span="16">
              <el-menu
                :default-active="active"
                background-color="#fff"
                text-color="#000"
                active-text-color="pink"
                mode="horizontal"
                class="chosenav"
              >
                <el-menu-item
                  index="0"
                  class="all"
                  @click="getId('')"
                >
                  <span>全部</span>
                </el-menu-item>
                <el-menu-item
                  v-for="item in type "
                  :key="item.id"
                  :index='item.id.toString()'
                  @click="getId(item.id)"
                >
                  <span>{{item.typeName}}</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
          <el-col
            :span="8"
            class="D1"
            v-for="item in list"
            :key="item.travelId"
            @click.native="toDetail(item.travelId)"
          >
            <el-row class="d1">
              <div
                class="imgLoad"
                :style="{ backgroundImage: 'url(' + item.url + ')' }"
              ></div>
            </el-row>
            <el-row class="text">
              {{item.travelName}}
            </el-row>
            <el-row class="time">
              <el-col :span="24">
                开放时间：{{item.openTime}}
              </el-col>
            </el-row>
            <el-row class="loaction">
              <el-col :span="24">
                位置： {{item.travelAddress}}
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
import { allData, venType } from '@/api/index'
export default {
  name: 'activity',
  components: { Footer, Header },
  props: {},
  data () {
    return {
      activeIndex: '1',
      active: '0',
      page: {
        page: 1,
        size: 9,
        total: 0
      },
      list: [],
      type: []
    }
  },
  created () {
    this.getList()
    this.getType()
    // this.getId('')
  },
  methods: {
    change (newPage) {
      this.list = []
      this.page.page = newPage
      this.getList()
    },
    toDetail (id) {
      let routeData = this.$router.resolve({ path: `/venue-detail/${id}` });
      window.open(routeData.href, '_blank');
    },
    getId (id) {
      this.getList({
        typeId: 4,
        cTypeId: id
      })
      console.log(id);
    },
    async getType () {
      const res = await venType()
      const val = res.data.data.rows == null ? null : res.data.data.rows
      // console.log(val);
      for (let i = 0; i < val.length; i++) {
        let arr = val[i]
        this.type.push(arr)
        // console.log(arr);
      }
    },
    async getList (params) {
      params = params == null ? { typeId: 4, page: this.page.page, rows: this.page.size } : params
      const res = await allData(params)
      // console.log(res);
      this.page.page = res.data == null ? 1 : res.data.data.page
      this.page.size = res.data == null ? 10 : res.data.data.pageSize
      this.page.total = res.data == null ? 0 : res.data.data.records
      const val = res.data.data.rows == null ? null : res.data.data.rows
      console.log(val);
      this.list = []
      if (val == null || val.length === 0) {
        //标记为空时的处理代码
        return;
      }
      for (let i = 0; i < val.length; i++) {
        // console.log(val);
        let arr = val[i];
        // console.log(arr);
        let obj = arr.pictureId.split(',')
        this.list.push(arr)
        // console.log(this.list);
        this.list[i].pictureId = obj[1]
        this.list[i].url = 'https://www.tmwhqy.cn/cot/cPicture/getList?pictureId=' + this.list[i].pictureId
        // console.log(this.list);
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
  .m1 {
    float: left;
    margin: 3% 0 0 10%;
    width: 12%;
    .el-menu-item {
      text-align: center;
      line-height: 50px;
      background: url('~@/assets/img/ltbg.png') no-repeat;
      background-size: 100% 100%;
      span {
        color: rgb(228, 217, 197);
      }
    }
  }
  .chosenav {
    text-align: center;
    .el-menu-item {
      width: 20%;
    }
  }
  .el-card {
    float: right;
    width: 70%;
    margin: 3% 5% 0 0;
    padding-top: -100px;
    .el-row {
      .kindart {
        line-height: 400%;
      }
      .dy {
        text-align: center;
        span {
          cursor: pointer;
        }
      }
    }
    .navtitle {
      font-size: 14px;
      margin-top: -5.55%;
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
      .D1 {
        cursor: pointer;
        margin-top: 5%;
        .d1 {
          width: 265px;
          height: 190px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .text {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-weight: bold;
          width: 95%;
          margin-top: 5%;
        }
        .time {
          margin-top: 2%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .time,
        .loaction {
          font-size: 14px;
        }
        .loaction {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          width: 98%;
          margin-top: 2%;
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