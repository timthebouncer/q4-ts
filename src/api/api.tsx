import request from './http'
import {IUserInfo,IUserList,UploadInfo,IAllUserList,IUserParam,IRegister,IRegisterRes} from"../types/storeTypes"
import {AxiosResponse} from "axios";


let token =localStorage.getItem('token')
let config={
  headers: {"Authorization" : `Bearer ${token}`}
}

const api={

Login:{
  userLogin(data: {
    username: string,
    password: string
  }) {
    return request.post<{
      username: string,
      password: string
    },AxiosResponse<IUserInfo>>('/login', data)
  },
},
Register:{
  userRegister(data:IRegister){
    return request.post<IRegister,AxiosResponse<IRegisterRes>>('/register',data)
  }
},
Auth:{
  userAuth(){
    return request.get<AxiosResponse<IUserList>>('/user',config)
  }
},
Upload:{
  userImg(formData:FormData){
    return request.post<FormData,AxiosResponse<UploadInfo>>('/users/uploadPicture',formData,config)
  }
},
User:{
  // updateUsername(data){
  //   return request.put('/users/updateName',data,config)
  // },
  getList(params:IUserParam) {
    return request.get<IUserParam, AxiosResponse<IAllUserList>>('/users?', {...config, params})
  }
}

}



export default api;
