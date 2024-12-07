"use client"

import { useState } from "react"
import { FeedbackForm } from "./feedback-form"
import { ThankYouScreen } from "./thank-you-screen"

export default function PostConversationFeedback() {
  const [showThankYou, setShowThankYou] = useState(false)

  if (showThankYou) {
    return <ThankYouScreen />
  }

  return <FeedbackForm onSubmit={() => setShowThankYou(true)} />
}

