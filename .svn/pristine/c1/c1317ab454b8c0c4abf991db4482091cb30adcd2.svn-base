<template>
  <div id="information-detail">
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
    <!-- 页面位置信息 -->
    <el-row class="status">
      <span>当前位置： </span>
      <span @click="$router.push('/')">首页 ></span>
      <span @click="$router.push('/information')">文化资讯 ></span>
      <span>资讯详情</span>
    </el-row>
    <el-card class="c1">
      <div class="detail-title">
        <h3>{{detail.cultureCaption}}</h3>
        <div class="title-source">
          <el-row>
            来源： <span>{{detail.source}}</span>
          </el-row>
          <el-row>
            作者： <span>{{detail.editor}}</span>
          </el-row>
          <el-row>
            时间： <span>{{detail.cultureTime}}</span>
          </el-row>
        </div>
      </div>
      <div class="detail-para">
        <div class="detail-para-content">
          <el-row
            class="gxdc"
            v-html="detail.substance"
          >
          </el-row>
        </div>
      </div>
    </el-card>
    <el-card class="c2">
      <el-row class="title">
        相关图册
      </el-row>
      <el-row class="imgs">
        <el-image
          style="width: 80%; height: 80%"
          :src="url"
          :preview-src-list="srcList"
          v-if='srcList.length!==0 || url!==""'
        >
        </el-image>
        <van-empty
          description="暂时没有数据哦~"
          v-if='srcList.length===0 && url==="" '
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
  name: 'informationDetail',
  components: {
    Footer
  },
  data () {
    return {
      value: '',
      activeIndex: '/information',
      url: '',
      srcList: [

      ],
      detail: {}
    }
  },
  created () {
    this.getDetail()
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
      let that = this
      console.log(this.$route.params.id);
      const res = await allDetail({ id: this.$route.params.id, categoryId: 1 })
      console.log(res);
      let val = res.data.data.rows
      console.log(val);
      if (val == null || val.length === 0) {
        //标记为空时的处理代码
        return;
      }

      // console.log(val);
      let arr = val[0];
      let obj = arr.pictureId.split(',')
      that.detail = arr
      for (let j = 0; j < obj.length; j++) {
        if (obj[j] == "") {
          continue;
        } else {
          if (j == 1) {
            that.url = "https://www.tmwhqy.cn/cot/cPicture/getList?pictureId=" + obj[j];
          }
          that.srcList.push("https://www.tmwhqy.cn/cot/cPicture/getList?pictureId=" + obj[j]);
        }

      }
      console.log(that.detail);
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
.van-empty {
  text-align: center;
  padding: 0;
  margin: 0;
  .van-empty__image {
    width: 100%;
    img {
      width: 100%;
    }
  }
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
  float: left;
  margin: 2% 0 5% 10%;
  width: 60%;
  h3 {
    text-align: center;
    font-size: 24px;
    font-weight: normal;
  }
  .el-row {
    text-align: center;
    margin: 2% 0;
    .el-col:first-child {
      margin-left: 17.5%;
    }
    .el-col:nth-child(n + 1) {
      color: #999;
      font-size: 14px;
    }
  }
  .title-source {
    font-size: 14px;
    color: #888;
    .el-row:nth-child(n + 2) {
      margin-top: -12px;
    }
  }
  p {
    font-size: 14px;
  }
  img {
    width: 90%;
  }
  .last {
    border-bottom: 1px solid #dedede;
  }
  .gxdc {
    text-align: left;
    width: 90%;
    margin-left: 5%;
    text-indent: 2em;
  }
  .sq {
    margin-left: 5%;
    text-align: left;
  }
  .wd {
    width: 91%;
    margin-left: 5%;
    text-align: left;
  }
  .jl {
    margin-left: 5%;
    text-align: left;
    padding-bottom: 5%;
    border-bottom: 1px solid #dedede;
  }
}
.c2 {
  width: 20%;
  float: right;
  margin: 2% 3% 0 0;
  .title {
    text-align: center;
    margin: 5%;
  }
  .imgs {
    text-align: center;
  }
}
.el-backtop {
  width: 40px;
  color: #000;
}
</style>
