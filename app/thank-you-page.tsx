'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const ThankYouPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background flex items-center justify-center p-4"
    >
      <Card className="w-full max-w-2xl bg-card text-card-foreground p-8 rounded-xl shadow-xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold mb-6">Thank You!</h1>
          <p className="text-xl mb-8">
            We&apos;ve received your feedback. It helps us improve!
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
};

export default ThankYouPage;

