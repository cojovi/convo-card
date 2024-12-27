'use client'

import React, { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

interface EmojiReactionProps {
  emoji: string;
  label: string;
  selected: boolean;
  onClick: () => void;
}

const EmojiReaction = ({ emoji, label, selected, onClick }: EmojiReactionProps) => (
  <button
    type="button"
    className={`p-2 rounded-full transition-colors ${
      selected ? 'bg-gray-600' : 'bg-gray-700 hover:bg-gray-600'
    }`}
    onClick={onClick}
  >
    <span className="text-2xl" role="img" aria-label={label}>
      {emoji}
    </span>
  </button>
)

interface StarRatingProps {
  rating: number;
  setRating: (rating: number) => void;
}

const StarRating = ({ rating, setRating }: StarRatingProps) => {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          type="button"
          key={star}
          className={`text-2xl transition-colors ${
            star <= rating ? 'text-yellow-400' : 'text-gray-600'
          }`}
          onClick={() => setRating(star)}
        >
          ★
        </button>
      ))}
    </div>
  )
}

interface FeedbackFormProps {
  onSubmit: () => void;
}

export function FeedbackForm({ onSubmit }: FeedbackFormProps) {
  const [enjoyment, setEnjoyment] = useState('')
  const [topic, setTopic] = useState('')
  const [engaging, setEngaging] = useState(0)
  const [again, setAgain] = useState('')

  console.log('Environment Variable:', process.env.NEXT_PUBLIC_WEBHOOK_URL)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Process the form data
      const formData = { enjoyment, topic, engaging, again }
      
      // Log the form data (for development)
      console.log('Form submitted:', formData)
      
      // Ensure the webhook URL is correctly set up
      const WEBHOOK_URL = process.env.NEXT_PUBLIC_WEBHOOK_URL || 'https://your-webhook-url-here'
      console.log('Using Webhook URL:', WEBHOOK_URL)
      
      // Call the API endpoint (if needed)
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit feedback')
      }

      // Call the onSubmit callback to handle navigation
      onSubmit()
    } catch (error) {
      console.error('Error submitting feedback:', error)
      alert('There was an error submitting your feedback. Please try again later.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <form onSubmit={handleSubmit}>
        <Card className="w-full max-w-2xl bg-gray-800 text-gray-100 p-8 rounded-xl shadow-xl">
          <h1 className="text-3xl font-bold mb-8 text-center">Post-Conversation Feedback</h1>
          
          <div className="space-y-6">
            <div>
              <Label className="block mb-2">Did you enjoy the conversation you had with me today?</Label>
              <div className="flex justify-between">
                <EmojiReaction emoji="😞" label="Very Unsatisfied" selected={enjoyment === 'unsatisfied'} onClick={() => setEnjoyment('unsatisfied')} />
                <EmojiReaction emoji="😐" label="Neutral" selected={enjoyment === 'neutral'} onClick={() => setEnjoyment('neutral')} />
                <EmojiReaction emoji="😊" label="Satisfied" selected={enjoyment === 'satisfied'} onClick={() => setEnjoyment('satisfied')} />
                <EmojiReaction emoji="😄" label="Very Satisfied" selected={enjoyment === 'very satisfied'} onClick={() => setEnjoyment('very satisfied')} />
              </div>
            </div>

            <div>
              <Label htmlFor="topic" className="block mb-2">What did we talk about?</Label>
              <Textarea
                id="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full bg-gray-700 text-gray-100 border-gray-600 focus:border-gray-500"
                rows={4}
              />
            </div>

            <div>
              <Label className="block mb-2">Did I seem engaging in our conversation?</Label>
              <StarRating rating={engaging} setRating={setEngaging} />
            </div>

            <div>
              <Label className="block mb-2">Would you care to have a conversation with me again?</Label>
              <RadioGroup value={again} onValueChange={setAgain}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" className="border-gray-600 text-gray-100" />
                  <Label htmlFor="yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" className="border-gray-600 text-gray-100" />
                  <Label htmlFor="no">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <p className="mt-8 text-center text-lg font-semibold">Thank you for completing this questionnaire!</p>
          <motion.div
            className="mt-8 flex justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full text-lg shadow-lg transition-all duration-300 ease-in-out hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Submit
            </Button>
          </motion.div>
        </Card>
      </form>
    </div>
  )
}

