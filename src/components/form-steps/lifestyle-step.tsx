"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Moon, Utensils } from "lucide-react"

interface LifestyleStepProps {
  formData: any
  updateFormData: (data: any) => void
}

export function LifestyleStep({ formData, updateFormData }: LifestyleStepProps) {
  const [showOtherSleep, setShowOtherSleep] = useState(formData.sleepDuration === "Others")
  const [showOtherDiet, setShowOtherDiet] = useState(formData.dietaryHabits === "Others")

  const handleSleepChange = (value: string) => {
    updateFormData({ sleepDuration: value })
    setShowOtherSleep(value === "Others")
  }

  const handleDietChange = (value: string) => {
    updateFormData({ dietaryHabits: value })
    setShowOtherDiet(value === "Others")
  }

  return (
    <div className="space-y-6">
      <div className="bg-green-100 rounded-2xl p-4 mb-6">
        <h2 className="text-xl font-semibold text-green-800 flex items-center gap-2 mb-2">
          <Utensils className="text-green-600" />
          Lifestyle Factors
        </h2>
        <p className="text-green-700 text-sm">Your daily habits can significantly impact your wellbeing.</p>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Moon className="text-green-600" size={18} />
            <Label htmlFor="sleepDuration" className="text-gray-700 font-medium">
              Sleep Duration
            </Label>
          </div>
          <Select value={formData.sleepDuration} onValueChange={handleSleepChange}>
            <SelectTrigger className="w-full rounded-xl border-gray-300">
              <SelectValue placeholder="Select your typical sleep duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Less than 5 hours">Less than 5 hours</SelectItem>
              <SelectItem value="5-6 hours">5-6 hours</SelectItem>
              <SelectItem value="7-8 hours">7-8 hours</SelectItem>
              <SelectItem value="More than 8 hours">More than 8 hours</SelectItem>
              <SelectItem value="Others">Others</SelectItem>
            </SelectContent>
          </Select>

          {showOtherSleep && (
            <div className="mt-2">
              <Label htmlFor="otherSleepDuration" className="text-gray-700 text-sm">
                Please specify
              </Label>
              <Input
                id="otherSleepDuration"
                value={formData.otherSleepDuration}
                onChange={(e) => updateFormData({ otherSleepDuration: e.target.value })}
                className="mt-1 rounded-xl border-gray-300"
                placeholder="Describe your sleep pattern"
              />
            </div>
          )}
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Utensils className="text-green-600" size={18} />
            <Label htmlFor="dietaryHabits" className="text-gray-700 font-medium">
              Dietary Habits
            </Label>
          </div>
          <Select value={formData.dietaryHabits} onValueChange={handleDietChange}>
            <SelectTrigger className="w-full rounded-xl border-gray-300">
              <SelectValue placeholder="Select your dietary habits" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Unhealthy">Unhealthy</SelectItem>
              <SelectItem value="Moderate">Moderate</SelectItem>
              <SelectItem value="Healthy">Healthy</SelectItem>
              <SelectItem value="Others">Others</SelectItem>
            </SelectContent>
          </Select>

          {showOtherDiet && (
            <div className="mt-2">
              <Label htmlFor="otherDietaryHabits" className="text-gray-700 text-sm">
                Please specify
              </Label>
              <Input
                id="otherDietaryHabits"
                value={formData.otherDietaryHabits}
                onChange={(e) => updateFormData({ otherDietaryHabits: e.target.value })}
                className="mt-1 rounded-xl border-gray-300"
                placeholder="Describe your dietary habits"
              />
            </div>
          )}
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Clock className="text-green-600" size={18} />
            <Label htmlFor="workStudyHours" className="text-gray-700 font-medium">
              Work/Study Hours (per day)
            </Label>
          </div>
          <Select value={formData.workStudyHours} onValueChange={(value) => updateFormData({ workStudyHours: value })}>
            <SelectTrigger className="w-full rounded-xl border-gray-300">
              <SelectValue placeholder="Select your daily work/study hours" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((hours) => (
                <SelectItem key={hours} value={hours.toString()}>
                  {hours} {hours === 1 ? "hour" : "hours"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-gray-700 font-medium">Work Pressure (0-5)</Label>
          <div className="mt-2">
            <RadioGroup
              value={formData.workPressure}
              onValueChange={(value) => updateFormData({ workPressure: value })}
              className="flex flex-wrap gap-3"
            >
              {[0, 1, 2, 3, 4, 5].map((value) => (
                <div key={value} className="flex flex-col items-center">
                  <RadioGroupItem value={value.toString()} id={`work-${value}`} className="sr-only" />
                  <Label
                    htmlFor={`work-${value}`}
                    className={`
                      cursor-pointer h-12 w-12 rounded-full flex items-center justify-center text-lg font-medium
                      ${
                        formData.workPressure === value.toString()
                          ? "bg-green-600 text-white"
                          : "bg-green-100 text-green-800 hover:bg-green-200"
                      }
                    `}
                  >
                    {value}
                  </Label>
                  <span className="text-xs mt-1 text-gray-500">
                    {value === 0 ? "None" : value === 5 ? "Extreme" : ""}
                  </span>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>

        <div>
          <Label className="text-gray-700 font-medium">Job Satisfaction (0-5)</Label>
          <div className="mt-2">
            <RadioGroup
              value={formData.jobSatisfaction}
              onValueChange={(value) => updateFormData({ jobSatisfaction: value })}
              className="flex flex-wrap gap-3"
            >
              {[0, 1, 2, 3, 4, 5].map((value) => (
                <div key={value} className="flex flex-col items-center">
                  <RadioGroupItem value={value.toString()} id={`job-${value}`} className="sr-only" />
                  <Label
                    htmlFor={`job-${value}`}
                    className={`
                      cursor-pointer h-12 w-12 rounded-full flex items-center justify-center text-lg font-medium
                      ${
                        formData.jobSatisfaction === value.toString()
                          ? "bg-green-600 text-white"
                          : "bg-green-100 text-green-800 hover:bg-green-200"
                      }
                    `}
                  >
                    {value}
                  </Label>
                  <span className="text-xs mt-1 text-gray-500">{value === 0 ? "Low" : value === 5 ? "High" : ""}</span>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  )
}
