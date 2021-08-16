<template>
  <div class="home">
    <Header />
    <!-- 文化资讯 -->
    <div id="container">
      <!-- 轮播图 -->
      <el-row class="title1">
        <el-col>
          <h2 class="title1-left">
            文化资讯
          </h2>
        </el-col>
        <el-col>
          <a href="javascript:;"><span @click="$router.push('/information')">更多></span></a>
        </el-col>
      </el-row>
      <div class="swiper-left">
        <el-carousel
          trigger="click"
          height="350px"
        >
          <el-carousel-item
            v-for="item in swiperList"
            :key="item.index"
            @click.native="toInformation(item.cultureId)"
          >
            <div
              class="imgLoad"
              :style="{ backgroundImage: 'url(' + item.Url + ')' }"
            ></div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 右侧内容 -->
      <div class="active">
        <el-row
          class="row-bg"
          justify="center"
        >
          <el-col
            :span="10"
            v-for="item in informationList"
            :key="item.cultureId"
            class="txt-right"
          >
            <el-row class="txt-content">
              <el-col
                class="text-title"
                :span="24"
                @click.native="toInformation(item.cultureId)"
              >
                {{item.cultureCaption}}
              </el-col>
              <el-col
                class="source"
                :span="12"
              >
                来源：{{item.source}}
              </el-col>
              <el-col
                class="time"
                :span="12"
              >
                {{item.cultureTime}}
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 推荐活动 -->
    <div id="carnival">
      <div class="carnival-title">
        <el-row>
          <el-row class="title2">
            <el-col>
              <h2 class="title2-left">
                推荐活动
              </h2>
            </el-col>
            <el-col>
              <a href="javascript:;"><span @click="$router.push('/activity')">更多></span></a>
            </el-col>
          </el-row>
        </el-row>
      </div>
      <div class="carnival-content">
        <el-row class="activity-content">
          <el-col
            :span="5"
            class="D1"
            v-for="item in activityList"
            :key="item.activityId"
            @click.native="toActivity(item.activityId)"
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
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 场馆景点 -->
    <div id="information">
      <el-row>
        <el-row class="title3">
          <el-col>
            <h2 class="title3-left">
              公共文化场馆
            </h2>
          </el-col>
          <el-col>
            <a href="javascript:;"><span @click="$router.push('/venue')"> 更多></span></a>
          </el-col>
        </el-row>
      </el-row>
      <el-row class="information-content">
        <el-col
          :span="5"
          class="D2"
          v-for="item in venueList"
          :key="item.travelId"
          @click.native="toVenue(item.travelId)"
        >
          <el-row class="d2">
            <div
              class="imgLoad"
              :style="{ backgroundImage: 'url(' + item.url + ')' }"
            ></div>
          </el-row>
          <el-row class="text">
            {{item.travelTitle}}
          </el-row>
          <el-row class="loaction">
            <el-col>
              位置： {{item.travelAddress}}
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <!-- 特色资源 -->
    <div id="footer">
      <el-row>
        <el-row class="title4">
          <el-col>
            <h2 class="title4-left">
              特色资源
            </h2>
          </el-col>
          <el-col>
            <a href="javascript:;"><span @click="$router.push('/resource')"> 更多></span></a>
          </el-col>
        </el-row>
      </el-row>
      <el-row class="information-content">
        <el-col
          :span="5"
          class="D3"
          v-for="item in resourceList"
          :key="item.crId"
          @click.native='toResource(item.crId)'
        >
          <el-row class="d3">
            <div
              class="imgLoad"
              :style="{ backgroundImage: 'url(' + item.url + ')' }"
            ></div>
          </el-row>
          <el-row class="text">
            <h3>{{item.crTitle}}</h3>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <el-backtop :visibility-height='500'></el-backtop>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import { allData } from '@/api/index'
