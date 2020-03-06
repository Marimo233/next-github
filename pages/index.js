import {Button} from "antd"
import {useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link'
//next自带方法
import getConfig from 'next/config'
import api from '../lib/api'
import { configConsumerProps } from "antd/lib/config-provider"
function Index({result}){
    // return <Layout>index</Layout>
    return <span>index</span>
}

Index.getInitialProps=async ({ctx})=>{
    const result=await api.request({url:'/search/repositories?q=react'},ctx.req,ctx.res)
    console.log(result)
}

export default Index