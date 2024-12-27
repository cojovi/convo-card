'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ThankYouPage from './thank-you-page'

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  if (formSubmitted) {
    return <ThankYouPage />
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-card text-card-foreground p-8 rounded-xl shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold mb-6 text-center">
              How was your conversation?
            </h1>
            <div className="space-y-4">
              <Button
                type="submit"
                className="w-full py-6 text-lg"
              >
                Submit Feedback
              </Button>
            </div>
          </motion.div>
        </form>
      </Card>
    </div>
  )
}
