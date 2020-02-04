import axios from 'axios'

export const ADD_COUNT='ADD_COUNT'
export const LOGOUT='LOGOUT'
export const handleLogout=()=>{
  return (dispatch)=>{
    axios.post('/api/user/logout').then(resp=>{
      const {success}=resp.data
      if(resp.status===200&&success){
        dispatch({
          type:LOGOUT,
        })
      }else{
        console.log('logout failed',resp)
      }
    }).catch(err=>{
      console.log('logout failed',err)
    })
  }
}