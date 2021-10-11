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

  export const authMe = () =>{
      return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
          withCredentials: true,
          headers:{
            "API-KEY": "e22c8b18-65be-4675-9893-02c6ab83692c" 
          },
      })
  }
 
  export const unFollowAPI = (userId) =>{
    debugger
      return( axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
        withCredentials: true,
        headers:{
            "API-KEY": "e22c8b18-65be-4675-9893-02c6ab83692c"
          }
        })
        )
  }

  export const followAPI = (userId) =>{
    debugger
      return (axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
        withCredentials: true,
        headers:{
            "API-KEY": "e22c8b18-65be-4675-9893-02c6ab83692c" 
          }
        })
      )
  }