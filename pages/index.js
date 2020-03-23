import {Button} from "antd"
import {useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link'
//next自带方法
import getConfig from 'next/config'
import api from '../lib/api'
import { configConsumerProps } from "antd/lib/config-provider"
function Index({userRepos}){
  console.log(userRepos)
    // return <Layout>index</Layout>
    return <span>index</span>
}

Index.getInitialProps=async ({ctx,reduxStore})=>{
  const user =reduxStore.getState().user
  if(!user||!user.id){
    return {
      isLogin:false
    }
  }else{
    let userRepos=[],userStarredRepos=[]
    try {
      const userReposResp=await api.request({url:'/user/repos'},ctx.req,ctx.res)
      userRepos=userReposResp.data||[]
      const userStarredReposResp=await api.request({url:'/user/starred'},ctx.req,ctx.res)
      userStarredRepos=userStarredReposResp.data||[]
    } catch (error) {
      console.log(error)
    }
    return {
      isLogin:true,
      userRepos,
      userStarredRepos,
    }
  }
    
}

export default Index