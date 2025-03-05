import React from 'react'
import { doSocialLogin, doLogout } from '../actions'

const LoginForm = () => {
  return (
    <form action={doSocialLogin}>
        <button className='bg-pink-400 text-white p-1 rounded-md m-1 text-lg'
         type='submit' name='action' value="google">
            Sign in With Google
        </button>

        <button className='bg-black text-white p-1 rounded-md m-1 text-lg'
         type='submit' name='action' value="github">
            Sign in With Github
        </button>
    </form>
  )
}

export default LoginForm