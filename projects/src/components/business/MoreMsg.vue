<template>
  <div>
    <div class="navBox">
      <div class="Bas"></div>
      <NavBack name="张小花" @backjump="backjump"/>
    </div>
    <div class="gaidm"></div>
    <!-- 下面是详情介绍 -->
    <div class="bigBox">
      <img class="logo" :src="personData.logo" alt>
      <div class="bigBoxItem">
        <div>人员姓名：{{personData.name}}</div>
        <div>人员电话：{{personData.tel}}</div>
        <div>人员年龄：{{personData.age}}</div>
        <div>服务范围：{{personData.renge}}</div>
        <div>所属公司：{{personData.merchant}}</div>
        <div>认证情况：{{personData.renZ}}</div>
        <div>工作年限：{{personData.workTime}}</div>
        <div>工作评级：{{personData.type}}</div>
        <div>工作绩效：{{personData.fbw}}</div>
        <div>平台点评：{{personData.plantNum}}</div>
        <div>客户评价：{{personData.num}}</div>
      </div>
      <div class="garid"></div>
      <div class="columsLiss">
        <mu-container>
          <mu-paper :z-depth="1">
            <mu-data-table
              border
              :columns="columns"
              :sort.sync="sort"
              @sort-change="handleSortChange"
              :data="list.slice(0, 6)"
            >
              <template slot="header" slot-scope="scope">
                <tr>
                  <th colspan="5" class="is-center">历史服务</th>
                </tr>
                <tr>
                  <th class="is-center">服务类型</th>
                  <th class="is-center">客户</th>
                  <th class="is-center">服务时长(h)</th>
                  <th class="is-center">服务评分</th>
                  <th class="is-center">公司验收</th>
                </tr>
              </template>
              <template slot-scope="scope">
                <td>{{scope.row.name}}</td>
                <td class="is-right">{{scope.row.calories}}</td>
                <td class="is-right">{{scope.row.fat}}</td>
                <td class="is-right">{{scope.row.carbs}}</td>
                <td class="is-right">{{scope.row.protein}}</td>
              </template>
            </mu-data-table>
          </mu-paper>
        </mu-container>
      </div>
    </div>
  </div>
</template>

<script>
import NavBack from "../public/NavBack";
import logos from "../../assets/toux.jpg";
import waves from "@/directive/waves"; // 水波纹指令
export default {
  name: "MoreMsg",
  directives: {
    waves
  },
  components: { NavBack },
  data() {
    return {
      personData: {
        logo: logos,
        name: "张小花",
        tel: "135-8888-8788",
        renge: "武侯区",
        merchant: "艾莉丝服务公司",
        age: "24",
        renZ: "已认证",
        workTime: "2",
        add: "铜锣湾",
        plantNum: "4.9",
        type: "5.0",
        num: "4.9",
        fbw: "4.8"
      },
      sort: {
        name: "",
        order: "asc"
      },
      columns: [
        { title: "name", width: 60, name: "name" },
        {
          title: "Calories",
          name: "calories",
          width: 60,
          align: "center",
          sortable: true
        },
        {
          title: "Fat (g)",
          name: "fat",
          width: 70,
          align: "center",
          sortable: true
        },
        {
          title: "Carbs (g)",
          name: "carbs",
          width: 70,
          align: "center",
          sortable: true
        },
        {
          title: "Protein (g)",
          name: "protein",
          width: 60,
          align: "center",
          sortable: true
        }
      ],
      list: [
        {
          name: "家政",
          calories: "王先生",
          fat: "2",
          carbs: "4.9",
          protein: "优"
        },
        {
          name: "家政",
          calories: "王先生",
          fat: "2",
          carbs: "4.9",
          protein: "优"
        },
        {
          name: "家政",
          calories: "王先生",
          fat: "2",
          carbs: "4.9",
          protein: "优"
        }
      ]
    };
  },
  methods: {
    backjump() {
      this.$router.go(-1);
    },
    handleSortChange({ name, order }) {
      this.list = this.list.sort((a, b) =>
        order === "asc" ? a[name] - b[name] : b[name] - a[name]
      );
    }
  }
};
</script>

<style scoped>
.navBox {
  height: 1.28rem;
  width: 100%;
  background-image: linear-gradient(-137deg, #ee8018 0%, #fbda61 100%);
  position: fixed;
  z-index: 100000;
}
.Bas {
  width: 100%;
  height: 0.4rem;
}
.gaidm {
  width: 100%;
  height: 1.28rem;
}
.bigBox {
  width: 100%;
  padding: 0.32rem;
  background-color: white;
  position: relative;
  /* text-align: left; */
}
.logo {
  width: 2.6rem;
  border-radius: 50%;
}
.bigBoxItem {
  text-align: left;
  padding: 0.32rem;
  padding-left: 1.02rem;
}
.bigBoxItem div {
  margin-top: 0.1rem;
}
.garid {
  width: 100%;
  border: 0.02rem solid #f9f9f9;
}
.columsLiss {
  margin: 0.32rem auto;
  width: 100%;
}
.columsLiss .container {
  position: relative;
  bottom: 0rem;
  font-size: 0.24rem;
}
.columsLiss >>> .mu-table th {
  font-weight: 400;
  font-size: 0.24rem;
  padding-left: 0;
  padding-right: 0;
  height: 0.66rem;
  color: rgba(0, 0, 0, 0.54);
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  white-space: nowrap;
}
.columsLiss >>> .mu-table tr {
  height: 0.66rem;
}
.columsLiss >>> .mu-table td {
  padding-left: 0;
  padding-right: 0;
  min-height: 0.24rem;
  font-size: 0.24rem;
  text-align: center;
}

.columsLiss >>> .mu-table-header,
.columsLiss >>> .mu-table-body {
  width: 100% !important;
}
</style>