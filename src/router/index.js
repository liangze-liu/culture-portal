import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home")
  },
  {
    path: "/search/:keyword",
    name: "search",
    component: () => import("@/components/search")
  },
  {
    path: "/information",
    name: "Information",
    component: () => import("@/components/information/index")
  },
  {
    path: "/information-detail/:id",
    name: "InformationDetail",
    component: () => import("@/components/information/detail")
  },
  {
    path: "/resource",
    name: "Resource",
    component: () => import("@/components/resource/index")
  },
  {
    path: "/resource-detail/:id",
    name: "ResourceDetail",
    component: () => import("@/components/resource/detail")
  },
  {
    path: "/activity",
    name: "activity",
    component: () => import("@/components/activity/index")
  },
  {
    path: "/activity-detail/:id",
    name: "activityDetail",
    component: () => import("@/components/activity/detail")
  },
  {
    path: "/venue",
    name: "venue",
    component: () => import("@/components/venue/index")
  },
  {
    path: "/venue-detail/:id",
    name: "venueDetail",
    component: () => import("@/components/venue/detail")
  },
  {
    path: "/public",
    name: "public",
    component: () => import("@/components/publics/index")
  },
  {
    path: "/public-detail/:id",
    name: "publicDetail",
    component: () => import("@/components/publics/detail")
  },
  {
    path: "/organization",
    name: "organization",
    component: () => import("@/components/organization/index")
  },
  {
    path: "/choiceness",
    name: "choiceness",
    component: () => import("@/components/choiceness/index")
  }
];

export function createRouter () {
  return new VueRouter({
    // 一定要history模式，因为，hash模式更改路径不会刷新，具体原因自行查询
    mode: 'history',
    routes
  })
}