const GITHUB_OAUTH_URL='https://github.com/login/oauth/authorize'
const scope='user'
const client_id='a051a619d78ba2c3abaa'
module.exports={
  github:{
    client_id,
    client_secret:'182204bc602928477ef6065fc03bb85aa9c67d24',
    request_token_url:'https://github.com/login/oauth/access_token'
  },
  GITHUB_OAUTH_URL,
  OAUTH_URL:`${GITHUB_OAUTH_URL}?client_id=${client_id}&scpoe=${scope}`
}