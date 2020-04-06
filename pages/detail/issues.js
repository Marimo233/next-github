import withDetail from '../../components/withDetail'

const Detail=()=>{
    console.log(withDetail)
    return <p>issues</p>
}

export default  withDetail(Detail,'issues')
// export default  Detail