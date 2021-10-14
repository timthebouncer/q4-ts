import request from './http'
import {IUserInfo,IUserList,FormDataValue,UploadInfo} from"../types/storeTypes"
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
// Register:{
//   userRegister(data){
//     return request.post('/register',data)
//   }
// },
Auth:{
  userAuth(){
    return request.get<AxiosResponse<IUserList>>('/user',config)
  }
},
Upload:{
  userImg(formData:FormDataValue){
    return request.post<FormDataValue,AxiosResponse<UploadInfo>>('/users/uploadPicture',formData,config)
  }
},
// User:{
//   updateUsername(data,config){
//     return request.put('/users/updateName',data,config)
//   },
//   getList(config){
//     return request.get('/users?', config)
//   }
// }

}



export default api;
