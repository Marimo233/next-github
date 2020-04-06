import withDetail from '../../components/withDetail'
import Markdown from '../../components/Markdown'
import api from '../../lib/api'
const Detail=({readme})=>{
    console.log(withDetail)
    return <Markdown content={readme.content} isbase64={true}/>
}

Detail.getInitialProps= async ({ ctx: { query: {owner, name}}})=>{
  try {
  const readmeResp = await request(
    {
        url: `/repos/${owner}/${name}/readme`
    },
    req,
    res
    )
  return {
    readme: readmeResp.data
    }
  } catch (error) {
    console.log(error)
    return {
      readme: {}
      }
  }
    
    
      
}

export default  withDetail(Detail,'index')
// export default  Detail