import React from 'react'
import { useSession, signIn, signOut} from 'next-auth/react';

const LoginButton = () => {
  const { data: session } = useSession(); 

  
  return (
    <>
      {session ? <button className='p-2 rounded-lg shadow-md text-white bg-blue-700 hover:bg-blue-400 hover:text-white' onClick={() => signOut()}>Sign out</button>  :  
       <button className='p-2 rounded-lg shadow-md text-white bg-blue-700 hover:bg-blue-400 hover:text-white'  onClick={() => signIn()}>Sign In</button> }
    </>
  )
}

export default LoginButton