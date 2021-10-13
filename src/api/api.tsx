import request from './http'
import IUserLogin from"../types/storeTypes"


interface IUserInfo {
  name: string | null;
  role: string;
  username: string;
  _id: string;
  message: string;
  success: boolean;
  token: string;
}
const api={

Login:{
  userLogin(data: {
    username: string,
    password: string
  }) {
    return request.post('/login', data)
  },
},
// Register:{
//   userRegister(data){
//     return request.post('/register',data)
//   }
// },
// Auth:{
//   userAuth(params){
//     return request.get('/user',params)
//   }
// },
// Upload:{
//   userImg(formData,config){
//     return request.post('/users/uploadPicture',formData,config)
//   }
// },
// User:{
//   updateUsername(data,config){
//     return request.put('/users/updateName',data,config)
//   },
//   getList(config){
//     return request.get('/users?', config)
//   }
// }

}



export default api
