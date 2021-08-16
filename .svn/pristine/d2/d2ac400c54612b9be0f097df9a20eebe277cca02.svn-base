<template>
  <div id="search">
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
            :default-active="$route.path"
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
    <el-card>
      <el-row class="title">
        平台为您找到相关“{{this.temp_value}}”数据为 {{this.page.total}} 条
      </el-row>
      <el-row
        class="content"
        v-for="item,index in list"
        :key="index"
        @click.native="toDetail(item.tId,item.typeId)"
      >
        <el-col :span="24">
          {{item.name}}
        </el-col>
      </el-row>
    </el-card>
    <el-pagination
      @current-change="change"
      :page-size="page.size"
      :current-page="page.page"
      layout="total,prev, pager, next, jumper"
      :total="page.total"
    >
    </el-pagination>
    <el-backtop :visibility-height='500'></el-backtop>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import { allData } from '@/api/index'
export default {
  name: 'search',
  components: { Header, Footer },
  props: {},
  data () {
    return {
      value: '',
      page: {
        page: 1,
        size: 8,
        total: 0
      },
      list: [],
      temp_value: ''
    }
  },

  created () {
    this.getData()
  },

  methods: {
    change (newPage) {
      this.list = []
      this.page.page = newPage
      this.getData(this.value)
    },
    async getData (params) {
      this.value = params == undefined ? this.$route.params.keyword : params
      this.temp_value = params == undefined ? this.$route.params.keyword : params
      // console.log(this.value);
      const res = await allData({ keyword: this.value + "", page: this.page.page, rows: this.page.size })
      console.log(res);
      this.page.page = res.data == null ? 1 : res.data.data.page
      this.page.size = res.data == null ? 8 : res.data.data.pageSize
      this.page.total = res.data == null ? 0 : res.data.data.records
      this.list = res.data.data.rows
      console.log(this.list);
    },
    searchhandle (event) {
      if (event.keyCode == 13 && this.value.trim() !== '') {
        this.getData(this.value)
      }
    },
    toDetail (id, typeId) {
      if (typeId == '1') {
        let routeData = this.$router.resolve({ path: `/information-detail/${id}` });
        window.open(routeData.href, '_blank');
      } else if (typeId == '2') {
        let routeData = this.$router.resolve({ path: `/resource-detail/${id}` });
        window.open(routeData.href, '_blank');
      } else if (typeId == '3') {
        let routeData = this.$router.resolve({ path: `/activity-detail/${id}` });
        window.open(routeData.href, '_blank');
      } else if (typeId == '4') {
        let routeData = this.$router.resolve({ path: `/venue-detail/${id}` });
        window.open(routeData.href, '_blank');
      } else {
        let routeData = this.$router.resolve({ path: `/public-detail/${id}` });
        window.open(routeData.href, '_blank');
      }
    }
  },
}
</script>
<style lang="less" scoped>
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
.el-card {
  width: 90%;
  margin: 5% auto;
  background-color: #fff;
  .title {
    font-weight: bold;
  }
  .content {
    padding-top: 1.5%;
    padding-bottom: 1.5%;
    .el-col:first-child {
      cursor: pointer;
    }
  }
  .title {
    margin-bottom: 2%;
  }
  .content:nth-child(2n) {
    background-color: #f7f2f2;
  }
}
.el-pagination {
  float: right;
  margin: 1% 50% 5% 0;
  transform: translateX(50%);
}
.el-backtop {
  width: 40px;
  color: #000;
}
</style>