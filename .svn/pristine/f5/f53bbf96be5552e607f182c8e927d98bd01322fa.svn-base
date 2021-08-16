<template>
  <div id="information">
    <Header />
    <!-- 左侧导航栏 -->
    <div>
      <el-menu
        :default-active="activeIndex"
        background-color="#f9f0da"
        text-color="#000"
        active-text-color="red"
      >
        <el-menu-item>
          <span>文化资讯</span>
        </el-menu-item>
      </el-menu>
      <!-- 右侧主体 -->
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
            文化资讯
          </el-col>
        </el-row>
        <!-- 每一条数据 -->
        <el-row
          class="data_box"
          v-if="informationList.length!==0"
        >
          <el-row
            v-for="item in informationList"
            :key="item.cultureId"
            class="data_content"
            @click.native="toDetail(item.cultureId)"
          >
            <el-col :span="6">
              <div
                class="imgLoad"
                :style="{ backgroundImage: 'url(' + item.url + ')' }"
              ></div>
            </el-col>
            <el-col :span="18">
              <el-col>
                <h2>{{item.cultureCaption}}</h2>
              </el-col>
              <el-col class="el-col1">
                <span>来源：{{item.source}}</span>
              </el-col>
              <el-col class="el-col2">
                <span>时间：{{item.cultureTime}}</span>
              </el-col>
            </el-col>
          </el-row>
        </el-row>
        <van-empty
          description="暂时没有数据哦~"
          v-if="informationList.length===0"
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
      <el-backtop :visibility-height='500'></el-backtop>
      <Footer />
    </div>

  </div>
</template>

<script>
import Header from '@/components/header'

import Footer from '@/components/footer'
import { allData } from '@/api/index'
// import axios from 'axios'
export default {
  name: 'Information',
  components: { Footer, Header },
  props: {},
  data () {
    return {
      activeIndex: '1',
      page: {
        page: 1,
        size: 8,
        total: 0
      },
      informationList: [],
    }
  },
  created () {
    this.getInformation()
  },
  methods: {
    change (newPage) {
      this.informationList = []

      this.page.page = newPage
      this.getInformation()
    },

    toDetail (id) {
      console.log(id);
      let routeData = this.$router.resolve({ path: `/information-detail/${id}` });
      window.open(routeData.href, '_blank');
    },
    async getInformation () {
      let that = this
      const res = await allData({ typeId: 1, page: this.page.page, rows: this.page.size })
      // console.log(res);
      this.page.page = res.data == null ? 1 : res.data.data.page
      this.page.size = res.data == null ? 10 : res.data.data.pageSize
      this.page.total = res.data == null ? 0 : res.data.data.records
      const val = res.data.data.rows == null ? null : res.data.data.rows
      // console.log(val);
      if (val == null || val.length === 0) {
        //标记为空时的处理代码
        return;
      }
      for (let i = 0; i < val.length; i++) {
        // console.log(val);
        let arr = val[i];
        // console.log(arr);
        let obj = arr.pictureId.split(',')
        that.informationList.push(arr)
        that.informationList[i].pictureId = obj[1]
        that.informationList[i].url = 'https://www.tmwhqy.cn/cot/cPicture/getList?pictureId=' + that.informationList[i].pictureId
        // console.log(that.informationList);
      }
    },
  },
}
</script>
<style lang="less" scoped>
.imgLoad {
  height: 10rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
}
.van-empty {
  text-align: center;
  margin-top: 2%;
}
.el-menu {
  float: left;
  margin: 3% 0 0 10%;
  width: 12%;
  .el-menu-item {
    text-align: center;
    line-height: 50px;
    overflow: hidden;
    &:first-child {
      background: url('~@/assets/img/ltbg.png') no-repeat;
      background-size: 100% 100%;
      span {
        color: rgb(228, 217, 197);
      }
    }
  }
}
.el-card {
  float: right;
  width: 70%;
  margin: 3% 5% 0 0;
  .title {
    margin: 0;
    padding: 0;
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    padding-left: 5%;
    .dy {
      text-align: center;
      span {
        cursor: pointer;
      }
    }
    a {
      color: #fff;
    }
    background-color: #660403;
    color: #fff;
  }
  .data_box {
    padding-top: 6%;
  }
  .data_content {
    cursor: pointer;
    border-bottom: 1px solid #999;
    margin: 2% 0;
  }
  .data_content:hover {
    h2 {
      color: red;
    }
  }
  .el-row {
    .el-col {
      h2 {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
        font-size: 18px;
        margin: 4%;
        margin-left: 6%;
        font-weight: normal;
      }
      .el-col1 {
        margin: 0% 6% 0 6%;
      }
      .el-col2 {
        margin: 2% 6%;
      }
    }
  }
}
.el-pagination {
  float: right;
  margin: 5% 50% 5% 0;
  transform: translateX(50%);
}
.el-backtop {
  width: 40px;
  color: #000;
}
</style>