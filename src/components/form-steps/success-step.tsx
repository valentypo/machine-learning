import { CheckCircle2, Phone, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import React, { useEffect, useState } from "react";

export function SuccessStep() {
  useEffect(() => {
    fetch("http://localhost:8080/api/submit").then(
      response => response.json()
    ).then((data) => {
      console.log(data);
    })
  }, [])

  return (
    <div className="text-center space-y-6 py-4">
      <div className="flex justify-center">
        <div className="rounded-full bg-green-100 p-3">
          <CheckCircle2 className="h-12 w-12 text-green-600" />
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-800">Thank You!</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Your responses have been recorded. This information will help us better understand factors affecting student
          wellbeing.
        </p>
      </div>

      <div className="bg-purple-50 rounded-xl p-6 max-w-md mx-auto">
        <h3 className="font-medium text-purple-800 mb-2">Need Support?</h3>
        <p className="text-sm text-purple-700 mb-4">
          If you're experiencing distress or need someone to talk to, please reach out to these resources:
        </p>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-left">
            <Phone size={18} className="text-purple-600 flex-shrink-0" />
            <div>
              <p className="font-medium text-gray-800">Crisis Helpline</p>
              <p className="text-sm text-gray-600">1-800-273-8255</p>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full justify-start gap-2 border-purple-200 text-purple-700 hover:bg-purple-50 hover:text-purple-800"
            asChild
          >
            <Link href="https://www.nimh.nih.gov/health/find-help" target="_blank">
              <ExternalLink size={16} />
              Mental Health Resources
            </Link>
          </Button>

          <Button
            variant="outline"
            className="w-full justify-start gap-2 border-purple-200 text-purple-700 hover:bg-purple-50 hover:text-purple-800"
            asChild
          >
            <Link href="https://www.crisistextline.org/" target="_blank">
              <ExternalLink size={16} />
              Crisis Text Line
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
