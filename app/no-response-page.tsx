'use client'

import React from 'react'
import { motion } from 'framer-motion'

const NoResponsePage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-primary mb-4">
          No Response Recorded
        </h1>
        <p className="text-xl text-primary/80 mb-6">
          We noticed you haven&apos;t provided any feedback.
        </p>
        <p className="text-lg text-primary/70">
          That&apos;s okay! We&apos;ll catch you next time.
        </p>
      </motion.div>
    </div>
  )
}

export default NoResponsePage

