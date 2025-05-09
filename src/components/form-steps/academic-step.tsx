"use client"

import { useState, useEffect } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GraduationCap, BookOpen } from "lucide-react"

interface AcademicStepProps {
  formData: any
  updateFormData: (data: any) => void
}

export function AcademicStep({ formData, updateFormData }: AcademicStepProps) {
  const [showDegreeName, setShowDegreeName] = useState(
    formData.degree === "Bachelor" || formData.degree === "Master" || formData.degree === "Doctorate",
  )

  useEffect(() => {
    setShowDegreeName(formData.degree === "Bachelor" || formData.degree === "Master" || formData.degree === "Doctorate")
  }, [formData.degree])

  const handleDegreeChange = (value: string) => {
    updateFormData({ degree: value })
    setShowDegreeName(value === "Bachelor" || value === "Master" || value === "Doctorate")
  }

  return (
    <div className="space-y-6">
      <div className="bg-blue-100 rounded-2xl p-4 mb-6">
        <h2 className="text-xl font-semibold text-blue-800 flex items-center gap-2 mb-2">
          <GraduationCap className="text-blue-600" />
          Academic Information
        </h2>
        <p className="text-blue-700 text-sm">Tell us about your academic experience and pressures.</p>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="text-blue-600" size={18} />
            <Label htmlFor="degree" className="text-gray-700 font-medium">
              Education Level
            </Label>
          </div>
          <Select value={formData.degree} onValueChange={handleDegreeChange}>
            <SelectTrigger className="w-full rounded-xl border-gray-300">
              <SelectValue placeholder="Select your education level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="High School and lower">High School and lower</SelectItem>
              <SelectItem value="Bachelor">Bachelor</SelectItem>
              <SelectItem value="Master">Master</SelectItem>
              <SelectItem value="Doctorate">Doctorate</SelectItem>
            </SelectContent>
          </Select>

          {showDegreeName && (
            <div className="mt-3">
              <Label htmlFor="degreeName" className="text-gray-700 text-sm">
                Degree Name
              </Label>
              <Input
                id="degreeName"
                value={formData.degreeName}
                onChange={(e) => updateFormData({ degreeName: e.target.value })}
                className="mt-1 rounded-xl border-gray-300"
                placeholder="E.g., Computer Science, Business Administration"
              />
            </div>
          )}
        </div>

        <div>
          <Label htmlFor="cgpa" className="text-gray-700 font-medium">
            CGPA
          </Label>
          <Input
            id="cgpa"
            type="number"
            step="0.01"
            min="0"
            max="4.0"
            value={formData.cgpa}
            onChange={(e) => updateFormData({ cgpa: e.target.value })}
            className="mt-1 rounded-xl border-gray-300"
            placeholder="Enter your CGPA"
          />
        </div>

        <div>
          <Label className="text-gray-700 font-medium">Academic Pressure (0-5)</Label>
          <div className="mt-2">
            <RadioGroup
              value={formData.academicPressure}
              onValueChange={(value) => updateFormData({ academicPressure: value })}
              className="flex flex-wrap gap-3"
            >
              {[0, 1, 2, 3, 4, 5].map((value) => (
                <div key={value} className="flex flex-col items-center">
                  <RadioGroupItem value={value.toString()} id={`academic-${value}`} className="sr-only" />
                  <Label
                    htmlFor={`academic-${value}`}
                    className={`
                      cursor-pointer h-12 w-12 rounded-full flex items-center justify-center text-lg font-medium
                      ${
                        formData.academicPressure === value.toString()
                          ? "bg-blue-600 text-white"
                          : "bg-blue-100 text-blue-800 hover:bg-blue-200"
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
          <Label className="text-gray-700 font-medium">Study Satisfaction (0-5)</Label>
          <div className="mt-2">
            <RadioGroup
              value={formData.studySatisfaction}
              onValueChange={(value) => updateFormData({ studySatisfaction: value })}
              className="flex flex-wrap gap-3"
            >
              {[0, 1, 2, 3, 4, 5].map((value) => (
                <div key={value} className="flex flex-col items-center">
                  <RadioGroupItem value={value.toString()} id={`study-${value}`} className="sr-only" />
                  <Label
                    htmlFor={`study-${value}`}
                    className={`
                      cursor-pointer h-12 w-12 rounded-full flex items-center justify-center text-lg font-medium
                      ${
                        formData.studySatisfaction === value.toString()
                          ? "bg-blue-600 text-white"
                          : "bg-blue-100 text-blue-800 hover:bg-blue-200"
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
