import React, {lazy, Suspense,ReactNode} from "react";
import {IRouter,IRoutes} from '@/types/storeTypes'

// import Layout from "@/components/Layout/layout";
// import Login from '@/pages/views/loginPage/login'
// import Register from "@/pages/views/registerPage/Register"
// import Index from "@/pages/views/indexPage/IndexPage"
// import UserInfo from "@/pages/views/userInfo/UserInfo"
// import List from "@/pages/views/userManagement/List"
// import FormList from "@/pages/views/userManagement/formList"
// import UserDetail from "@/pages/views/userManagement/UserDetail"
// import NotFound from "@/pages/views/notFoundPage"
const Layout = lazy(()=>import('@/components/Layout/layout'))
const Register = lazy(()=>import('@/pages/views/registerPage/Register'))
const Index = lazy(() =>import("@/pages/views/indexPage/IndexPage"));
const UserInfo = lazy(()=>import('@/pages/views/userInfo/UserInfo'))
const List = lazy(()=>import('@/pages/views/userManagement/List'))
const FormList = lazy(()=>import('@/pages/views/userManagement/formList'))
const UserDetail = lazy(()=>import('@/pages/views/userManagement/UserDetail'))
const NotFound = lazy(()=>import('@/pages/views/notFoundPage/index'))

interface IProps {
  history: { [index: string]: any };
  routes: { [index: string]: any };
  children: ReactNode;
  setUserInfo?: ({ }) => void;
  getUserInfo?: { [index: string]: any };
}

const Login = lazy(() => import("@/pages/views/loginPage/login"));

const AsyncComponent = ({children}:any) => {
  return (
    <Suspense fallback={<p>Loading~~~~</p>}>
      {children}
    </Suspense>
  )
}



const routes: IRouter[] =[
  {
    path: "/",
    name: 'login',
    exact:true,
    component:()=><Login />
    // component: (props:IProps) => {
    //   return (
    //     <AsyncComponent>
    //       <Login {...props} />
    //     </AsyncComponent>
    //   );
    // },
  },
  {
    path: "/register",
    name: 'Register',
    component:()=><Register />
  },
  {
    path: "/index",
    name: "Index",
    component:()=><Layout><Index /></Layout>,
  },
  {
    name:'個人資訊管理',
    path:'/account',
    routes:[
      {
        path:'/account/profile-setting',
        name:'帳戶設定',
        component:()=><Layout><UserInfo /></Layout>,
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
        component:()=><Layout><List /></Layout>,
      },
      {
        path:'/user/form',
        name:'表格式',
        component:()=><Layout><FormList /></Layout>,
      },
      {
        path:'/user/userDetail',
        name:'會員詳情',
        component:(props:IProps)=><Layout><UserDetail props={props} /></Layout>,
      }
    ]
  },
  {
    path:'*',
    component:()=><NotFound />
  }
]

export default routes
