const axios=require('axios')

const isServer =typeof window==='undefined'
const github_base_url='https://api.github.com'

async function request({method='GET',url,data},req,res){
  if(!url){
    throw Error('url must be provied')
  }
  if(isServer){
    const githubAuth=req.session&&req.session.githubAuth||{}
    const token = githubAuth&&githubAuth.access_token
    let headers={}
    if(token){
      headers['Authorization']=`${githubAuth.token_type} ${token}`
    }
    return axios({
      method,
      url:`${github_base_url}${url}`,
      headers,
      data
    })
  
  }else{
    return axios({
      method,
      url:`/github${url}`,
      data
    })
  }
}

module.exports={
  request
}