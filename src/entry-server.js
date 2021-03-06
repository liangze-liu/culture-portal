import { createApp } from "./main.js";
// context实际上就是server/index.js里面传参，后面会说到server/index.js
export default context => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp();
    router.push(context.url)
    router.onReady(() => {
      // 是否匹配到我们要用的组件
      const matchs = router.getMatchedComponents();
      if (!matchs) {
        return reject({ code: 404 })
      }
      resolve(app);
    }, reject);
  })
}