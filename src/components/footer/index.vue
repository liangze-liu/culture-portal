<template>
  <div>
    <div class="footer">
      <el-row class="pic">
        <a
          href="http://bszs.conac.cn/sitename?method=show&amp;id=55D05F8621D93A04E053012819ACC59E"
          target="_blank"
        >
          <img
            src="@/assets/img/blue.png"
            alt=""
          />
        </a>
      </el-row>
      <el-row class="sm">
        <el-row>
          天门文化和旅游局
        </el-row>
        <el-row>
          地址：天门市陆羽大道中23号
        </el-row>
        <el-row>
          联系电话：0728-5222817
        </el-row>
        <el-row>Copyright © 2021 All Right Reserved. 版权所有 </el-row>
        <el-row>鄂ICP备2021011296号-1</el-row>
      </el-row>
      <el-row class="imgC">
        <el-col class="t1">
          关注我们
        </el-col>
        <el-col>
          <img
            src="@/assets/img/code.jpg"
            alt=""
          />
        </el-col>
        <el-col
          class="t2"
          :span="12"
        >
          天门文旅小程序
        </el-col>
      </el-row>
      <div class="links">
        <ul>
          <li style="color:#000;font-weight:bold">
            友情链接
          </li>
          <li><a
              href="http://wlj.wuhan.gov.cn"
              target="blank"
            >武汉市文旅局</a></li>
          <li><a
              href="http://whly.yichang.gov.cn"
              target="blank"
            >宜昌市文旅局</a></li>
          <li><a
              href="http://wlj.xiangyang.gov.cn"
              target="blank"
            >襄阳市文旅局</a></li>
          <li><a
              href="http://whhly.xiaogan.gov.cn"
              target="blank"
            >孝感市文旅局</a></li>
          <li><a
              href="http://wlj.jingzhou.gov.cn"
              target="blank"
            >荆州市文旅局</a></li>
          <li><a
              href="http://hswhj.huangshi.gov.cn"
              target="blank"
            >黄石市文旅局</a></li>
          <li><a
              href="http://wlj.shiyan.gov.cn"
              target="blank"
            >十堰市文旅局</a></li>
          <li><a
              href="http://wtxgj.ezhou.gov.cn"
              target="blank"
            >鄂州市文旅局</a></li>
          <li><a
              href="https://www.ctrip.com"
              target="blank"
            >携程网</a></li>
          <li><a
              href="https://www.fliggy.com"
              target="blank"
            >飞猪</a></li>
          <li><a
              href="https://www.qunar.com"
              target="blank"
            >去哪儿网</a></li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  props: {},
  data () {
    return {};
  }
};
</script>
<style lang="less" scoped>
.links {
  width: 100%;
  float: left;
  margin: 1% 0;
}
ul {
  text-align: center;
  width: 100%;
  li {
    margin-left: 1%;
    text-decoration: aqua;
    display: inline-block;
    font-size: 1rem;
  }
}
.footer {
  width: 100%;
  background-color: #fff;
  font-size: 14px;
  float: left;
  .pic {
    float: left;
    margin: 6% 0 2% 10%;
  }
  .sm {
    float: left;
    margin: 2% 5% 2% 2%;
    .el-row {
      margin-top: 2%;
    }
  }
  span {
    display: inline-block;
    margin: 2% 40%;
  }
  .imgC {
    float: right;
    margin-top: 2.5%;
    .t1 {
      margin-left: 8%;
      margin-top: -3%;
      margin-bottom: 4%;
    }
    img {
      width: 100px;
    }
  }
}
</style>
