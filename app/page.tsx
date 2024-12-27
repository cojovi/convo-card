'use client'

import React from 'react'
import Questionnaire from './questionnaire'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return <Questionnaire />
}
