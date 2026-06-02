import { PageScaffold } from '../../components/layout/PageScaffold'
import { Container } from '../../components/ui/Container'
import { locations } from '../../data/locations'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

export function BookAppointmentPage() {
  const primaryLocation = locations[0]
  const [formData, setFormData] = useState({
  patientName: '',
  phoneNumber: '',
  email: '',
  preferredLocation: '',
  department: '',
  specialistDoctor: '',
  preferredDate: '',
  preferredTime: '',
  message: ''
})

const today = new Date()

const minDate =
  today.toISOString().split('T')[0]

const getMinTime = () => {

  if (
    formData.preferredDate === minDate
  ) {

    const now = new Date()

    const hours =
      String(now.getHours())
        .padStart(2, '0')

    const minutes =
      String(now.getMinutes())
        .padStart(2, '0')

    return `${hours}:${minutes}`
  }

  return ''
}

const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement |
    HTMLSelectElement |
    HTMLTextAreaElement
  >
) => {

  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
}

const validateForm = () => {

  if (!formData.patientName.trim()) {
    toast.error('Patient name is required')
    return false
  }

  const phoneRegex = /^[0-9]{10}$/

  if (!phoneRegex.test(formData.phoneNumber)) {
    toast.error(
      'Phone number must be exactly 10 digits'
    )
    return false
  }

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(formData.email)) {
    toast.error(
      'Please enter valid email'
    )
    return false
  }

  if (!formData.preferredLocation) {
    toast.error('Select location')
    return false
  }

  if (!formData.department) {
    toast.error('Select department')
    return false
  }

  if (!formData.specialistDoctor) {
    toast.error('Select doctor')
    return false
  }

  if (!formData.preferredDate) {
    toast.error('Select appointment date')
    return false
  }

  if (!formData.preferredTime) {
    toast.error('Select appointment time')
    return false
  }

  return true
}

const handleSubmit = async (
  e: React.FormEvent
) => {

  e.preventDefault()

  const isValid = validateForm()

  if (!isValid) return

  try {

    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/appointments`,
      formData
    )

    toast.success(
      response.data.message
    )

    setFormData({
      patientName: '',
      phoneNumber: '',
      email: '',
      preferredLocation: '',
      department: '',
      specialistDoctor: '',
      preferredDate: '',
      preferredTime: '',
      message: ''
    })

  } catch (error: any) {

    toast.error(
      error.response?.data?.message ||
      'Unable to book appointment'
    )
  }
}

  return (
    <PageScaffold>
      <section className="bg-brand-surface py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-6 lg:col-span-5">
              <p className="inline-flex rounded-full bg-brand-green/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-brand-green">
                Secure Booking
              </p>
              <h1 className="font-heading text-4xl font-extrabold text-brand-navy sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                Your Health Journey
                <span className="block">Starts Here.</span>
              </h1>
              <p className="text-lg text-brand-muted">
                Experience world-class healthcare with our expert specialists. Secure your consultation in less than two
                minutes.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 rounded-xl bg-brand-surface p-4">
                  <div className="grid size-12 place-items-center rounded-full bg-brand-navy text-white">✓</div>
                  <div>
                    <p className="font-heading text-lg font-bold text-brand-navy">Certified Specialists</p>
                    <p className="text-sm text-brand-muted">Access to 50+ board-certified doctors.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl bg-brand-surface p-4">
                  <div className="grid size-12 place-items-center rounded-full bg-brand-green/15 text-brand-green">⏱</div>
                  <div>
                    <p className="font-heading text-lg font-bold text-brand-navy">Instant Confirmation</p>
                    <p className="text-sm text-brand-muted">Real-time scheduling and SMS alerts.</p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img src={primaryLocation.heroImage} alt={`${primaryLocation.name} hospital campus`} className="h-64 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/65 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">{primaryLocation.name} Campus</p>
                  <p className="text-xs opacity-85">{primaryLocation.address}</p>
                  <p className="mt-1 text-xs opacity-85">{primaryLocation.timings}</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-brand-border/20 bg-white p-8 shadow-lg lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
<Field
  label="Patient Name"
  placeholder="John Doe"
  name="patientName"
  value={formData.patientName}
  onChange={handleChange}
/>                
<Field
  label="Phone Number"
  placeholder="+91 98765 43210"
  name="phoneNumber"
  value={formData.phoneNumber}
  onChange={handleChange}
/>             

   </div>
<Field
  label="Email Address"
  placeholder="john@example.com"
  name="email"
  value={formData.email}
  onChange={handleChange}
/>               
 <div className="grid gap-6 sm:grid-cols-2">
<Field
  label="Preferred Location"
  placeholder="Select Location"
  name="preferredLocation"
  value={formData.preferredLocation}
  onChange={handleChange}
/>                 
<Field
  label="Department"
  placeholder="Select Department"
  name="department"
  value={formData.department}
  onChange={handleChange}
/>                </div>

                <div className="grid gap-6 sm:grid-cols-2">
<Field
  label="Specialist Doctor"
  placeholder="Select Doctor"
  name="specialistDoctor"
  value={formData.specialistDoctor}
  onChange={handleChange}
/>                 
<Field
  label="Preferred Date"
  placeholder="mm/dd/yyyy"
  name="preferredDate"
  value={formData.preferredDate}
  onChange={handleChange}
  type="date"
  min={minDate}
/>         
<Field
  label="Preferred Time"
  placeholder="--:-- --"
  name="preferredTime"
  value={formData.preferredTime}
  onChange={handleChange}
  type="time"
    min={getMinTime()}
/>                </div>
                <button  type="submit" className="w-full rounded-2xl bg-brand-navy px-8 py-3.5 font-heading text-lg font-bold text-white shadow-lg">
                  Confirm Appointment
                </button>
                <p className="text-center text-sm text-brand-muted">
                  By clicking confirm, you agree to our hospital policy regarding data privacy and consultation terms.
                </p>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </PageScaffold>
  )
}

function Field({
  label,
  placeholder,
  name,
  value,
  onChange,
  type = "text",
  min
}: {
  label: string
  placeholder: string
  name: string
  value: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void
  type?: string
min?: string
}) {

  return (

    <label className="block text-sm font-semibold text-brand-navy">

      {label}

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        min={min}
        className="mt-2 w-full rounded-xl bg-brand-icon-bg px-4 py-3.5 text-sm text-brand-navy outline-none placeholder:text-brand-muted sm:text-base"
        placeholder={placeholder}
      />

    </label>
  )
}
