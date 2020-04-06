import {useEffect} from 'react'
import {Button,Icon,Tabs} from "antd"
import {connect} from 'react-redux'
import Router,{withRouter} from 'next/router'
import LRU from 'lru-cache'

import {cacheArray} from '../lib/repo-cache'
import api from '../lib/api'
import Repo from '../components/Repo'

const cache = new LRU({
  maxAge: 1000 * 60 * 10 // 有效期十分钟
})

const isServer = typeof window === 'undefined'
// let cacheUserRepos,cacheUserStaredRepos
function Index({userRepos,user,router,userStaredRepos}){

  // userRepos, userStaredRepos依赖的作用是,数据过期后,将重新请求的数据进行缓存
useEffect(()=>{
  
  if(!isServer){
    if(userRepos){
      cache.set('userRepos',userRepos)
    }
    if(userStaredRepos){
      cache.set('userStaredRepos',userStaredRepos)
    }
    //手动缓存
    // cacheUserRepos=userRepos
    // cacheUserStaredRepos=userStaredRepos
    // setTimeout(()=>{
    //     cacheUserRepos=null
    //     cacheUserStaredRepos=null
    // },1000*60*5)

  }
},[userRepos,userStaredRepos])
useEffect(() => {
  if(!isServer){
    cacheArray(userRepos)
    cacheArray(userStaredRepos)
  }
},[userRepos,userStaredRepos])
  const tabKey = router.query.key || '1'
  const handleTabChange = activeKey => {
    Router.push(`/?key=${activeKey}`)
  }
    if(!user||!user.id){
      return <div className='root'>
        <p>亲，您还没有登录哦~</p>
        <Button type='primary' href={`/prepare-auth?url=${router.asPath}`}>去登录</Button>
        <style jsx>
        {`
        .root{
          position:absolute;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);
          display:flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        `}
      </style>
      </div>
      
      }else{
        return <div className='root'>
          <div className='user-info'>
            <img src={user.avatar_url} alt="avatar_url" className="avatar" />
            <span className="login">{user.login}</span>
            <span className="name">{user.name}</span>
            <span className="bio">{user.bio}</span>
            <p className="email">
              <Icon type="mail" style={{ marginRight: 5 }} />
              <a href={`mailto:${user.email}`}>
                {user.email ? user.email : 'https://github.com/IFreeOvO'}
              </a>
            </p>
          </div>
          <div className="user-repos">
            <Tabs activeKey={tabKey} onChange={handleTabChange} animated={false}>
              <Tabs.TabPane tab="你的仓库" key="1">
                {userRepos.length>0
                ?userRepos.map(repo => (
                  <Repo repo={repo} key={repo.id} />
                ))
                :'暂时未查询到仓库'
              }
              </Tabs.TabPane>
              <Tabs.TabPane tab="你关注的仓库" key="2">
                {userStaredRepos.length>0
                ?userStaredRepos.map(repo => (
                  <Repo repo={repo} key={repo.id} />
                ))
                :'暂无关注的仓库'
              }
              </Tabs.TabPane>
            </Tabs>
          </div>
          <style jsx>{`
            .root {
              display: flex;
              padding: 20px 0;
            }
            .user-info {
              width: 200px;
              margin-right: 40px;
              flex-shrink: 0;
              display: flex;
              flex-direction: column;
            }
            .login {
              font-weight: 800;
              font-size: 20px;
              margin-top: 20px;
            }
            .name {
              font-size: 16px;
              color: #777;
            }
            .bio {
              margin-top: 20px;
              color: #333;
            }
            .avatar {
              width: 100%;
              border-radius: 5px;
            }
            .user-repos{
              position:relative;
            }
          `}</style>
        </div>
      }
}

Index.getInitialProps=async ({ctx,reduxStore,req})=>{
  const user =reduxStore.getState().user
  let userRepos=[],userStaredRepos=[],userReposResp={},userStarredReposResp={}
  if(!user||!user.id){
    return {
      isLogin:false,
      userRepos,
      userStaredRepos,
    }
  }else{
    if(!isServer){
      if(cache.get('userRepos')&&cache.get('userStaredRepos')){
        return {
          isLogin:true,
          userRepos:cache.get('userRepos'),
          userStaredRepos:cache.get('userStaredRepos')
        }
      }
      //手动缓存
      // if(cacheUserStaredRepos&&cacheUserRepos){
      //   return {
      //     isLogin:true,
      //     userRepos:cacheUserRepos,
      //     userStaredRepos:cacheUserStaredRepos
      //   }
      // }
    }
    try {
      userReposResp=await api.request({url:'/user/repos'},ctx.req,ctx.res)
      userStarredReposResp= await api.request({url:'/user/starred'},ctx.req,ctx.res)
      if(isServer){
        userRepos=userReposResp.data||[]
        userStaredRepos=userStarredReposResp.data||[]
      }else{
        if(userReposResp.data&&userReposResp.data.success){
          userRepos=userReposResp.data.data||[]
        }
        if(userStaredRepos.data&&userStaredRepos.data.success){
          userStaredRepos=userStarredReposResp.data.data||[]
        }
      }
    } catch (error) {
      console.log('window error',error)
    }
    return {
      isLogin:true,
      userRepos,
      userStaredRepos,
    }
  }
    
}
const mapStateToprops=(state)=>{
  return {
    ...state
  }
}
export default withRouter(connect(mapStateToprops)(Index)) 