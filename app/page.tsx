'use client'

import React from 'react'
import { FeedbackForm } from './feedback-form'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const handleSubmit = () => {
    router.push('/thank-you-page')
  }

  return <FeedbackForm onSubmit={handleSubmit} />
}
