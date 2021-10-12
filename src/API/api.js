  import axios from 'axios';

  const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

  const instance = axios.create({
    withCredentials: true,
    headers:{
      "API-KEY": "e22c8b18-65be-4675-9893-02c6ab83692c" 
    },

  });

  export const getUsersAPI = (currentPage = 1, pageSize = 10) =>{
    debugger
      return axios.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
        headers:{
          "API-KEY": "e22c8b18-65be-4675-9893-02c6ab83692c" 
        },
      }).then(
          response => response.data
      );
  }

  export const authMeAPI = () =>{
      
      return axios.get(baseUrl + `/auth/me`, {
          withCredentials: true,
          headers:{
            "API-KEY": "e22c8b18-65be-4675-9893-02c6ab83692c" 
          },
      })
  }
  export const getOneUserAPI = (userId) =>{
      return axios.get(baseUrl + `profile/${userId}`)
  }
 
  export const unFollowAPI = (userId) =>{
    debugger
      return( axios.delete(baseUrl + `follow/${userId}`, {
        withCredentials: true,
        headers:{
            "API-KEY": "e22c8b18-65be-4675-9893-02c6ab83692c"
          }
        })
        )
  }

  export const followAPI = (userId) =>{
    debugger
      return (axios.post(baseUrl + `follow/${userId}`, {}, {
        withCredentials: true,
        headers:{
            "API-KEY": "e22c8b18-65be-4675-9893-02c6ab83692c" 
          }
        })
      )
  }
  export const getStatusAPI = (userId) =>{
      return (axios.get(baseUrl + `profile/status/${userId}`,{
        withCredentials: true,
        headers:{
            "API-KEY": "e22c8b18-65be-4675-9893-02c6ab83692c" 
          }
        })
      )
  }
  export const updateStatusAPI = (status) =>{
      return (axios.put(baseUrl + `profile/status`, {status},{
        withCredentials: true,
        headers:{
            "API-KEY": "e22c8b18-65be-4675-9893-02c6ab83692c" 
          }
        })
      )
  }