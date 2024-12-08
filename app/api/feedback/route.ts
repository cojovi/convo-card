import { NextResponse } from 'next/server'

// Replace this with your actual webhooks.site URL
const WEBHOOK_URL = process.env.WEBHOOK_URL || 'https://your-webhook-url-here'

export async function POST(request: Request) {
  try {
    const feedback = await request.json()
    
    // Add timestamp to feedback
    const feedbackWithTimestamp = {
      ...feedback,
      timestamp: new Date().toISOString()
    }
    
    // Convert emoji index to actual emoji
    const emojis = ["😞", "😐", "🙂", "😄", "😍"]
    const formattedFeedback = {
      ...feedbackWithTimestamp,
      enjoyment: emojis[parseInt(feedbackWithTimestamp.enjoyment)] || 'Not selected'
    }

    // Format the feedback entry for better readability in webhooks.site
    const formattedMessage = `
=== Feedback Entry ${formattedFeedback.timestamp} ===
Enjoyment: ${formattedFeedback.enjoyment}
Topic: ${formattedFeedback.topic}
Engagement Rating: ${formattedFeedback.engagement}/5
Would Talk Again: ${formattedFeedback.again}
=====================================`

    // Send to webhooks.site
    const webhookResponse = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        rawFeedback: formattedFeedback,
        formattedMessage: formattedMessage
      })
    })

    if (!webhookResponse.ok) {
      throw new Error(`Webhook error: ${webhookResponse.statusText}`)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing feedback:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process feedback' }, 
      { status: 500 }
    )
  }
} 