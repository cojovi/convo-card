'use client'

import React, { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import ThankYouPage from './thank-you-page'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

const Page = () => {
  const [response, setResponse] = useState(null)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  if (formSubmitted) {
    return <ThankYouPage />
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <h1 className="text-xl font-bold">Questionnaire</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="feedback">Your Feedback</Label>
            <Textarea
              id="feedback"
              placeholder="Enter your feedback here"
              value={response}
              onChange={(e) => setResponse(e.target.value)}
            />
          </div>
          <div>
            <Label>Would you recommend this product?</Label>
            <RadioGroup value={response} onValueChange={setResponse}>
              <RadioGroupItem value="Yes" id="yes" label="Yes" />
              <RadioGroupItem value="No" id="no" label="No" />
            </RadioGroup>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </motion.div>
  )
}

export default Page
