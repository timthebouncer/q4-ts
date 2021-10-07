import request from './http'

const api={

Login:{
  userLogin(data) {
    return request.post('/login', data)
  },
},
Register:{
  userRegister(data){
    return request.post('/register',data)
  }
},
Auth:{
  userAuth(params){
    return request.get('/user',params)
  }
},
Upload:{
  userImg(formData,config){
    return request.post('/users/uploadPicture',formData,config)
  }
},
User:{
  updateUsername(data,config){
    return request.put('/users/updateName',data,config)
  },
  getList(config){
    return request.get('/users?', config)
  }
}

}



export default api
