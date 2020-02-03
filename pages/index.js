import {Button} from "antd"
import {useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link'
//next自带方法
import getConfig from 'next/config'
const {publicRuntimeConfig}=getConfig()
export default ()=>{
    // return <Layout>index</Layout>
    return <a href={publicRuntimeConfig.OAUTH_URL}>登录</a>
}