"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const emojis = ["😞", "😐", "🙂", "😄", "😍"]

interface FeedbackFormProps {
  onSubmit: () => void
}

export function FeedbackForm({ onSubmit }: FeedbackFormProps) {
  const [enjoyment, setEnjoyment] = useState<string | null>(null)
  const [topic, setTopic] = useState("")
  const [engagement, setEngagement] = useState(0)
  const [again, setAgain] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ enjoyment, topic, engagement, again }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit feedback')
      }

      // Log to console for development purposes
      console.log({ enjoyment, topic, engagement, again })
      
      // Call the onSubmit callback
      onSubmit()
    } catch (error) {
      console.error('Error submitting feedback:', error)
      // You might want to show an error message to the user here
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <Card className="w-full max-w-2xl bg-gray-800 text-gray-100 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Post-Conversation Feedback</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label className="text-lg">Did you enjoy the conversation you had with me today?</Label>
              <RadioGroup
                className="flex justify-between"
                onValueChange={(value) => setEnjoyment(value)}
              >
                {emojis.map((emoji, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <RadioGroupItem
                      value={String(index)}
                      id={`emoji-${index}`}
                      className="sr-only"
                    />
                    <Label
                      htmlFor={`emoji-${index}`}
                      className={`text-4xl cursor-pointer transition-transform hover:scale-110 ${
                        enjoyment === String(index) ? "scale-125" : ""
                      }`}
                    >
                      {emoji}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="topic" className="text-lg">What did we talk about?</Label>
              <Textarea
                id="topic"
                placeholder="Enter the topics of our conversation..."
                className="bg-gray-700 border-gray-600 focus:border-gray-500 text-gray-100"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label className="text-lg">Did I seem engaging in our conversation?</Label>
              <div className="flex justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setEngagement(star)}
                    className={`text-3xl ${
                      star <= engagement ? "text-yellow-400" : "text-gray-500"
                    } hover:text-yellow-300 transition-colors`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-lg">Would you care to have a conversation with me again?</Label>
              <RadioGroup
                className="flex space-x-4"
                onValueChange={(value) => setAgain(value)}
              >
                <div className="flex items-center">
                  <RadioGroupItem value="yes" id="yes" className="text-blue-500" />
                  <Label htmlFor="yes" className="ml-2">Yes</Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem value="no" id="no" className="text-blue-500" />
                  <Label htmlFor="no" className="ml-2">No</Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-center space-y-4">
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
              Submit Feedback
            </Button>
            <p className="text-center text-lg font-semibold">Thank you for completing this questionnaire!</p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

