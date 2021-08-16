<template>
  <div id="resource">
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
          <span>特色资源</span>
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
            特色资源
          </el-col>
        </el-row>
        <el-row class="navtitle">
          <el-col
            :span="2"
            class="kindart"
          >
            艺术类型：
          </el-col>
          <el-col :span="22">
            <el-menu
              :default-active="active"
              background-color="#fff"
              text-color="#000"
              active-text-color="pink"
              mode="horizontal"
              class="chosenav"
            >
              <el-menu-item
                index="0"
                class="all"
                @click="getId('')"
              >
                <span>全部</span>
              </el-menu-item>
              <el-menu-item
                v-for="item in characterType "
                :key="item.id"
                :index='item.id.toString()'
                @click="getId(item.id)"
              >
                <span>{{item.typeName}}</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
        <el-row
          class="content"
          v-if="resourceList.length!==0"
        >
          <el-col
            :span="8"
            class="D1"
            v-for="item in resourceList"
            :key="item.approval"
            @click.native='toDetail(item.crId)'
          >
            <el-row class="d1">
              <div
                class="imgLoad"
                :style="{ backgroundImage: 'url(' + item.url + ')' }"
              ></div>
            </el-row>
            <el-row class="text">
              {{item.crTitle}}
            </el-row>
          </el-col>
        </el-row>
        <van-empty
          description="暂时没有数据哦~"
          v-if="resourceList.length===0"
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
import Footer from '@/components/footer'
import Header from '@/components/header'
import { allData, characterType } from '@/api/index'
export default {
  name: 'Resource',
  components: { Footer, Header },
  props: {},
  data () {
    return {
      activeIndex: '1',
      active: '0',
      page: {
        page: 1,
        size: 9,
        total: 0
      },
      resourceList: [],
      characterType: [],
      url: {}
    }
  },
  created () {
    this.getResource()
    this.getCharacterType()
  },
  methods: {
    change (newPage) {
      this.resourceList = []
      this.page.page = newPage
      this.getResource()
    },
    toDetail (id) {
      let routeData = this.$router.resolve({ path: `/resource-detail/${id}` });
      window.open(routeData.href, '_blank');
    },
    getId (id) {
      this.getResource({
        typeId: 2,
        cTypeId: id
      })
    },
    async getCharacterType () {
      const res = await characterType()
      this.characterType = res.data.data.rows
      // console.log(this.characterType);
      // for (let i = 0; i < this.characterType.length; i++) {
      //   this.characterType = this.characterType[i]
      //   console.log(this.characterType);
      // }
    },
    async getResource (param) {
      param = param == null ? { typeId: 2, page: this.page.page, rows: this.page.size } : param
      console.log(param)
      let that = this
      // console.log(param);
      const { data: res } = await allData(param)
      // console.log(res.data);
      that.page.page = res.data == null ? 1 : res.data.page
      that.page.size = res.data == null ? 10 : res.data.pageSize
      that.page.total = res.data == null ? 0 : res.data.records
      const val = res.data == null ? null : res.data.rows
      // console.log(res);
      that.resourceList = []
      if (val == null || val.length === 0) {
        //标记为空时的处理代码
        return;
      }

      for (let i = 0; i < val.length; i++) {
        // console.log(val);
        let arr = val[i];
        // console.log(arr);
        let obj = arr.pictureId.split(',')
        that.resourceList.push(arr)
        this.resourceList[i].url = 'https://www.tmwhqy.cn/cot/cPicture/getList?pictureId=' + obj[1]
        console.log(this.resourceList[i].url);
      }
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
}
.van-empty {
  text-align: center;
  margin-top: 2%;
}
#container {
  margin-bottom: 10%;
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
    .navtitle {
      margin-left: 5%;
      font-size: 14px;
      .kindart {
        line-height: 400%;
      }
    }
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
    .el-menu.el-menu--horizontal {
      border-bottom: none;
    }
    .content {
      margin: 5%;
      .el-col:nth-child(n + 4) {
        margin-top: 3%;
      }
      .D1 {
        cursor: pointer;
        .d1 {
          width: 265px;
          height: 190px;
          img {
            width: 100%;
            height: 100%;
            cursor: pointer;
          }
        }
        .text {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-weight: bold;
          width: 95%;
          margin-top: 5%;
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