import {useEffect,useCallback,useState,useRef} from 'react'
import {Select,Spin} from 'antd'
import {debounce} from 'lodash'
import api from '../lib/api'

const Option=Select.Option

function SearchUser({onChange,value}){
  const [fetching,setFetching]=useState(false)
  const [options, setOptions] = useState([])

  // lastFetchIdRef作用是避免搜索结果请求过程中,又发起新的请求
  // 这样导致用户可能会看到现象，即一个数组刚显示就被立马替换的过程
  const lastFetchIdRef = useRef(0)

  const handleSearch=useCallback(
    debounce((value)=>{
      lastFetchIdRef.current += 1
      const fetchId = lastFetchIdRef.current
      setFetching(true)
      setOptions([])
      if(!value) {
        setFetching(false)
        setOptions([])
        return
      }
      api.request({
        url:`/search/users?q=${value}`
      }).then((resp)=>{
          //由于闭包的存在，这里的fetachId保存的是这个请求时的lastFetchIdRef.current
          //而lastFetchIdRef.current则一直指向最新的
        if(fetchId !== lastFetchIdRef.current) {
          return
        }
        const data=resp.data.data
        data.items=data.items.map((item)=>{
          return {
            text:item.login,
            value:item.login
          }
        })
        setOptions(data.items)
      }).finally(()=>{
        setFetching(false)
      })
    },500),[]) 

    // 用户选中了搜索结果后
  const handleChange = (value) => {
    setOptions([])
    setFetching(false)
    onChange(value)
  }
  return <Select
    value={value}
    filterOption={false}
    showSearch={true}
    filterOption={false}
    placeholder="创建者"
    notFoundContent={fetching ? <Spin size="small" /> : <span>no user</span>}
    style={{ width: 200 }}
    onSearch={handleSearch}
    onChange={handleChange}
  >
    {
      options.map((item)=>{
        return <Option value={item.value} key={item.key}>{item.text}</Option>
      })
    }
  </Select>
}

export default SearchUser