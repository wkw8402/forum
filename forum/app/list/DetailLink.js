'use client'

import {useRouter} from 'next/navigation'

export default function DetailLink(){
  let router = useRouter()
  return (
    <button onClick={()=>{ router.push('/') }}>button</button>
    // router.back(), router.forward(), router.prefetch and router.refresh()
  )
}