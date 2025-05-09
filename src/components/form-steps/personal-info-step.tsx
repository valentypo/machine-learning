"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Briefcase } from "lucide-react"

interface PersonalInfoStepProps {
  formData: any
  updateFormData: (data: any) => void
}

export function PersonalInfoStep({ formData, updateFormData }: PersonalInfoStepProps) {
  const [showOtherProfession, setShowOtherProfession] = useState(formData.profession === "Others")

  const professions = [
    "Student",
    "Architect",
    "Teacher",
    "Digital Marketer",
    "Chef",
    "Content Writer",
    "Pharmacist",
    "Doctor",
    "UX/UI Designer",
    "Civil Engineer",
    "Manager",
    "Educational Consultant",
    "Lawyer",
    "Entrepreneur",
    "Others",
  ]

  const handleProfessionChange = (value: string) => {
    updateFormData({ profession: value })
    setShowOtherProfession(value === "Others")
  }

  return (
    <div className="space-y-6">
      <div className="bg-purple-100 rounded-2xl p-4 mb-6">
        <h2 className="text-xl font-semibold text-purple-800 flex items-center gap-2 mb-2">
          <User className="text-purple-600" />
          Personal Information
        </h2>
        <p className="text-purple-700 text-sm">Let's start with some basic information about you.</p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="gender" className="text-gray-700 font-medium">
            Gender
          </Label>
          <RadioGroup
            id="gender"
            value={formData.gender}
            onValueChange={(value) => updateFormData({ gender: value })}
            className="flex gap-4 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Male" id="male" className="text-purple-600" />
              <Label htmlFor="male" className="cursor-pointer">
                Male
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Female" id="female" className="text-purple-600" />
              <Label htmlFor="female" className="cursor-pointer">
                Female
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="age" className="text-gray-700 font-medium">
            Age
          </Label>
          <Input
            id="age"
            type="number"
            min="1"
            max="100"
            value={formData.age}
            onChange={(e) => updateFormData({ age: e.target.value })}
            className="mt-1 rounded-xl border-gray-300 focus:border-purple-500 focus:ring-purple-500"
            placeholder="Enter your age"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Briefcase className="text-purple-600" size={18} />
            <Label htmlFor="profession" className="text-gray-700 font-medium">
              Profession
            </Label>
          </div>
          <Select value={formData.profession} onValueChange={handleProfessionChange}>
            <SelectTrigger className="w-full rounded-xl border-gray-300">
              <SelectValue placeholder="Select your profession" />
            </SelectTrigger>
            <SelectContent>
              {professions.map((profession) => (
                <SelectItem key={profession} value={profession}>
                  {profession}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {showOtherProfession && (
            <div className="mt-2">
              <Label htmlFor="otherProfession" className="text-gray-700 text-sm">
                Please specify
              </Label>
              <Input
                id="otherProfession"
                value={formData.otherProfession}
                onChange={(e) => updateFormData({ otherProfession: e.target.value })}
                className="mt-1 rounded-xl border-gray-300"
                placeholder="Enter your profession"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
