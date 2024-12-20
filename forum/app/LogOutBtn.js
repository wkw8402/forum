'use client';
import { signOut } from 'next-auth/react'

export function LogOutBtn(){
    return (
      <button onClick={()=>{ signOut() }}>logout</button>
    )
} 