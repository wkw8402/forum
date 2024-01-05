'use client'

export default function Error({error, reset}){
  return (
    <div>
      <h4>oh error occured</h4>
      <button onClick={()=>{ reset() }}>retry</button>
    </div>
  )
}