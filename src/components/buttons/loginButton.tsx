import React from 'react'
import { useSession, signIn, signOut} from 'next-auth/react';

const LoginButton = () => {
  const { data: session } = useSession(); 
  let redirectUrl = 'http://localhost:3000/workflow/dashboard'
  
  if(session){
    redirectUrl = 'http://localhost:3000/'
  }

  return (
    <>
      {session ? <button className='p-2 rounded-lg shadow-md text-white bg-blue-700 hover:bg-blue-400 hover:text-white'
       onClick={() => signOut({callbackUrl: redirectUrl})}>Sign out</button>  :  
       <button className='p-2 rounded-lg shadow-md text-white bg-blue-700 hover:bg-blue-400 hover:text-white'
         onClick={() => signIn('google', {callbackUrl: redirectUrl})}>Sign In</button> }
    </>
  )
}

export default LoginButton