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
          <span>精选资讯</span>
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
            精选资讯
          </el-col>
        </el-row>
        <!-- 每一条数据 -->
        <el-row
          class="data_box"
          v-if="informationList.length!==0"
        >
          <el-row
            class="content"
            v-for="item in informationList"
            :key="item.id"
          >
            <a
              :href="item.link"
              target="blank"
            >
              <el-col
                :span="24"
                class="elContent"
              >
                <el-col
                  :span='18'
                  class="el1"
                >
                  {{item.link_name}}
                </el-col>
                <el-col
                  :span="6"
                  class="el2"
                >
                  {{item.create_time}}
                </el-col>
              </el-col>
            </a>
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
import { getChoiceness } from '@/api/index'
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
    async getInformation () {
      const res = await getChoiceness({ page: this.page.page, rows: this.page.size })
      console.log(res.data.data);
      this.page.page = res.data == null ? 1 : res.data.data.page
      this.page.size = res.data == null ? 10 : res.data.data.pageSize
      this.page.total = res.data == null ? 0 : res.data.data.records
      const val = res.data.data.rows == null ? null : res.data.data.rows
      // console.log(val);
      if (val == null || val.length === 0) {
        //标记为空时的处理代码
        return;
      }
      this.informationList = val
    },
  },
}
</script>
<style lang="less" scoped>
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
  .content:nth-child(2n) {
    background-color: #f7f2f2;
  }
  .content {
    border-bottom: 1px solid #999;
  }
  .data_content {
    cursor: pointer;
  }
  .data_content:hover {
    h2 {
      color: red;
    }
  }
  .el-row {
    .elContent {
      margin: 2% 0 2% 2%;
      .el1 {
        font-size: 18px;
        font-weight: normal;
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