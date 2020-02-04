import {Button} from "antd"
import {useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link'
//next自带方法
import getConfig from 'next/config'
const {publicRuntimeConfig}=getConfig()
export default ()=>{
    // return <Layout>index</Layout>
    return <span>登录</span>
}