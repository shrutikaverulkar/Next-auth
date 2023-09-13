"use client"
import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react";
const Home = () => {
  const { data, status } = useSession()
  if (status === "authenticated") {
    return <>
      <button onClick={e => signOut()}>Log Out</button>
      <pre>{JSON.stringify(data)}</pre>

      <h1>{data.user?.name}</h1>
      <h1>{data.user?.email}</h1>
      <img
        src={data.user?.image as string}
        alt={data.user?.name as string} />
    </>
  }
  return <>
    <button onClick={e => signIn("google")}>Login With Google</button>
  </>
}

export default Home