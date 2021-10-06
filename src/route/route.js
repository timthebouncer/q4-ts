import React, {lazy, Suspense} from "react";


// import Layout from "@/component/Layout/layout";
import Login from '@/pages/views/loginPage/login'
import Register from "@/pages/views/registerPage/Register"
import Index from "@/pages/views/indexPage/IndexPage"
import UserInfo from "@/pages/views/userInfo/UserInfo"
import List from "@/pages/views/userManagement/List"
import FormList from "@/pages/views/userManagement/formList"
import UserDetail from "@/pages/views/userManagement/UserDetail"
import NotFound from "@/pages/views/notFoundPage"


// const Login = lazy(() =>
//     import('@/pages/views/loginPage')
//         .then(({ Login }) => ({ default: Login })),
// );



// const Index = lazy(() =>
//     import('@/pages/views/indexPage')
//         .then(({ Index }) => ({ default: Index })),
// );

// const Register = lazy(()=>import('@/views/pages/registerPage/index'))
// const Index = lazy(()=>import('@/pages/views/indexPage'))
// const UserInfo = lazy(()=>import('@/views/pages/userInfo'))
// const List = lazy(()=>import('@/views/pages/userManagement/index'))
// const FormList = lazy(()=>import('@/views/pages/userManagement/formList'))
// const UserDetail = lazy(()=>import('@/views/pages/userManagement/userDetail'))


const routes=[
  {
    path: "/",
    name: "Login",
    exact:true,
    component:Login
  },
  {
    path: "/register",
    name: 'Register',
    component:Register
  },
  {
    path: "/index",
    name: "Index",
    component:Index,
  },
  {
    name:'個人資訊管理',
    path:'/account',
    routes:[
      {
        path:'/account/profile-setting',
        name:'帳戶設定',
        component:UserInfo
      }
    ]
  },
  {
    name:'會員管理',
    path: '/user',
    routes:[
      {
        path:'/user/list',
        name:'列表式',
        component:List,
      },
      {
        path:'/user/form',
        name:'表格式',
        component:FormList
      },
      {
        path:'/user/userDetail',
        name:'會員詳情',
        component:UserDetail,
      }
    ]
  },
  {
    path:'*',
    component:NotFound
  }
]

export default routes
