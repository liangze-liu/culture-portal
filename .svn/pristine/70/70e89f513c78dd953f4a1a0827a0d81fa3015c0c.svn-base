<template>
  <div id="resource-detail">
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
      <span @click="$router.push('/resource')">特色资源 ></span>
      <span>特色资源详情</span>
    </el-row>
    <!-- 音频 -->
    <el-row
      class="aut"
      v-if="url!==''"
    >
      <audio
        :src="url"
        controls
      ></audio>
    </el-row>
    <!-- 视频 -->
    <el-row
      class="vid"
      v-if="show!==true"
    >
      <div class="vid-content">
        <video
          :src="src"
          controls
        ></video>
      </div>
      <el-row>
        <el-col class="title">
          {{detail.crTitle}}
        </el-col>
        <el-col
          class="kind"
          :span="1"
        >
          {{detail.typeName}}
        </el-col>
      </el-row>
    </el-row>
    <el-row class="end">
      <el-col v-html="detail.crContent">
      </el-col>
    </el-row>
    <el-backtop :visibility-height='500'></el-backtop>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/footer'
import { allDetail, getVideo } from '@/api/index'
export default {
  name: 'resourceDetail',
  components: {
    Footer,
  },
  props: {},
  data () {
    return {
      value: '',
      activeIndex: '/resource',
      detail: {},
      url: '',
      show: false,
      src: ''
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
      console.log(this.$route.params.id);
      const res = await allDetail({ id: this.$route.params.id, categoryId: 2 })
      this.detail = res.data.data.rows[0]
      console.log(this.detail);
      // this.detail.videoId = ''
      let that = this
      if (this.detail.videoId !== '') {
        let obj = this.detail.videoId.split(',')
        const result = await getVideo(obj[1])
        // console.log(result);
        this.src = `https://www.tmwhqy.cn${result.data}`
        console.log(this.src);
      } else {
        this.show = true
      }
      if (this.detail.audioId == '') {
        return
      } else {
        let obj2 = this.detail.audioId.split(',')
        this.url = 'https://www.tmwhqy.cn/cot/cFile/getAudio?audioId=' + obj2[1]
      }
    }
  },
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
  min-width: 1024px;
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
  padding-left: 17.1%;
  span {
    font-size: 14px;
    cursor: pointer;
    color: #888;
  }
}
.aut {
  display: block;
  width: 70%;
  margin: 2% auto;
  audio {
    width: 100%;
  }
}
.vid {
  width: 1000px;
  margin-top: 2%;
  margin-left: 50%;
  transform: translateX(-50%);
  padding: 3%;
  background-color: #303036;
  .kind {
    text-align: center;
    margin-top: 3%;
    font-size: 14px;
    margin-left: -8%;
    border: 1px solid #dadcde;
    color: #dadcde9f;
    float: left;
  }
  .vid-content {
    width: 100%;
    height: 500px;
  }
  video {
    width: 100% !important;
    height: 100% !important;
  }
  .title {
    float: left;
    margin: 2% 0 2% 0;
    font-size: 24px;
    color: #dadcde;
  }
}
.end {
  width: 1000px;
  padding: 4% 0;
  margin-left: 50%;
  text-indent: 2em;
  margin-top: 2%;
  transform: translateX(-50%);
  background-color: #fff;
  margin-bottom: 5%;
  .el-col {
    padding: 0 5%;
  }
}
.el-backtop {
  width: 40px;
  color: #000;
}
</style>