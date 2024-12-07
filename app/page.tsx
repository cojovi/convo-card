"use client"

import { useState } from "react"
import { FeedbackForm } from "./feedback-form"
import { ThankYouScreen } from "./thank-you-screen"

export default function Page() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    setIsSubmitted(true)
  }

  return isSubmitted ? <ThankYouScreen /> : <FeedbackForm onSubmit={handleSubmit} />
}

