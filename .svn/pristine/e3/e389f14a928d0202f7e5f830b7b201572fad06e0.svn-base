<template>
  <div id="organization">
    <Header />
    <div id="container">
      <el-menu
        default-active="activeIndex"
        @open="handleOpen"
        @close="handleClose"
        background-color="#f9f0da"
        text-color="#fff"
        active-text-color="pink"
        class="m1"
      >
        <el-menu-item
          index="1"
          class="nav"
        >
          <span>组织架构</span>
        </el-menu-item>
      </el-menu>
      <el-card class="c1">
        <div class="detail">
          <el-tree
            :props="defaultProps"
            :data="data"
            @node-click="handleNodeClick"
            highlight-current
            node-key='departmentId'
            default-expand-all
            :load="getList"
          ></el-tree>
        </div>
      </el-card>
      <el-card class="c2">
        <el-row class="title">
          <el-col :span="3">
            当前位置：
          </el-col>
          <el-col
            :span="2"
            class="dy"
          >
            <span @click="$router.push('/')">首页</span> &gt;

          </el-col>
          <el-col :span="4">
            组织架构
          </el-col>
        </el-row>
        <el-row class="tit">
          <el-col>
            <h3>单位名称：{{detail.departmentName}}</h3>
          </el-col>
        </el-row>
        <el-row class="content">
          <h3>组织简介</h3>
          <el-row class="memo">
            <el-col>
              {{detail.memo?detail.memo:'暂无'}}
            </el-col>
          </el-row>
          <h3>组织职责</h3>
          <el-row class="response">
            <el-col>
              {{detail.response?detail.response:'暂无'}}
            </el-col>
          </el-row>
          <h3>服务范围</h3>
          <el-row>
            <el-col>{{detail.service?detail.service:'暂无'}}</el-col>
          </el-row>
          <h3>组织图册(点击图片查看更多)</h3>
          <el-row class="imgs">
            <el-image
              style="width: 80%; height: 80%"
              :src="url"
              :preview-src-list="imgList"
              v-if='imgList.length!==0 && url !==""'
            >
            </el-image>
            <van-empty
              description="暂无图片~"
              v-if='imgList.length===0 || url==="" '
            />
          </el-row>
          <h3>单位地址及联系方式</h3>
          <el-row>
            <el-col :span="24">
              地址：{{detail.address?detail.address:'暂无'}}
            </el-col>
            <el-col
              :span="24"
              style="margin-top:2%;"
            >
              联系方式：{{detail.telephone ?detail.telephone:'暂无'}}
            </el-col>
          </el-row>
        </el-row>
      </el-card>
    </div>
    <el-backtop :visibility-height='200'></el-backtop>
    <Footer />
  </div>
</template>
<script>
import Footer from '@/components/footer'
import Header from '@/components/header'
import { tree } from '@/api/index'
export default {
  name: 'organization',
  components: { Footer, Header },
  data () {
    return {
      activeIndex: '1',
      page: {
        page: 1,
        size: 10,
        total: 20
      },
      data: [],
      detail: {},
      imgList: [],
      url: '',
      checkDefault: '',
      defaultProps: {
        children: "children",
        label: "departmentName",
        isLeaf: "leaf",
        // disabled: "hasChild",  //还可以使用disabled控制节点是否能被选择
      },
    }
  },
  created () {
    this.getList()

  },
  mounted () {

  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    handleNodeClick (data) {
      this.imgList = []
      this.url = "";
      if (data.departmentName == "天门文旅组织架构") {
        return
      }
      console.log(data);
      this.detail = data
      if (this.detail.pictureId == null) {
        return
      }
      let arr = this.detail.pictureId.split(',')
      arr.splice(0, 1)
      for (let i = 0; i < arr.length; i++) {
        this.url = 'https://www.tmwhqy.cn/cot/cPicture/getList?pictureId=' + arr[i]
        this.imgList.push("https://www.tmwhqy.cn/cot/cPicture/getList?pictureId=" + arr[i])
      }
    },
    async getList () {
      const res = await tree()
      console.log(res);
      let val = res.data.data
      console.log(val);
      // tranListToTreeData(val)
      this.data = val
      this.handleNodeClick(this.data[0].children[0]);
    },
  }

}
</script>
<style lang="less" scoped>
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
    margin: 3% 0 0 10%;
    width: 23%;
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
  .c1 {
    width: 23%;
    float: left;
    margin: 3% 0 3% 10%;
    .detail {
      height: 400px;
    }
  }
  .c2 {
    float: right;
    width: 60%;
    margin: -4% 5% 3% 0;
    padding-top: -100px;
    .el-row {
      .dy {
        text-align: center;
        span {
          cursor: pointer;
        }
      }
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

    .tit {
      margin-top: 3%;
      text-align: center;
    }
    .content {
      .memo {
        margin: 2% 0;
        .el-col {
          text-indent: 2em;
        }
      }
      .response {
        margin: 2% 0;
      }
      h3 {
        margin-top: 3%;
      }
      .el-row {
        text-indent: 2em;
        margin-top: 3%;
        padding-bottom: 3%;
        border-bottom: 1px solid #dedede;
      }
      .imgs {
        text-align: center;
        .el-image {
          width: 400px !important;
        }
        .van-empty {
          text-align: center;
          display: inline;
        }
      }
    }
  }
}
.el-backtop {
  width: 40px;
  color: #000;
}
</style>