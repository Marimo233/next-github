import {Button} from "antd"
import Link from 'next/link'
import getConfig from 'next/config'
const {publicRuntimeConfig}=getConfig()
import Layout from '../components/Layout'
export default ()=>{
    // return <Layout>index</Layout>
    return <span href={publicRuntimeConfig.OAUTH_URL}>登录</span>
}