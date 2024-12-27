'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
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
      selected ? 'bg-primary text-primary-foreground' : 'hover:bg-primary/10'
    }`}
    onClick={onClick}
  >
    <span role="img" aria-label={label} className="text-2xl">
      {emoji}
    </span>
  </button>
)

export default function Questionnaire() {
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null)
  const [feedback, setFeedback] = useState('')
  const [recommendation, setRecommendation] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
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
              <div>
                <Label>How did you feel about the conversation?</Label>
                <div className="flex justify-center space-x-4 mt-2">
                  <EmojiReaction
                    emoji="😊"
                    label="happy"
                    selected={selectedEmoji === '😊'}
                    onClick={() => setSelectedEmoji('😊')}
                  />
                  <EmojiReaction
                    emoji="😐"
                    label="neutral"
                    selected={selectedEmoji === '😐'}
                    onClick={() => setSelectedEmoji('😐')}
                  />
                  <EmojiReaction
                    emoji="😔"
                    label="sad"
                    selected={selectedEmoji === '😔'}
                    onClick={() => setSelectedEmoji('😔')}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="feedback">Additional Feedback</Label>
                <Textarea
                  id="feedback"
                  placeholder="Share your thoughts..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="mt-2"
                />
              </div>
              <div>
                <Label>Would you recommend this conversation style?</Label>
                <RadioGroup value={recommendation} onValueChange={setRecommendation} className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no">No</Label>
                  </div>
                </RadioGroup>
              </div>
              <Button
                type="submit"
                className="w-full py-6 text-lg"
                disabled={!selectedEmoji}
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

