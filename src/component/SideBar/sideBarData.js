import React from 'react'


export const SidebarData =[
  {
    name:'個人資訊管理',
    routes:[{path:'/account/profile-setting',name:'帳戶管理'}]
  },
  {
    name:'會員管理',
    role:'ADMIN',
    routes:[{path:'/user/list',name:'列表式'},{path:'/user/form',name:'表格式'}]
  }


]
