import {useState,useCallback} from 'react'
import { Layout,Icon,Input ,Avatar,Tooltip ,Dropdown,Menu,Modal} from 'antd'
import {Container} from '../Container'
import getConfig from 'next/config'
import {connect}from 'react-redux'
import {withRouter} from 'next/router'
import {handleLogout} from '../../store/action'
const { Header, Footer, Content } = Layout;
const { Search } = Input;
const { confirm } = Modal;
const LogoStyle={color:'white',fontSize:'40px',paddingTop:'10px',marginRight:'50px'}

function MyLayout({children,user,logout,router}){
  const [search,setSearch]=useState('')
  const confirmLogout=useCallback(()=>{
    confirm({
      content:'请确认要退出吗？',
      cancelText:'取消',
      okText:'确认',
      onOk:logout
    })
  },[])
  const handleUserItem=(
    <Menu>
      <Menu.Item onClick={confirmLogout}>
        退出
      </Menu.Item>
    </Menu>
  )
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
          user&&user.id
          ?<Dropdown overlay={handleUserItem}>
            <a href='javascript:void(0)' >
            <Avatar size="large" src={user.avatar_url} />
          </a>
          </Dropdown>
          :<Tooltip title='点击登录'>
          {/* withRouter获得的asPath */}
          <a href={`/prepare-auth?url=${router.asPath}`} >
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
function mapDispatch(dispatch){
  return {
    logout:()=>{
      dispatch(handleLogout())
    }
  }
}
export default connect(mapState,mapDispatch)(withRouter(MyLayout))