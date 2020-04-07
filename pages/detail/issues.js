import dynamic from 'next/dynamic'
import { useState, useCallback, useEffect } from 'react'
import { Avatar, Button, Select, Spin } from 'antd'

import withDetail from '../../components/withDetail'
import api from '../../lib/api'
import {getLastUpdated} from '../../lib/utils'

const Markdown=dynamic(()=>import ('../../components/Markdown'))
const isServer=typeof window==='undefined'

function IssueDetail({issue}){
  return (
    <div className='root'>
      <Markdown content={issue.body} />
       <div className='actions'>
          <Button href={issue.html_url} target="_blank">
              打开issue讨论页面
          </Button>
       </div>
       <style jsx>{`
       .root {
          background: #fafafa;
          padding: 20px;
        }
        .actions {
          text-align: right;
        }
         `}</style>
    </div>
  )
}

function IssueItem({issue}){
  const [showDetail, setShowDetail] = useState(false)
  // 这个写法就可以不依赖showDetail。这么写可以避开闭包
  const toggleShowDetail = useCallback(() => {
    setShowDetail(detail => !detail)
  }, [])
  return (
    <div>
      <div className='issue'>
        <Button
          type="primary"
          size="small"
          style={{
            position: 'absolute',
            top: 10,
            right: 10
          }}
          onClick={toggleShowDetail}
        >
          {showDetail?'隐藏':'查看'}
        </Button>
      </div>
      <div className="avatar">
          <Avatar src={issue.user.avatar_url} shape="square" size={50}></Avatar>
      </div>
      <div className="main-info">
          <h6>
            <span>{issue.title}</span>
          </h6>
          <p className="sub-info">
            <span>Updated at {getLastUpdated(issue.updated_at)}</span>
          </p>
          <style jsx>{`
          .issue {
            display: flex;
            position: relative;
            padding: 10px;
          }
          .issue:hover {
            background: #fafafa;
          }
          .issue + .issue {
            border-top: 1px solid #eee;
          }
          .main-info > h6 {
            max-width: 600px;
            font-size: 16px;
            padding-right: 40px;
          }
          .avatar {
            margin-right: 20px;
          }
          .sub-info {
            margin-bottom: 0;
          }
          .sub-info > span + span {
            display: inline-block;
            margin-left: 20px;
            font-size: 12px;
          }
        `}</style>
      </div>
      {showDetail ? <IssueDetail issue={issue} /> : null}
    </div>
  )
}

const Detail=({issues})=>{
    return (
      <div className='root'>
        <div className='issues'>
          {issues.map((item)=>{
            return <IssueItem issue={item} />
          })}
        </div>
      </div>
    )
}

Detail.getInitialProps=async ({ctx})=>{
  const {owner,name}=ctx.query
  let issues=[]
  try {
    const issuesResp=await api.request({
      url: `/repos/${owner}/${name}/issues`
    },ctx.req,ctx.res)
    return {
      issues:isServer?issuesResp.data:issuesResp.data.dat
    }
  } catch (error) {
    console.log(error)
    return {
      issues
    }
  }
}
export default  withDetail(Detail,'issues')
