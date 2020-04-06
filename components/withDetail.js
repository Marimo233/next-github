import {useEffect} from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'

import {cache,get} from '../lib/repo-cache'
import Repo from './Repo'
import api from '../lib/api'

function makeQuery(queryObject){
  const query=Object.entries(queryObject)
    .reduce((result,item)=>{
      result.push(item.join('='))
      return result
  },[])
    .join('&')
  return `?${query}`
}

const isServer = typeof window === 'undefined'

export default (Comp,type)=>{
  const withDetail=({ repobasic, router, ...rest })=>{
    const query = makeQuery(router.query)
    useEffect(() => {
      !isServer && cache(repobasic)
    })
    return <div className='root'>
      {
        repobasic&&repobasic.id
        ?<><div className="repo-basic">
        <Repo repo={repobasic} />
        <div className='tabs'>
            {
              type==='index'
              ?<span className="tab index">Readme</span>
              :<Link href={`/detail${query}`}><a className="tab index">Readme</a></Link>
            }
            {
              type==='issues'
              ?<span className="tab issues">issues</span>
              :<Link href={`/detail/issues${query}`}><a className="tab index">issues</a></Link>
            }
        </div>
      </div>
      <Comp {...rest} /></>
      :'暂无内容'
      }
      
      <style jsx>{`
          .root {
            padding-top: 20px;
          }
          .repo-basic {
            padding: 20px;
            border: 1px solid #eee;
            margin-bottom: 20px;
            border-radius: 5px;
          }
          .tab + .tab {
            margin-left: 20px;
          }
        `}</style>
    </div>
  }
  withDetail.getInitialProps= async (context)=>{
    const { ctx } = context
    const { owner, name } = ctx.query
    const full_name = `${owner}/${name}`
    let pageData={}
    
    if(Comp&&Comp.getInitialProps){
      pageData =await Comp.getInitialProps(context)
    }
    if(get(full_name)) {
      return {
        repobasic: get(full_name),
        ...pageData
      }
    }
    let repoBasic={}
    try {
     repoBasic = await api.request(
        {
          url: `/repos/${full_name}`
        },
        ctx.req,
        ctx.res
      )
    } catch (error) {
      console.log('error')
    }
    return {
      repobasic: isServer?repoBasic.data:repoBasic.data.data,
      ...pageData
    }

  }
  return withRouter(withDetail)
}