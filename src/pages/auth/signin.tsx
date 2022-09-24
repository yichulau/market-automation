import React from 'react'
import LoginButton from '../../components/buttons/loginButton'
import { useSession, signIn, signOut} from 'next-auth/react';
import LoginCard from '../../components/LoginCard';
import LoginVerified from '../../components/LoginVerified';

const Signin = () => {
  const { data: session } = useSession(); 

  return (
    <>
    {session ?  <LoginVerified /> : <LoginCard /> }
    </>
  )
}

export default Signin