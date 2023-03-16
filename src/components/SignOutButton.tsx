"use client"

import { FC, useState } from 'react'
import Button from '@/components/ui/Button'

interface SignOutButtonProps {
 
}

const SignInButton: FC<SignOutButtonProps> = ({}) => {
 const [isLoading, setIsLoading] = useState<boolean>(false)

 const signInWithGoogle = async () => {
  setIsLoading(true)

  try {
    await signOut()
  } catch (error) {
    toast({
      title: 'Error signing out',
      message: 'Please try again later',
      type: 'error'
    })
  }
 }

 return <Button onClick={signUserOut} isLoading={isLoading}>
    Sing Out
 </Button>
}

export default SignOutButton