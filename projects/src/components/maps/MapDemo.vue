<template>
  <div>
    <p>常用地址管理</p>

    <div v-show="condition" @click="jumpSearch">
      <span>您的位置</span>
      {{label.content}}
    </div>
    <div v-show="!condition" class="amap-wrapper">
      <el-amap-search-box
        class="search-box"
        :search-option="searchOption"
        :on-search-result="onSearchResult"
      ></el-amap-search-box>
      <el-amap class="amap-box" vid="map" :zoom="zoom" :center="center" :plugin="plugin">
        <el-amap-marker vid="marker" :position="center" :label="label"></el-amap-marker>
        <el-amap-circle
          vid="circle"
          :center="center"
          :radius="radius"
          fill-opacity="0.2"
          strokeColor="#38f"
          strokeOpacity="0.8"
          strokeWeight="1"
          fillColor="#38f"
        ></el-amap-circle>
      </el-amap>
      <div class="ipts">
        <input type="text">
      </div>
    </div>
    <!-- 获取 -->
  </div>
</template>
<script>
export default {
  name: "MapDemo",
  data() {
    let vm = this;
    return {
      condition: true,
      msg: "vue-amap demo",
      zoom: 16,
      center: [121.406051, 31.179695],
      label: {
        content: "您的位置",
        offset: [10, 12]
      },
      searchOption: {
        // city: '上海',
        citylimit: false
      },
      radius: 100,
      plugin: [
        {
          pName: "ToolBar", //工具条插件
          position: "LB"
        },
        {
          pName: "MapType", //卫星与地图切换
          defaultType: 0,
          showTraffic: true //实时交通图层
        },
        {
          pName: "OverView",
          isOpen: true //鹰眼是否打开
        },
        {
          pName: "Scale"
        },
        {
          pName: "Geolocation", //定位插件
          showMarker: false,
          events: {
            init(o) {
              //定位成功 自动将marker和circle移到定位点
              o.getCurrentPosition((status, result) => {
                console.log(result);
                vm.center = [result.position.lng, result.position.lat];
                vm.label.content = result.formattedAddress;
                console.log(vm.label.content);
                vm.getmsg(result.formattedAddress);
              });
            }
          }
        }
      ]
    };
  },

  methods: {
    addRadius() {
      this.radius += 10;
    },
    onSearchResult(pois) {
      console.log(pois);
      let latSum = 0;
      let lngSum = 0;
      if (pois.length > 0) {
        pois.forEach(poi => {
          let { lng, lat } = poi;
          lngSum += lng;
          latSum += lat;
          this.center.push([poi.lng, poi.lat]);
        });
        let center = {
          lng: lngSum / pois.length,
          lat: latSum / pois.length
        };
        this.center = [center.lng, center.lat];
      }
      console.log(this.searchOption);
    },
    getmsg(index) {
      console.log(666);
      this.label.content = index;
    },
    jumpSearch() {
      this.condition = false;
    }
  }
};
</script>
<style scoped>
hr {
  border-color: red;
  border-style: dashed;
}
.amap-wrapper {
  height: 300px;
}
.search-box {
  position: absolute;
  top: 25px;
  left: 20px;
  width: 5rem;
}
.search-box-wrapper input {
  width: 55px;
  height: 30px;
  transition: 1s 0s width ease; /*合在一起*/
}
.search-box-wrapper input:focus {
  height: 30px;
  width: 455px;
}
.imgShiows {
  width: 4rem;
  transition: 1s 0s width ease; /*合在一起*/
  /* height: 30px; */
}
.imgShiows:hover {
  width: 7rem;
}
.imgShiows {
  width: 4rem;
  height: 4rem;
  background: red;
  position: relative;
  animation: myfirst 5s infinite alternate;
  -moz-animation: myfirst 5s infinite alternate; /* Firefox */
  -webkit-animation: myfirst 5s infinite alternate; /* Safari and Chrome */
  -o-animation: myfirst 5s infinite alternate; /* Opera */
}

@keyframes myfirst {
  0% {
    background: red;
    left: 0px;
    top: 0px;
  }
  25% {
    background: yellow;
    left: 200px;
    top: 0px;
  }
  50% {
    background: blue;
    left: 200px;
    top: 200px;
  }
  75% {
    background: green;
    left: 0px;
    top: 200px;
  }
  100% {
    background: red;
    left: 0px;
    top: 0px;
  }
}

@-moz-keyframes myfirst /* Firefox */ {
  0% {
    background: red;
    left: 0px;
    top: 0px;
  }
  25% {
    background: yellow;
    left: 200px;
    top: 0px;
  }
  50% {
    background: blue;
    left: 200px;
    top: 200px;
  }
  75% {
    background: green;
    left: 0px;
    top: 200px;
  }
  100% {
    background: red;
    left: 0px;
    top: 0px;
  }
}

@-webkit-keyframes myfirst /* Safari and Chrome */ {
  0% {
    background: red;
    left: 0px;
    top: 0px;
  }
  25% {
    background: yellow;
    left: 200px;
    top: 0px;
  }
  50% {
    background: blue;
    left: 200px;
    top: 200px;
  }
  75% {
    background: green;
    left: 0px;
    top: 200px;
  }
  100% {
    background: red;
    left: 0px;
    top: 0px;
  }
}

@-o-keyframes myfirst /* Opera */ {
  0% {
    background: red;
    left: 0px;
    top: 0px;
  }
  25% {
    background: yellow;
    left: 200px;
    top: 0px;
  }
  50% {
    background: blue;
    left: 200px;
    top: 200px;
  }
  75% {
    background: green;
    left: 0px;
    top: 200px;
  }
  100% {
    background: red;
    left: 0px;
    top: 0px;
  }
}
</style>
