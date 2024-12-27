'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 flex items-center justify-center p-4"
    >
      <Card className="w-full max-w-2xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg text-white p-8 rounded-xl shadow-xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-6">
            Thank you for taking the time!
          </h1>
          <p className="text-xl mb-8">
            Your feedback is greatly appreciated.
          </p>
          <div className="space-y-4">
            <Link href="/" passHref>
              <Button
                variant="outline"
                className="w-full sm:w-auto px-8 py-2"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </motion.div>
      </Card>
    </motion.div>
  );
} 