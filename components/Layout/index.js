import {useState,useCallback} from 'react'
import { Layout,Icon,Input ,Avatar } from 'antd'
const { Header, Footer, Content } = Layout;
const { Search } = Input;
const LogoStyle={color:'white',fontSize:'40px',paddingTop:'10px',marginRight:'50px'}
export default ({children})=>{
  const [search,setSearch]=useState('')
  const handleSearch=useCallback(
    () => {
      
    },
    [],
  )
  return <Layout>
    <Header>
      <div className='logo'>
        <Icon type="github" style={LogoStyle} />  
      </div>
      <div className='header-searach'>
        <Search 
        placeholder="请输入仓库名" 
        style={{width:350}}
        onChange={(e)=>{setSearch(e.target.value)}}
        onSearch={handleSearch}
        />
      </div>
      <div className='avator'>
        <Avatar size="large" icon="user" />
      </div>
    </Header>
    <Content>{children}</Content>
    <Footer style={{ textAlign: 'center' }}>Next-Github Created by Marimo</Footer>
    <style jsx>{`
      .logo{
        float:left;
      }
      .header-searach{
        float:left;
        line-height:64px;
      }
      .avator{
        float:right;
        line-height:64px;
      }
    `}</style>
    <style jsx global>
      {`#__next{
        height:100%;
      }
      .ant-layout{
        height:100%;
      }
      `}
    </style>
  </Layout>
}