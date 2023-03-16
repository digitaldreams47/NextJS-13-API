"use client"

import { FC, useState } from 'react'
import Button from '@/components/ui/Button'

interface SignInButtonProps {
 
}

const SignInButton: FC<SignInButtonProps> = ({}) => {
 const [isLoading, setIsLoading] = useState<boolean>(false)

 const signInWithGoogle = async () => {
  setIsLoading(true)

  try {
    await signIn('google')
  } catch (error) {
    toast({
      title: 'Error while sign in',
      message: 'Please try again later',
      type: 'error'
    })
  }
 }

 return <Button onClick={signInWithGoogle} isLoading={isLoading}>
    Sing In
 </Button>
}

export default SignInButton