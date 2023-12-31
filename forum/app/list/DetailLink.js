'use client'

import {useRouter} from 'next/navigation'

export default function DetailLink(props){
  let router = useRouter()
  return (
    <button onClick={()=>{ router.push('/detail/' + props.id) }}>Go</button>
    // router.back(), router.forward(), router.prefetch and router.refresh()
  )
}