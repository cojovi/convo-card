import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

export async function POST(request: Request) {
  try {
    const feedback = await request.json()
    
    // Add timestamp to feedback
    const feedbackWithTimestamp = {
      ...feedback,
      timestamp: new Date().toISOString()
    }
    
    // Convert emoji index to actual emoji
    const emojis = ["�", "😐", "🙂", "😄", "😍"]
    const formattedFeedback = {
      ...feedbackWithTimestamp,
      enjoyment: emojis[parseInt(feedbackWithTimestamp.enjoyment)] || 'Not selected'
    }

    // Format the feedback entry
    const feedbackEntry = `
=== Feedback Entry ${formattedFeedback.timestamp} ===
Enjoyment: ${formattedFeedback.enjoyment}
Topic: ${formattedFeedback.topic}
Engagement Rating: ${formattedFeedback.engagement}/5
Would Talk Again: ${formattedFeedback.again}
=====================================\n`

    // Get the feedback file path
    const filePath = path.join(process.cwd(), 'feedback-logs.txt')
    
    // Append the feedback to the file
    await fs.appendFile(filePath, feedbackEntry)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error saving feedback:', error)
    return NextResponse.json({ success: false, error: 'Failed to save feedback' }, { status: 500 })
  }
} 