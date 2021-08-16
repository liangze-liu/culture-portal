<template>
  <div id="activity-detail">
    <!-- 头部 -->
    <el-row id="header">
      <el-row class="culture-img">
        <img
          src="@/assets/image/118.png"
          alt=""
        >
        <el-row class="inp">
          <el-input
            v-model="value"
            placeholder="请输入搜索内容"
            suffix-icon="el-icon-search"
            value=""
            clearable
            @keyup.native="searchhandle"
          >
          </el-input>
        </el-row>
      </el-row>
      <img
        src="@/assets/suc/mh2.jpg"
        alt=""
        class="low"
      >
    </el-row>
    <!-- 头部导航栏  -->
    <el-row id="navBar">
      <el-row class="navBar-title">
        <el-col>
          <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            text-color="#fff"
            active-text-color="red"
            router
          >
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index='/information'>文化资讯</el-menu-item>
            <el-menu-item index="/resource">特色资源</el-menu-item>
            <el-menu-item index="/activity">活动信息</el-menu-item>
            <el-menu-item index="/venue">场馆/景点信息</el-menu-item>
            <el-menu-item index="/public">公共健身场所</el-menu-item>
            <el-menu-item>
              <a
                href="http://www.tmlib.cn/"
                target="blank"
              >
                数字图书馆
              </a>
            </el-menu-item>
            <el-menu-item>智慧博物馆</el-menu-item>
            <el-menu-item><a
                href="http://zwfw.hubei.gov.cn/"
                target="blank"
              > 办事指南</a></el-menu-item>
            <el-menu-item index="/organization">组织架构</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-row>
    <el-row class="status">
      <span>当前位置： </span>
      <span @click="$router.push('/')">首页 ></span>
      <span @click="$router.push('/activity')">活动信息 ></span>
      <span>活动信息详情</span>
    </el-row>
    <el-card class="c1">
      <el-row>
        <el-col
          :span="12"
          class="imgs"
        >
          <img
            :src="this.activeDetail.url"
            alt=""
          >
        </el-col>
        <el-col :span="12">
          <el-row class="title">
            <h2>{{activeDetail.activityTitle}}</h2>
          </el-row>
          <hr>
          <el-row class="time">
            开始时间： {{activeDetail.activityTime}}
          </el-row>、
          <el-row class="time">
            结束时间： {{activeDetail.endTime}}
          </el-row>
          <el-row class="loaction">
            <el-col>
              活动地点： {{activeDetail.activitySite}}
            </el-col>
            <el-row class="mp">
              <el-col>
                门票：{{activeDetail.capitalBudget}}
              </el-col>
            </el-row>
          </el-row>
        </el-col>
        <el-col class="actStatus">
          {{activeDetail.endTime>new Date()?'进行中':'已结束'}}
        </el-col>
      </el-row>
    </el-card>
    <el-card class="c2-1">
      <h3>活动简介</h3>
      <el-row>
        {{activeDetail.activityGoal}}
      </el-row>
    </el-card>
    <el-card class="c2">
      <h3>活动详情</h3>
      <el-row
        v-html="activeDetail.activityContent"
        class="c2-content"
      >
        <van-empty
          description="暂时没有描述哦~"
          v-if="activeDetail.activityContent===''"
        />
      </el-row>

    </el-card>
    <el-backtop :visibility-height='500'></el-backtop>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/footer'
import { allDetail } from '@/api/index'

