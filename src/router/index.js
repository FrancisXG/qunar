import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home/Home";
import City from "@/pages/City/City";
import Detail from "@/pages/Detail/Detail";
import Gallery from "@/common/Gallery/Gallery";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/city",
      name: "City",
      component: City
    },
    {
      path: "/detail/:id",
      name: "Detail",
      component: Detail
    }

    // {
    //   path: "/gallery",
    //   name: "Gallery",
    //   component: Gallery
    // }
  ],
  // 默认页面在顶端
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
