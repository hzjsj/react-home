// 1. 引入一个方法和一个组件
// createBrowserRouter 创建路由实例 在方法中定义路由 path 和组件的对应关系
// RouterProvider 作为一个组件渲染，并且传入 createBrowserRouter 执行之后生成的 router 实例
import { createBrowserRouter } from "react-router-dom";

import Index from '../pages/Index';
import Search from '../pages/Search'
import NoFoundPage from "../pages/NoFoundPage";

// 2. 调用 createBrowserRouter 方法生成实例  -> 生成 history 模式的路由
//    或者 createHashRouter -> 生成 Hash 模式的路由
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: '*',
    element: <NoFoundPage />
  }
]);

export default router