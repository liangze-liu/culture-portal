<template>
  <div id="venue-detail">
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
            <el-menu-item index="/public">公共健身场所馆</el-menu-item>
            <el-menu-item>
              <a
                href="http://www.tmlib.cn/"
                target="blank"
              >
                数字图书馆
              </a>
            </el-menu-item>
            <el-menu-item>智慧博物馆</el-menu-item>
            <el-menu-item>办事指南</el-menu-item>
            <el-menu-item index="/organization">社会组织与职责</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-row>
    <el-row class="status">
      <span>当前位置： </span>
      <span @click="$router.push('/')">首页 ></span>
      <span @click="$router.push('/venue')">场馆信息></span>
      <span>场馆信息详情</span>
    </el-row>
    <el-card class="c1">
      <el-row>
        <el-col :span="12">
          <img
            :src="detail.url"
            alt=""
          >
        </el-col>
        <el-col :span="12">
          <el-row class="title">
            <h2>{{detail.travelName}}</h2>
          </el-row>
          <el-row class="kind">
            {{detail.typeName}}
          </el-row>
          <hr>
          <el-row class="phone">
            开放时间： {{detail.openTime}}
          </el-row>
          <el-row class="time">
            门票：{{detail.ticketPrice}}
          </el-row>
          <el-row class="loaction">
            <el-col class="weizhi">
              位置：{{detail.travelAddress}}
            </el-col>
            <el-row class="map">
              <el-col
                :span="1"
                @click.native="beforInit"
              >
                <img
                  src="@/assets/image/weizhi.png"
                  alt=""
                >
              </el-col>
              <el-col
                :span="6"
                @click.native="beforInit"
              >
                点击查看地图
              </el-col>
            </el-row>
          </el-row>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="c2-1">
      <h3>简介</h3>
      <el-row>
        <van-empty description="暂时没有简介哦~" />
      </el-row>
    </el-card>
    <el-dialog
      :visible.sync="dialogVisible"
      width="60%"
      :append-to-body='true'
    >
      <input
        type="text"
        value=""
        id="text_"
        v-show="0"
      />
      <input
        type="text"
        value=""
        id="result_"
        v-show="0"
      >
      <input
        type="button"
        value="查询"
        @click="searchByStationName"
        v-show="0"
      >
      <div id="allmap">
      </div>
    </el-dialog>
    <el-backtop :visibility-height='500'></el-backtop>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/footer'
import { allDetail } from '@/api/index'
var BMap = {}
var map = {}
export default {
  name: 'venueDetail',
  components: {
    Footer
  },
  props: {},
  data () {
    return {
      value: '',
      activeIndex: '/venue',
      dialogVisible: false,
      detail: {},
    }
  },
  created () {
    this.getDetail()
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
      const res = await allDetail({ id: this.$route.params.id, categoryId: 4 })
      let val = res.data.data.rows[0]
      if (val == null || val.length === 0) {
        //标记为空时的处理代码
        return;
      }
      // console.log(arr);
      let obj = val.pictureId.split(',')
      this.detail = val
      // console.log(this.list);
      this.detail.pictureId = obj[1]
      this.detail.url = 'https://www.tmwhqy.cn/cot/cPicture/getList?pictureId=' + this.detail.pictureId
      this.addressKeyword = this.detail.travelAddress
      console.log(this.detail);
    },
    beforInit () {
      this.dialogVisible = true
      this.$nextTick(() => {
        this.init()
        this.searchByStationName()
      })
    },
    init () {
      BMap = window.BMap
      map = new BMap.Map("allmap");
      map.centerAndZoom(new BMap.Point(113.171375, 30.669688), 13);
      map.enableScrollWheelZoom();
    },
    searchByStationName () {
      var localSearch = new BMap.LocalSearch(map);
      localSearch.enableAutoViewport(); //允许自动调节窗体大小
      console.log(localSearch, 22);

      map.clearOverlays();//清空原来的标注
      var keyword = this.detail.travelAddress;
      localSearch.setSearchCompleteCallback(searchResult => {
        var poi = searchResult.getPoi(0);
        document.getElementById("result_").value = poi.point.lng + "," + poi.point.lat;
        map.centerAndZoom(poi.point, 17);
        var marker = new BMap.Marker(new BMap.Point(poi.point.lng, poi.point.lat));  // 创建标注，为要查询的地方对应的经纬度
        map.addOverlay(marker);
        var content = document.getElementById("text_").value + "<br/><br/>经度：" + poi.point.lng + "<br/>纬度：" + poi.point.lat;
        var infoWindow = new BMap.InfoWindow("<p style='font-size:14px;'>" + content + "</p>");
        marker.addEventListener("click", function () { this.openInfoWindow(infoWindow); });
        // marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      });

      localSearch.search(keyword);
    }
  }
}
</script>
<style lang="less">
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
  margin: 2% auto 0 auto;
  width: 80%;
  .el-card__body {
    padding: 0;
    margin: 0;
  }
  img {
    width: 100%;
  }
  .title {
    margin: 5% 10%;
    h2 {
      font-size: 22px;
      font-weight: normal;
    }
  }
  .kind {
    width: 10%;
    margin-top: -2%;
    height: 25px;
    text-align: center;
    line-height: 25px;
    margin-left: 10%;
    color: #888;
    font-size: 12px;
    border-radius: 5px;
    border: 1px solid #dedede;
  }
  hr {
    width: 80%;
    margin-left: 10%;
    margin-top: 2%;
  }
  .phone {
    margin: 5% 0 0 10%;
    font-size: 14px;
  }
  .time {
    margin: 4% 0 0 10%;
    font-size: 14px;
  }
  .loaction {
    margin: 4% 0 0 10%;
    font-size: 14px;
    img {
      text-align: center;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }
  .map {
    cursor: pointer;
    margin-top: 8%;
    color: rgba(255, 0, 0, 0.493);
  }
}
.c2-1 {
  float: left;
  margin: 2% 0 5% 10%;
  width: 80%;
  .el-row {
    margin-top: 2%;
  }
  .van-empty {
    text-align: center;
  }
  h3 {
    font-size: 16px;
    font-weight: normal;
    padding: 2% 0;
    border-bottom: 1px solid #dedede;
  }
}
.el-dialog__body {
  div {
    height: 460px;
  }
}
.el-backtop {
  width: 40px;
  color: #000;
}
// .控制图标
.BMap_cpyCtrl {
  display: none;
}
// 控制文字
.anchorBL {
  display: none;
}
// .BMap_Marker {
//   display: none;
// }
</style>