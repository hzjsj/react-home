import { useSearchParams } from 'react-router-dom'

export default function Search(){
    const [searchParams] =  useSearchParams()
    const q = searchParams.get('q')
    return <div>
      this is a Search pages {q}
    </div>
  }