import {useState,useCallback} from 'react'
import { Layout,Icon,Input ,Avatar,Tooltip ,Dropdown,Menu} from 'antd'
import {Container} from '../Container'
import getConfig from 'next/config'
import {connect}from 'react-redux'
const {publicRuntimeConfig}=getConfig()
const { Header, Footer, Content } = Layout;
const { Search } = Input;
const LogoStyle={color:'white',fontSize:'40px',paddingTop:'10px',marginRight:'50px'}
const handleUserItem=(
  <Menu>
    <Menu.Item>
      退出
    </Menu.Item>
  </Menu>
)
function MyLayout({children,user}){
  const [search,setSearch]=useState('')
  return <Layout>
    <Header>
      <Container renderer={<div/>}>
      <div className='logo'>
        <Icon type="github" style={LogoStyle} />  
      </div>
      <div className='header-searach'>
        <Search 
        placeholder="请输入仓库名" 
        style={{width:350}}
        onChange={(e)=>{setSearch(e.target.value)}}
        // onSearch={handleSearch}
        />
      </div>
      <div className='avator'>
        {
          user
          ?<Dropdown overlay={handleUserItem}>
            <a href='javascript:void(0)' >
            <Avatar size="large" src={user.avatar_url} />
          </a>
          </Dropdown>
          :<Tooltip title='点击登录'>
          <a href={publicRuntimeConfig.OAUTH_URL} >
            <Avatar size="large" icon="user" />
          </a>
          </Tooltip>
        }
        
      </div>
      </Container>
    </Header>
    <Content>
      <Container renderer={<div style={{color:'red'}}/>}>
        {children}
      </Container>
      </Content>
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
      .ant-layout-header{
        padding:0
      }
      `}
    </style>
  </Layout>
}
function mapState(state){
  return {
    ...state
  }
}
export default connect(mapState)(MyLayout)