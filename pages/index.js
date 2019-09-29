import {Button} from "antd"
import Link from 'next/link'
export default ()=>{
    return <Link href="/a?id=1" as="/a/1" >
        <Button>测试</Button>
    </Link>
}