export default {
  name: 'activityDetail',
  components: { Footer },
  props: {},
  data () {
    return {
      value: '',
      activeIndex: '/activity',
      // dialogVisible: false,
      // location: {
      //   lng: 114.308136,
      //   lat: 30.599462
      // },
      // zoom: 12,
      // addressKeyword: "",
      activeDetail: {},
      // list: {}
    }
  },
  created () {
    this.getDetail()
    // this.getList()
  },
  mounted () {

  },
  methods: {
    searchhandle (event) {
      // console.log(event);
      console.log(this.value);
      if (event.keyCode == 13 && this.value.trim() !== '') {
        let routeData = this.$router.resolve({ path: `/search/${this.value}` });
        window.open(routeData.href, '_blank');
      }
    },
    async getDetail (params) {
      const res = await allDetail({ id: this.$route.params.id, categoryId: 3 })
      const val = res.data.data.rows == null ? null : res.data.data.rows
      // console.log(val);
      if (val == null || val.length === 0) {
        //标记为空时的处理代码
        return;
      }
      for (let i = 0; i < val.length; i++) {
        // console.log(val);
        let arr = val[0];
        // console.log(arr);
        let obj = arr.pictureId.split(',')
        this.activeDetail = arr
        this.activeDetail.pictureId = obj[1]
        this.activeDetail.url = 'https://www.tmwhqy.cn/cot/cPicture/getList?pictureId=' + this.activeDetail.pictureId
        // console.log(this.activeDetail);
      }
    },
  },
}
</script>
<style lang="less">
.van-empty {
  text-align: center;
}
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  color: #000;
  text-decoration: none;
  &:hover {
    color: #ff0000;
  }
}
body {
  background-color: #f5f5f5;
  overflow-x: hidden;
}
#header {
  width: 100%;
  height: 220px;
  position: relative;
  overflow: hidden;
  .low {
    width: 100%;
    position: absolute;
    top: -85px;
    height: 190%;
    z-index: -999;
  }
  background-size: 100%;
  .culture-img {
    width: 672px;
    height: 70px;
    margin: 2% auto;
    text-align: center;
    img {
      width: 40%;
      margin-top: 2%;
    }
    .inp {
      text-align: center;
      .el-input {
        margin-top: 10px;
        width: 500px;
        height: 40px;
        border-radius: 20px;
        outline: none;
        border-radius: 5px;
        padding-left: 12px;
        font-size: 13px;
        & ::-webkit-input-placeholder {
          color: #888;
        }
        .el-input__inner {
          color: #000;
        }
      }
    }
  }
}
#navBar {
  .navBar-title {
    width: 100%;
    .el-menu {
      box-sizing: border-box;
      margin: 0;
      display: flex;
      justify-content: center;
      background: linear-gradient(to left, #7763e8, #6a56e1);
      .el-menu-item:hover {
        background: #6f5ad4;
      }
      .el-menu-item {
        padding: 0;
        margin-left: 4%;
        text-align: center;
      }
      .el-menu-item:first-child {
        margin-left: 2%;
      }
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        line-height: 390%;
      }
      .el-menu--horizontal {
        padding: 0;
        text-align: center;
      }
    }
  }
}
.status {
  margin-top: 2%;
  padding-left: 10%;
  span {
    font-size: 14px;
    cursor: pointer;
    color: #888;
  }
}
.c1 {
  margin: 2% 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 450px;
  float: left;
  .el-card__body {
    height: 100%;
  }
  .el-row {
    height: 100%;
  }
  .imgs {
    height: 100%;
    img {
      height: 100%;
      width: 90%;
    }
  }
  .el-card__body {
    padding: 0;
    margin: 0;
  }

  .title {
    margin: 5% 10%;
    h2 {
      font-size: 22px;
      font-weight: normal;
    }
  }
  hr {
    width: 80%;
    margin-left: 10%;
    margin-top: 2%;
  }
  .time,
  .loaction {
    margin: 2% 0 0 10%;
  }
  .loaction {
    margin-top: 4%;
  }
  .mp {
    margin-top: 8%;
  }
  .actStatus {
    float: right;
    background-color: #bbbbbb;
    text-align: center;
    margin: 3% 6% 0 0;
    color: #fff;
    width: 8%;
    height: 30px;
    border-radius: 3px;
    line-height: 30px;
    font-size: 14px;
  }
}
.c2-1 {
  float: left;
  margin-top: 2%;
  margin-left: 10%;
  width: 80%;
  .el-row {
    margin-top: 2%;
  }
  h3 {
    font-size: 16px;
    font-weight: normal;
    padding: 2% 0;
    border-bottom: 1px solid #dedede;
  }
}
.c2 {
  float: left;
  margin: 2% auto 5% 10%;
  width: 80%;
  h3 {
    font-size: 16px;
    font-weight: normal;
    padding: 2% 0;
    border-bottom: 1px solid #dedede;
  }
  .el-row {
    margin-top: 2%;
  }
  .c2-content {
    text-align: center;
  }
}
.el-backtop {
  width: 40px;
  color: #000;
}
</style>