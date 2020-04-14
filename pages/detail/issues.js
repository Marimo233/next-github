import dynamic from 'next/dynamic'
import { useState, useCallback, useEffect } from 'react'
import { Avatar, Button, Select, Spin } from 'antd'

import withDetail from '../../components/withDetail'
import api from '../../lib/api'
import {getLastUpdated} from '../../lib/utils'
import SearchUser from '../../components/SearchUser'

const Option=Select.Option
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

function IssueItem({issue,labels}){
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

const Issues=({issues,labels})=>{

const [creator,setCreator]=useState('')
const [state,setState]=useState('all')
const [label,setLabel]=useState([])

  // 选中用户结果的回调
  const handleCreatorChange = useCallback(value => {
    setCreator(value)
  }, [])

  // 选中状态结果的回调
  const handleStateChange = useCallback(value => {
    setState(value)
  }, [])

  // 选中label结果的回调
  const handleLabelChange = useCallback(value => {
    setLabel(value)
  }, [])
  
    return (
      <div className='root'>
        <div className='search'>
          <SearchUser onChange={handleCreatorChange} value={creator}/>
          <Select
            placeholder="状态"
            onChange={handleStateChange}
            value={state}
            style={{ width: 200, marginLeft: 20 }}
          >
            <Option value='all'>all</Option>
            <Option value='open'>open</Option>
            <Option value='closed'>closed</Option>
          </Select>
          <Select
          mode="multiple"
          placeholder="Label"
          onChange={handleLabelChange}
          value={label}
          style={{ flexGrow: 1, marginLeft: 20, marginRight: 20 }}
          >
            {labels
            ?labels.map(la => (
              <Option value={la.name} key={la.id}>
                {la.name}
              </Option>
            ))
            :''
        }
        </Select>
        {/* <Button type="primary" onClick={handleSearch} disabled={fetching}>
          搜索
        </Button> */}
        </div>
        <div className='issues'>
          {issues.map((item)=>{
            return <IssueItem issue={item} />
          })}
        </div>
        <style jsx>{`
        .issues {
          border: 1px solid #eee;
          border-radius: 5px;
          margin-bottom: 20px;
          margin-top: 20px;
        }
        .search {
          display: flex;
        }
        .loading {
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
      </div>
    )
}

Issues.getInitialProps=async ({ctx})=>{
  const {owner,name}=ctx.query
  const full_name = `${owner}/${name}`

  const fetchs=Promise.all([
    await api.request(
      {
        url: `/repos/${owner}/${name}/issues`
      },
      ctx.req,
      ctx.res
    ),
    await api.request(
      {
        url: `/repos/${owner}/${name}/labels`
      },
      ctx.req,
      ctx.res
    )
  ])

  const [IssuesResp,LabelsResp]=fetchs
  return {
    owner,
    name,
    initialIssues: IssuesResp.data,
    labels: LabelsResp.data
  }
}
export default  withDetail(Issues,'issues')