export default {
  components: { Header, Footer },
  name: 'Home',
  data () {
    return {
      swiperList: [

      ],
      informationList: [],
      activityList: [],
      venueList: [],
      resourceList: []
    }
  },
  created () {
    this.getInformationData()
    this.getActivityData()
    this.getVenueData()
    this.getResourceData()
  },
  methods: {
    async getInformationData () {
      const res = await allData({ typeId: 1, page: 1, rows: 4 })
      console.log(res);
      const val = res.data.data.rows == null ? null : res.data.data.rows
      if (val == null || val.length === 0) {
        //标记为空时的处理代码
        return;
      }
      this.informationList = val
      for (let i = 0; i < val.length; i++) {
        // console.log(val);
        let arr = val[i];
        // console.log(arr);
        let obj = arr.pictureId.split(',')
        this.swiperList.push(arr)
        this.swiperList[i].pictureId = obj[1]
        this.swiperList[i].Url = 'https://www.tmwhqy.cn/cot/cPicture/getList?pictureId=' + this.swiperList[i].pictureId
        this.swiperList[i].id = arr.cultureId
        // console.log(that.informationList);
      }
    },
    async getActivityData () {
      const res = await allData({ typeId: 4, page: 1, rows: 4 })
      // console.log(res);
      const val = res.data.data.rows == null ? null : res.data.data.rows
      if (val == null || val.length === 0) {
        //标记为空时的处理代码
        return;
      }
      this.venueList = val
      for (let i = 0; i < val.length; i++) {
        // console.log(val);
        // console.log(arr);
        let obj = val[i].pictureId.split(',')
        this.venueList[i].pictureId = obj[1]
        this.venueList[i].url = 'https://www.tmwhqy.cn/cot/cPicture/getList?pictureId=' + this.venueList[i].pictureId
        // console.log(that.informationList);
      }
    },
    async getVenueData () {
      const res = await allData({ typeId: 3, page: 1, rows: 4 })
      // console.log(res);
      const val = res.data.data.rows == null ? null : res.data.data.rows
      if (val == null || val.length === 0) {
        //标记为空时的处理代码
        return;
      }
      this.activityList = val
      for (let i = 0; i < val.length; i++) {
        // console.log(val);
        // console.log(arr);
        let obj = val[i].pictureId.split(',')
        this.activityList[i].pictureId = obj[1]
        this.activityList[i].url = 'https://www.tmwhqy.cn/cot/cPicture/getList?pictureId=' + this.activityList[i].pictureId
        // console.log(that.informationList);
      }
    },
    async getResourceData () {
      const res = await allData({ typeId: 2, page: 1, rows: 4 })
      console.log(res);
      const val = res.data.data.rows == null ? null : res.data.data.rows
      if (val == null || val.length === 0) {
        //标记为空时的处理代码
        return;
      }
      this.resourceList = val
      for (let i = 0; i < val.length; i++) {
        // console.log(val);
        // console.log(arr);
        let obj = val[i].pictureId.split(',')
        this.resourceList[i].pictureId = obj[1]
        this.resourceList[i].url = 'https://www.tmwhqy.cn/cot/cPicture/getList?pictureId=' + this.resourceList[i].pictureId
        // console.log(that.informationList);
      }
    },
    toInformation (id) {
      let routeData = this.$router.resolve({ path: `/information-detail/${id}` });
      window.open(routeData.href, '_blank');
    },
    toResource (id) {
      let routeData = this.$router.resolve({ path: `/resource-detail/${id}` });
      window.open(routeData.href, '_blank');
    },
    toActivity (id) {
      let routeData = this.$router.resolve({ path: `/activity-detail/${id}` });
      window.open(routeData.href, '_blank');
    },
    toVenue (id) {
      let routeData = this.$router.resolve({ path: `/venue-detail/${id}` });
      window.open(routeData.href, '_blank');
    }
  }
}
</script>
<style lang="less" scoped>
.imgLoad {
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
}
#container {
  margin-top: 2%;
  height: 450px;
  margin: 5% 0 -5% -1.5%;
  .title1 {
    margin: 3% 0 1% 0;
    h2 {
      color: #4b80cb;
      font-weight: normal;
      margin-left: 10%;
      margin-top: -2%;
      margin-bottom: -2%;
    }
    a {
      float: right;
      margin-right: 8.5%;
      margin-top: -2%;
    }
  }
  .active {
    min-width: 350px;
    padding-top: 1%;
    .txt-right {
      width: 38%;
      margin-left: 3.8%;
      .txt-content {
        cursor: pointer;
        padding-bottom: 3%;
        margin-top: 2.5%;
        .text-title {
          font-size: 18px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-weight: bold;
        }
        &:hover {
          color: #c47c03;
        }
        .source {
          margin-top: 2%;
          font-size: 14px;
        }
        .time {
          text-align: right;
          margin-top: 2%;
          float: right;
          font-size: 14px;
        }
      }
    }
  }
  .swiper-left {
    float: left;
    width: 40%;
    height: 380px;
    margin-left: 10%;
    margin-top: 1%;
    .el-carousel {
      .el-carousel__item {
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }

      .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
      }
    }
  }
}
#carnival {
  margin: 5% auto 0 8.5%;
  width: 80%;
  .carnival-title {
    .el-row {
      h2 {
        color: #4b80cb;
        font-weight: normal;
        margin-top: -2%;
        margin-bottom: -5%;
      }
      a {
        float: right;
        margin-right: -3%;
        margin-top: -2%;
      }
    }
  }
  .carnival-content {
    width: 100%;
    .activity-content {
      margin-top: 3%;
      .D1 {
        cursor: pointer;
        .d1 {
          width: 100%;
          height: 190px;
          text-align: center;
        }
        .text {
          text-align: center;
          width: 100%;
          margin-top: 5%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-weight: bold;
          font-size: 18px;
        }
        .time {
          margin-top: 5%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .time,
        .loaciton {
          float: left;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .loaciton {
          margin-top: 5%;
        }
      }
      .D1:nth-child(n + 2) {
        margin-left: 5.5%;
      }
    }
  }
}
#information {
  width: 80%;
  margin: 5% auto 0 8.5%;
  .el-row {
    width: 100%;
    h2 {
      color: #4b80cb;
      font-weight: normal;
      margin-top: -2%;
      margin-bottom: -5%;
    }
    a {
      float: right;
      margin-right: -3%;
      margin-top: -2%;
    }
  }
  .D2 {
    cursor: pointer;
    margin-top: 3%;
    .d2 {
      width: 100%;
      height: 190px;
    }
    .text {
      width: 100%;
      margin-top: 5%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: bold;
      font-size: 18px;
    }
    .loaction {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 100%;
      margin-top: 5%;
    }
  }
  .D2:nth-child(n + 2) {
    margin-left: 5.5%;
  }
}
#footer {
  width: 80%;
  margin: 5% auto 8% 8.5%;
  .el-row {
    width: 100%;
    h2 {
      color: #4b80cb;
      font-weight: normal;
      margin-top: -2%;
      margin-bottom: -5%;
    }
    a {
      float: right;
      margin-right: -3%;
      margin-top: -2%;
    }
  }
  .D3 {
    margin-top: 3%;
    .d3 {
      width: 100%;
      height: 190px;
      cursor: pointer;
    }
    .text {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 100%;
      margin-top: 10%;
      margin-left: 10%;
    }
  }
  .D3:nth-child(n + 2) {
    margin-left: 5.5%;
  }
}
.el-backtop {
  width: 40px;
  color: #000;
}
</style>