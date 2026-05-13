import drVikramMalhotra from '../assets/figma/doctor-vikram-malhotra.png'
import drAnanyaSharma from '../assets/figma/doctor-ananya-sharma.png'
import drRajeshVarma from '../assets/figma/doctor-rajesh-varma.png'
import drMeeraIyer from '../assets/figma/doctor-meera-iyer.png'
import drSameerKhan from '../assets/figma/doctor-sameer-khan.png'
import drPriyaDesai from '../assets/figma/doctor-priya-desai.png'

export type DoctorItem = {
  id: string
  name: string
  qualification: string
  speciality: string
  experience: string
  rating: number
  reviews: number
  image: string
}

export const doctors: DoctorItem[] = [
  {
    id: 'dr-vikram-malhotra',
    name: 'Dr. Vikram Malhotra',
    qualification: 'MBBS, MD, DM - Cardiology',
    speciality: 'Cardiology',
    experience: '15+ Years Exp.',
    rating: 4.9,
    reviews: 120,
    image: drVikramMalhotra,
  },
  {
    id: 'dr-ananya-sharma',
    name: 'Dr. Ananya Sharma',
    qualification: 'MBBS, MS, M.Ch - Neurosurgery',
    speciality: 'Neurology',
    experience: '12+ Years Exp.',
    rating: 4.8,
    reviews: 95,
    image: drAnanyaSharma,
  },
  {
    id: 'dr-rajesh-varma',
    name: 'Dr. Rajesh Varma',
    qualification: 'MBBS, MD - Pediatrics',
    speciality: 'Pediatrics',
    experience: '20+ Years Exp.',
    rating: 5.0,
    reviews: 210,
    image: drRajeshVarma,
  },
  {
    id: 'dr-meera-iyer',
    name: 'Dr. Meera Iyer',
    qualification: 'MBBS, MS - Orthopedics',
    speciality: 'Orthopedics',
    experience: '10+ Years Exp.',
    rating: 4.7,
    reviews: 88,
    image: drMeeraIyer,
  },
  {
    id: 'dr-sameer-khan',
    name: 'Dr. Sameer Khan',
    qualification: 'MBBS, MD - Dermatology',
    speciality: 'Dermatology',
    experience: '8+ Years Exp.',
    rating: 4.9,
    reviews: 142,
    image: drSameerKhan,
  },
  {
    id: 'dr-priya-desai',
    name: 'Dr. Priya Desai',
    qualification: 'MBBS, MS - Surgery',
    speciality: 'General Surgery',
    experience: '18+ Years Exp.',
    rating: 4.8,
    reviews: 160,
    image: drPriyaDesai,
  },
]
