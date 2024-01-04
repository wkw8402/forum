'use client';
import { signIn } from 'next-auth/react'

export default function LoginBtn() {
  return <button onClick={() => { signIn() }}>login</button>
} 