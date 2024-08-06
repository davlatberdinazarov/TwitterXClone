import Auth from '@/components/auth';
import React from 'react'

export default function Home() {

  let user = false;

  if (!user) return <Auth/>
  return (
    <div>Home</div>
  )
}
