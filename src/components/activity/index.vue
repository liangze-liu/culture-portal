<template>
  <div id="activity">
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
          <span>活动信息</span>
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
            活动信息
          </el-col>
        </el-row>
        <!-- <el-row class="navtitle">
          <el-col
            :span="2"
            class="kindart"
          >
            活动类型：
          </el-col>
          <el-col :span="20">
            <el-menu
              :default-active="active"
              @open="handleOpen"
              @close="handleClose"
              background-color="#fff"
              text-color="#000"
              active-text-color="pink"
              mode="horizontal"
              class="chosenav"
            >
              <el-menu-item
                index="1"
                class="all"
              >
                <span>全部</span>
              </el-menu-item>
              <el-menu-item index="2">
                <span>演出</span>
              </el-menu-item>
              <el-menu-item index="3">
                <span>展览</span>
              </el-menu-item>
              <el-menu-item index="4">
                <span>赛事</span>
              </el-menu-item>
              <el-menu-item index="5">
                <span>培训</span>
              </el-menu-item>
              <el-menu-item index="6">
                <span>讲座</span>
              </el-menu-item>
              <el-menu-item index="7">
                <span>电影</span>
              </el-menu-item>
              <el-menu-item index="8">
                <span>其他</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row> -->
        <el-row class="content">
          <el-col
            :span="8"
            class="D1"
            v-for="item in activityList"
            :key="item.activityId"
            @click.native="toDetail(item.activityId)"
          >
            <el-row class="d1">
              <div
                class="imgLoad"
                :style="{ backgroundImage: 'url(' + item.url + ')' }"
              ></div>
            </el-row>
            <el-row class="text">
              {{item.activityTitle}}
            </el-row>
            <el-row class="time">
              <el-col :span="24">
                结束时间：{{item.endTime}}
              </el-col>
            </el-row>
            <el-row class="loaction">
              <el-col :span="24">
                地点：{{item.activitySite}}
              </el-col>
            </el-row>
            <el-row class="status">
              <el-col>
                {{item.endTime>new Date()?'进行中':'已结束'}}
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <van-empty
          description="暂时没有数据哦~"
          v-if="activityList.length===0"
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
      <Footer />
    </div>
    <el-backtop :visibility-height='500'></el-backtop>
  </div>
</template>

<script>
import Footer from '@/components/footer'
import Header from '@/components/header'
import { allData } from '@/api/index'
export default {
  name: 'activity',
  components: { Footer, Header },
  props: {},
  data () {
    return {
      activeIndex: '1',
      active: '1',
      page: {
        page: 1,
        size: 9,
        total: 0
      },
      activityList: [],
    }
  },
  created () {
    this.getActivity()
  },
  methods: {
    change (newPage) {
      this.activityList = []
      this.page.page = newPage
      this.getActivity()
    },
    toDetail (id) {
      // 路由跳转新页面
      // let routeData = this.$router.resolve({ path: '/', query: { id: 1 } });
      let routeData = this.$router.resolve({ path: `/activity-detail/${id}` });
      window.open(routeData.href, '_blank');
    },
    async getActivity () {
      const res = await allData({ typeId: 3, page: this.page.page, rows: this.page.size })
      this.page.page = res.data == null ? 1 : res.data.data.page
      this.page.size = res.data == null ? 10 : res.data.data.pageSize
      this.page.total = res.data == null ? 0 : res.data.data.records
      let val = res.data.data.rows
      console.log(res);
      if (val == null || val.length === 0) {
        //标记为空时的处理代码
        return;
      }

      for (let i = 0; i < val.length; i++) {
        // console.log(val);
        let arr = val[i];
        // console.log(arr);
        let obj = arr.pictureId.split(',')
        this.activityList.push(arr)
        this.activityList[i].url = 'https://www.tmwhqy.cn/cot/cPicture/getList?pictureId=' + obj[1]
        console.log(this.activityList[i]);
      }
      // console.log(this.url);
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
  cursor: pointer;
}
.van-empty {
  text-align: center;
  margin-top: 2%;
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
        line-height: 400%;
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
    .navtitle {
      margin-left: 5%;
      font-size: 14px;
      padding-bottom: 20px;
      border-bottom: 1px solid #dedede;
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
      .el-col:nth-child(n + 4) {
        margin-top: 3%;
      }
      .D1 {
        .d1 {
          width: 265px;
          height: 190px;
        }
        .text {
          font-weight: bold;
          width: 90%;
          margin-top: -5%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin-top: 2%;
        }
        .time {
          margin-top: 3%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .time,
        .loaction {
          font-size: 14px;
        }
        .loaction {
          margin-top: 2%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .status {
          float: right;
          background-color: #bbbbbb;
          text-align: center;
          margin: 3% 15% 0 0;
          color: #fff;
          width: 20%;
          height: 30px;
          border-radius: 3px;
          line-height: 30px;
          font-size: 14px;
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