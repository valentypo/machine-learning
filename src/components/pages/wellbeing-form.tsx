"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { PersonalInfoStep } from "../form-steps/personal-info-step"
import { AcademicStep } from "../form-steps/academic-step"
import { LifestyleStep } from "../form-steps/lifestyle-step"
import { MentalHealthStep } from "../form-steps/mental-health-step"
import { SuccessStep } from "../form-steps/success-step"
import { Heart, ArrowLeft, ArrowRight } from "lucide-react"

export default function WellbeingForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    profession: "",
    otherProfession: "",
    academicPressure: "",
    workPressure: "",
    cgpa: "",
    studySatisfaction: "",
    jobSatisfaction: "",
    sleepDuration: "",
    otherSleepDuration: "",
    dietaryHabits: "",
    otherDietaryHabits: "",
    degree: "",
    degreeName: "",
    suicidalThoughts: "",
    workStudyHours: "",
    financialStress: "",
    familyHistory: "",
  })

  const totalSteps = 5
  const progress = (step / totalSteps) * 100

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData({ ...formData, ...data })
  }

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    console.log(formData)
    nextStep()
  }

  return (
    <Card className="p-6 rounded-3xl shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Heart className="text-pink-500" size={24} />
          <span className="font-medium text-purple-700">
            Step {step} of {totalSteps}
          </span>
        </div>
        <div className="text-sm text-gray-500">
          {step === 1 && "Personal Information"}
          {step === 2 && "Academic Details"}
          {step === 3 && "Lifestyle Factors"}
          {step === 4 && "Mental Wellbeing"}
          {step === 5 && "Thank You"}
        </div>
      </div>

      <Progress
        value={progress}
        className="h-2 mb-8 bg-gray-100"
        indicatorClassName="bg-gradient-to-r from-pink-500 to-purple-500"
      />

      <form onSubmit={handleSubmit}>
        {step === 1 && <PersonalInfoStep formData={formData} updateFormData={updateFormData} />}

        {step === 2 && <AcademicStep formData={formData} updateFormData={updateFormData} />}

        {step === 3 && <LifestyleStep formData={formData} updateFormData={updateFormData} />}

        {step === 4 && <MentalHealthStep formData={formData} updateFormData={updateFormData} />}

        {step === 5 && <SuccessStep />}

        <div className="flex justify-between mt-8">
          {step > 1 && (
            <Button
              type="button"
              onClick={prevStep}
              variant="outline"
              className="flex items-center gap-2 rounded-full px-6"
            >
              <ArrowLeft size={16} />
              Back
            </Button>
          )}

          {step < 5 && (
            <Button
              type={step === 4 ? "submit" : "button"}
              onClick={step < 4 ? nextStep : undefined}
              className="ml-auto flex items-center gap-2 rounded-full px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              {step === 4 ? "Submit" : "Next"}
              <ArrowRight size={16} />
            </Button>
          )}
        </div>
      </form>
    </Card>
  )
}
