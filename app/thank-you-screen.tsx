"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ThankYouScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <Card className="w-full max-w-2xl bg-gray-800 text-gray-100 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Thank You!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <p className="text-lg">
            Thank you for taking the time! Us introverys dont like shit, This helps us improve our conversations and hermit tendencies..
          </p>
          <p className="text-lg">
            Your responses have been recorded anonymously and will be used to enhance future interactions.
          </p>
          <p className="text-lg">
            Feel free to....
          </p>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white mt-4"
            onClick={() => window.location.reload()}
          >
            Tell Cody You Love Him
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

