import { useNavigate } from 'react-router-dom'

export default function About(){
    // 执行 useNavigate 得到一个跳转函数
    const navigate = useNavigate()
    const go404 = ()=>{
        //路由传参方法一： searchParams
       // navigate('/404?id=101&name=zhangsan')
       // 路由传惨方式二：params
       navigate('/404/9999')
    }
    return(
        <div>
            this a about pages
            <br />
            <hr />
            <button onClick={go404}>go to 404 pages</button>
        </div>
    )
}