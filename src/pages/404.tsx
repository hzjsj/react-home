import { useSearchParams,useParams } from 'react-router-dom'

// 文档地址：https://reactrouter.com/en/main/hooks/use-search-params

export default function NoFoundPage(){
  // 2. 获取通过 searchParams 传参过来的 ID 参数
  // const [searchParams] =  useSearchParams()
  // const id = searchParams.get('id')
  // const name = searchParams.get('name')

  // 2. 获取通过 params 穿参过来的 id 参数
  const params = useParams()
  return(
    <div> this is a  404 pages.
      <br />
      id = {params.id}
    </div>
  )
}