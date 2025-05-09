import WellbeingForm from "../components/pages/wellbeing-form"


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-purple-700 mb-2">
          Student Wellbeing Assessment
        </h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          This confidential assessment helps us understand factors affecting student wellbeing. Your responses will help
          us develop better support systems.
        </p>
        <WellbeingForm />
      </div>
    </main>
  )
}
