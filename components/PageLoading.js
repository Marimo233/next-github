import {Spin} from 'antd'

export default ()=>{
  return <div className='page-loading'>
    <Spin/>
    <style jsx>
      {`.page-loading{
        position:fixed;
        left:0;
        right:0;
        top:0;
        bottom:0;
        display:fix;
        align-items:center;
        justify-content:center;
      }`}
    </style>
  </div>
}