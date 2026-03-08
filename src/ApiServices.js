import axios from "axios";
export const BaseUrl = "http://localhost:3434/";

class ApiServices {
    getToken(){
      let token = sessionStorage.getItem("token")
      const head = {  authorization:token  }
      return { headers: head} }

        Login(data) {
          return axios.post(BaseUrl + "apis/login", data)
        }

    //owner------------------------------------------------------ api start
        OwnerGetSingle(data){
          return axios.post(BaseUrl +"/owner/getsingle",data)
        }
        OwnerGetall() {
          return axios.post(BaseUrl + "owner/getall")
        }

        register(data) {    //owner register api
          return axios.post(BaseUrl + "owner/register", data)
        }
        
        changeStatus(data){
          return axios.post(BaseUrl+"admin/owner/changeStatus",data)
        }
    //owner------------------------------------------------------ api end

    //property ------------------------------------------------------ apis start
        propertyAdd(data) {    //owner prperty add  api
          return axios.post(BaseUrl + "owner/property/add", data, this.getToken())
        }

        propertyGetall(data) {    //owner prperty getall  api
          return axios.post(BaseUrl + "owner/property/getall",data)
        }

        update(data){             //owner prperty update  api
          return axios.post(BaseUrl + "owner/property/update",data , this.getToken())
        }
        getSingle(data){              //owner prperty getSingle  api
          return axios.post(BaseUrl+"owner/property/getsingle",data)
        }
        
        PHardDelete(data){         //owner prperty delete  api
          return axios.post(BaseUrl+"owner/property/hardDelete",data)
        }
    //property ------------------------------------------------------ apis end
    

}

export default new ApiServices