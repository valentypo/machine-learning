"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Brain, HeartPulse, DollarSign } from "lucide-react"

interface MentalHealthStepProps {
  formData: any
  updateFormData: (data: any) => void
  validationErrors: Record<string, boolean>
}

export function MentalHealthStep({ formData, updateFormData, validationErrors }: MentalHealthStepProps) {
  return (
    <div className="space-y-6">
      <div className="bg-pink-100 rounded-2xl p-4 mb-6">
        <h2 className="text-xl font-semibold text-pink-800 flex items-center gap-2 mb-2">
          <HeartPulse className="text-pink-600" />
          Mental Wellbeing
        </h2>
        <p className="text-pink-700 text-sm">
          This information helps us understand factors that might be affecting your mental health. All responses are
          confidential.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <Label className="text-gray-700 font-medium flex items-center">
            Financial Stress (0-5) <span className="text-red-500 ml-1">*</span>
          </Label>
          <div className="mt-2">
            <RadioGroup
              value={formData.financialStress}
              onValueChange={(value) => updateFormData({ financialStress: value })}
              className="flex flex-wrap gap-3"
            >
              {[0, 1, 2, 3, 4, 5].map((value) => (
                <div key={value} className="flex flex-col items-center">
                  <RadioGroupItem value={value.toString()} id={`financial-${value}`} className="sr-only" />
                  <Label
                    htmlFor={`financial-${value}`}
                    className={`
                      cursor-pointer h-12 w-12 rounded-full flex items-center justify-center text-lg font-medium
                      ${
                        formData.financialStress === value.toString()
                          ? "bg-pink-600 text-white"
                          : "bg-pink-100 text-pink-800 hover:bg-pink-200"
                      }
                    `}
                  >
                    {value}
                  </Label>
                  <span className="text-xs mt-1 text-gray-500">
                    {value === 0 ? "None" : value === 5 ? "Severe" : ""}
                  </span>
                </div>
              ))}
            </RadioGroup>
            {validationErrors.financialStress && (
              <p className="text-red-500 text-sm mt-2">Financial stress rating is required</p>
            )}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Brain className="text-pink-600" size={18} />
            <Label htmlFor="familyHistory" className="text-gray-700 font-medium flex items-center">
              Family History of Mental Illness <span className="text-red-500 ml-1">*</span>
            </Label>
          </div>
          <RadioGroup
            id="familyHistory"
            value={formData.familyHistory}
            onValueChange={(value) => updateFormData({ familyHistory: value })}
            className="flex gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Yes" id="family-yes" className="text-pink-600" />
              <Label htmlFor="family-yes" className="cursor-pointer">
                Yes
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="No" id="family-no" className="text-pink-600" />
              <Label htmlFor="family-no" className="cursor-pointer">
                No
              </Label>
            </div>
          </RadioGroup>
          {validationErrors.familyHistory && <p className="text-red-500 text-sm mt-1">This field is required</p>}
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-2">
            <DollarSign className="text-pink-600" size={18} />
            <Label htmlFor="suicidalThoughts" className="text-gray-700 font-medium flex items-center">
              Have you ever had suicidal thoughts? <span className="text-red-500 ml-1">*</span>
            </Label>
          </div>
          <div className="bg-yellow-50 rounded-lg p-3 mb-2 text-sm text-yellow-800">
            This information is completely confidential and will be used only to provide appropriate support.
          </div>
          <RadioGroup
            id="suicidalThoughts"
            value={formData.suicidalThoughts}
            onValueChange={(value) => updateFormData({ suicidalThoughts: value })}
            className="flex gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Yes" id="suicidal-yes" className="text-pink-600" />
              <Label htmlFor="suicidal-yes" className="cursor-pointer">
                Yes
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="No" id="suicidal-no" className="text-pink-600" />
              <Label htmlFor="suicidal-no" className="cursor-pointer">
                No
              </Label>
            </div>
          </RadioGroup>
          {validationErrors.suicidalThoughts && <p className="text-red-500 text-sm mt-1">This field is required</p>}
        </div>
      </div>
    </div>
  )
}
