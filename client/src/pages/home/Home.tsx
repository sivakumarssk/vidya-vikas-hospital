import { AboutSection } from '../../components/home/AboutSection'
import { CentersOfExcellenceSection } from '../../components/home/CentersOfExcellenceSection'
import { HeroSection } from '../../components/home/HeroSection'
import { InsuranceSection } from '../../components/home/InsuranceSection'
import { LocationsSection } from '../../components/home/LocationsSection'
import { QuickActionsSection } from '../../components/home/QuickActionsSection'
import { WhatsNewSection } from '../../components/home/WhatsNewSection'
import { FaqSection } from '../../components/home/FaqSection'
import { PageScaffold } from '../../components/layout/PageScaffold'
import { ScrollReveal } from '../../components/ui/ScrollReveal'
import { FaWhatsapp } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa"
import { useEffect, useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"

export function Home() {
  const [showPopup, setShowPopup] = useState(false)
  const [formData, setFormData] =
  useState({
    fullName: "",
    phoneNumber: ""
  })

  useEffect(() => {
  const timer = setTimeout(() => {
    setShowPopup(true)
  }, 10000)

  return () => clearTimeout(timer)
}, [])

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {

  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
}

const validateForm = () => {

  if (!formData.fullName.trim()) {

    toast.error(
      "Full name is required"
    )

    return false
  }

  const phoneRegex =
    /^[0-9]{10}$/

  if (
    !phoneRegex.test(
      formData.phoneNumber
    )
  ) {

    toast.error(
      "Phone number must be exactly 10 digits"
    )

    return false
  }

  return true
}

const handleSubmit = async (
  e: React.FormEvent
) => {

  e.preventDefault()

  const isValid =
    validateForm()

  if (!isValid) return

  try {

    const response =
      await axios.post(
        "http://localhost:5000/api/enquiries",
        formData
      )

    toast.success(
      response.data.message
    )

    setFormData({
      fullName: "",
      phoneNumber: ""
    })

    setShowPopup(false)

  } catch (error: any) {

    toast.error(
      error.response?.data?.message ||
      "Unable to submit enquiry"
    )
  }
}
  return (
    <>

    {showPopup && (
  <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/50 px-4 pt-24 sm:items-center sm:pt-0">

    <div className="relative w-full max-w-[320px] rounded-2xl bg-white p-2 shadow-2xl sm:max-w-2xl sm:rounded-3xl sm:p-4" >

      {/* Close Button */}
      <button
        onClick={() => setShowPopup(false)}
        className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-2xl font-bold text-white backdrop-blur-sm"
      >
        ×
      </button>

      <div className="grid gap-3 rounded-2xl bg-brand-navy p-4 sm:gap-4 sm:rounded-3xl sm:p-5" >

        {/* Left Content */}
        <div className="text-white">
          <h2 className="text-xl font-bold leading-tight sm:text-3xl">
  Compassionate care. Advanced treatment.
</h2>

<p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-lg">
  Our specialists are here to assist you with expert consultations and seamless healthcare support.
</p>

         <form
  onSubmit={handleSubmit}
  className="mt-8 space-y-4"
>

            <input
  type="text"
  name="fullName"
  value={formData.fullName}
  onChange={handleChange}
  placeholder="Full Name*"
              className="w-full rounded-lg bg-white px-4 py-3 text-sm text-black outline-none sm:rounded-xl sm:px-5 sm:py-4"
            />

          <input
  type="text"
  name="phoneNumber"
  value={formData.phoneNumber}
  onChange={handleChange}
  placeholder="Phone Number*"
             // className="w-full rounded-xl bg-white px-5 py-4 text-black outline-none"
             className="w-full rounded-lg bg-white px-4 py-3 text-sm text-black outline-none sm:rounded-xl sm:px-5 sm:py-4"
            />

            <button type="submit" className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#0B1F66] transition hover:scale-105 sm:px-8 sm:py-3">
              Submit
            </button>

        </form>
        </div>


      </div>

    </div>

  </div>
)}
    <PageScaffold>
      <main>
        <HeroSection />
        <ScrollReveal delayMs={40}>
          <QuickActionsSection />
        </ScrollReveal>
        <ScrollReveal delayMs={70}>
          <CentersOfExcellenceSection />
        </ScrollReveal>
        <ScrollReveal delayMs={90}>
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal delayMs={110}>
          <InsuranceSection />
        </ScrollReveal>
        <ScrollReveal delayMs={130}>
          <WhatsNewSection />
        </ScrollReveal>
        <ScrollReveal delayMs={150}>
          <LocationsSection />
        </ScrollReveal>
        <ScrollReveal delayMs={170}>
          <FaqSection />
        </ScrollReveal>
      </main>

 <a
  href="tel:+919938097999"
className="fixed bottom-32 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white shadow-2xl transition hover:scale-110 hover:bg-blue-600 sm:bottom-44 sm:right-6 sm:h-12 sm:w-12">
   <FaPhoneAlt className="text-lg sm:text-xl" />
</a>

<a
  href="https://wa.me/919938097999?text=Hello%20Vaidya%20Vikash%20Hospital,%20I%20want%20to%20book%20an%20appointment."
  target="_blank"
  rel="noopener noreferrer"
className="fixed bottom-20 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-110 hover:bg-green-600 sm:bottom-30 sm:right-6 sm:h-12 sm:w-12">
   <FaWhatsapp className="text-2xl sm:text-3xl" />
</a>

    </PageScaffold>
    </>
  )
}
