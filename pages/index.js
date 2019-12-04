import {Button} from "antd"
import Link from 'next/link'
import getConfig from 'next/config'
const {publicRuntimeConfig}=getConfig()
export default ()=>{
    return <a href={publicRuntimeConfig.OAUTH_URL}>登录</a>
}