// import drVikramMalhotra from '../assets/figma/doctor-vikram-malhotra.png'
// import drAnanyaSharma from '../assets/figma/doctor-ananya-sharma.png'
// import drRajeshVarma from '../assets/figma/doctor-rajesh-varma.png'
// import drMeeraIyer from '../assets/figma/doctor-meera-iyer.png'
import drSameerKhan from '../assets/figma/doctor-sameer-khan.png'
import drPriyaDesai from '../assets/figma/doctor-priya-desai.png'
import drbikramadityapadhi from '../assets/figma/docto-bikramaditya-padhi.png'
import drfakirmohansahu from '../assets/figma/doctor-fakir-mohan-sahu.png'
import drsovanhota from '../assets/figma/doctor-sovan-hota.png'
import drsibashishpanigrahi from '../assets/figma/doctor-sibashish-panigrahi.png'
import drdineshkumaragarwal from '../assets/figma/doctor-dinesh-kumar-agarwal.png'
import drsamitakumari from '../assets/figma/doctor-samita-kumari-pallo.png'
import drraviteja from '../assets/figma/doctor-venkata-raviteja-badvelli.png'
import drpasalapriyanka from '../assets/figma/doctor-pasala-priyanka.png'
import drbigyankeshari from '../assets/figma/doctor-bigyan-keshari-kapardar.png'
import draswathimenon from '../assets/figma/doctor-aswathi-menon.png'
import drtapankumarkarmakar from '../assets/figma/doctor-tapan-kumar-karmakar.png'
import drrakeshkumar from '../assets/figma/doctor-rakesh-kumar.png'
import drgouraharipradhan from '../assets/figma/doctor-gourahari-pradhan.png'
import drpradeeprajanna from '../assets/figma/doctor-pradeep-rajanna.png'
import drmohammedfaiser from '../assets/figma/doctor-mohammed-faiser.png'
import drjyothijoshi from '../assets/figma/doctor-jyothi-joshi.png'
import dranjankumarpanda from '../assets/figma/doctor-anjan-kumar-panda.png'


export type DoctorItem = {
  id: string
  name: string
  qualification: string
  speciality: string
  specialCareServices:string,
  designation:string,
  image: string
}

export const doctors: DoctorItem[] = [
  {
    id: 'DR.BIKRAMADITYA PADHI',
    name: 'DR.BIKRAMADITYA PADHI',
    qualification: 'MBBS, MD(M.ED), FSCAI(U.S.A)',
    speciality: 'Cardiology',
    specialCareServices:'ANGIOGRAPHY & ANGIOPLASTY, PERIPHENAL VASCULAR STERTING, CARDIAC RESYNCHRONIZATION THERAPY, PACEMAKER & I.C.D IMPLANTATION, P.D.A & A.S.D CLOSURE, BYEPASS (BEATING ) HEART SURGERY, VALVA REPLACEMENT, CONGENITAL HEART DEFECTS',
    designation:'Senior Consultant',
   
    
    image: drbikramadityapadhi,
  },
  {
    id: 'DR.FAKIR MOHAN SAHU',
    name: 'DR.FAKIR MOHAN SAHU',
    qualification: 'MBBS, MS, M.Ch',
    speciality: 'Neuro Surgery',
    specialCareServices:'BRAIN & SPINE TUMOR, STOKE & PARALYSIS, TRAUMA, HEAD & SPINE INJURY, SPONDYLITIS, SEIZURE & PSYCHIATRIC MNF',
    designation:'consultant',
  
    
    image: drfakirmohansahu,
  },
  {
    id: 'DR.SOVAN HOTA',
    name: 'DR.SOVAN HOTA',
    qualification: 'MBBS, MS, M.CH',
    speciality: 'Urologist',
    specialCareServices:'THLIUM LASER FOR PROSTATE , KIDNEY STONE & BLADDER TUMOR SURGERIES, ADVANCED LAPROSCOPIC SURGERIES, ADVANCE UROLOGICAL CANCER SURGERIES, ADVANCE ENDOSCOPIC UROLOGICAL SURGERIES, RECONSTRUCTIVE UROLOGY, FEMALE UROLOGY, ANDROLOGY',
  designation:'consultant',
    
    image: drsovanhota,
  },
  {
    id: 'DR.SIBASHISH PANIGRAHI',
    name: 'DR.SIBASHISH PANIGRAHI',
    qualification: 'MBBS, MS',
    speciality: 'Orthopaedics',
    specialCareServices:'ALL TYPE OF FRACTURE & TRAUMA CARE, JOINT REPLACEMENT (KNEE,HIP,SHOULDER), SPORTS INJURIES & ARTHROSCOPIC SURGERY, ARTHRITIS & OSTEOPOROSIS TREATMENT, SPINE SURGERY & BACK PAIN MANAGEMENT, PEDIATRIC ORTHOPAEDICS, FOOT & ANKLE SURGERY',
designation:'consultant',
   
    
    image: drsibashishpanigrahi,
  },

  {
    id: 'DR.DINESH KUMAR AGARWAL',
    name: 'DR.DINESH KUMAR AGARWAL',
    qualification: 'MBBS, MD',
    speciality: 'Paediatrics',
    specialCareServices:'DELIVERY & NEW BORN CARE, PRETERM CARE, MANAGEMENT OF PRETERM BABIES & LBW BABIES, GROWING BABY NUTRITION, NON INVACIVE & INVACIVE VENTILATED BABIES, MANAGEMENT OF CRITICALLY ILL CHILDREN, DEVELOPMENT ASSESSMENT & THERAPY INTUBATION, ICD, uac/uvc CATHETERIZATION, LP, CENTRAL LINE, DIFFICULT PADIATRICS ASTHMA & ALLERGY CASES',
designation:'consultant',
   
    
    image: drdineshkumaragarwal,
  },
{
   id: 'DR.SAMITA KUMARI PALLO',
    name: 'DR.SAMITA KUMARI PALLO',
    qualification: 'MBBS, MS',
    speciality: 'Obsetetrics & Gynaecology',
    specialCareServices:'COMPLETE OBSTERICS CARE, HIGH RISK PREGNANCY, GYNECOLOGICAL PROCEDURES, OBSTERICS & GYNECOLOGICAL ULTRASOUND, INFERTILITY SERVICES',
designation:'consultant',
   
    
    image: drsamitakumari,
  },

  {
   id: 'DR.VENKATA RAVI TEJA BADVELLI',
    name: 'DR.VENKATA RAVI TEJA BADVELLI',
    qualification: 'MBBS, MD',
    speciality: 'RadioDiagnosis',
    specialCareServices:'',
designation:'consultant',
   
    
    image: drraviteja,
  },

   {
   id: 'DR.PASALA PRIYANKA',
    name: 'DR.PASALA PRIYANKA',
    qualification: 'MBBS, MD, DM',
    speciality: 'Neurology',
    specialCareServices:"STOKE, EPILEPSY, MOVEMENT DISORDERS & PARKINSON'S DISEASE, NEUROINFECTIONS, DEMYELINATIG DISORDERS, NERVE & MUSCLE DISORDERS",
designation:'consultant',
   
    
    image: drpasalapriyanka,
  },

  {
   id: 'DR.BIGYAN KESHARI KAPARDAR',
    name: 'DR.BIGYAN KESHARI KAPARDAR',
    qualification: 'MBBS, MD, BMCRI, DFID, CMC, 4C, ISCCM',
    speciality: 'Specialization',
    specialCareServices:"",
designation:'consultant',
   
    
    image: drbigyankeshari,
  },

   {
   id: 'DR.ASWATHI MENON K',
    name: 'DR.ASWATHI MENON K',
    qualification: 'MBBS, MS, DNB',
    speciality: 'Laproscopic & General Surgery',
    specialCareServices:'SPECIAL IN ABDOMINAL & SOFT TISSUE SURGERIES, LAPROSCOPIC SURGERIES, REMOVE GALLBLADDER , APPENDIX , TUMORS & CYSTS, BARIATRIC SURGER, ENDOSCOPIC PROCEDURES, HANDLE THYROID & BREAST SURGERIES, MANAGE ANORECTAL DISEASES',
designation:'consultant',
   
    
    image: draswathimenon,
  },

  {
   id: 'DR.TAPAN KUMAR KARMAKAR',
    name: 'DR. TAPAN KUMAR KARMAKAR',
    qualification: 'MBBS, MS',
    speciality: 'General Surgery',
    specialCareServices:'',
designation:'consultant',
   
    
    image: drtapankumarkarmakar,
  },

    {
   id: 'DR.ANIL KUMAR DEY',
    name: 'DR.ANIL KUMAR DEY',
    qualification: 'MBBS, MD',
    speciality: 'General Medicine & Diabetologist',
    specialCareServices:'',
designation:'consultant',
   
    
    image: drSameerKhan,
  },

     {
   id: 'DR.RAKESH KUMAR',
    name: 'DR.RAKESH KUMAR',
    qualification: 'MBBS, MS',
    speciality: 'Orthopaedics',
    specialCareServices:'',
designation:'consultant',
   
    
    image: drrakeshkumar,
  },

       {
   id: 'DR.GOURAHARI PRADHAN',
    name: 'DR.GOURAHARI PRADHAN',
    qualification: 'MBBS, MD',
    speciality: 'Pulmonary Medicine & Critical Care',
    specialCareServices:'',
designation:' Senior Consultant',
   
    
    image: drgouraharipradhan,
  },

   {
   id: 'DR.SHOBHAGINI NAYAK',
    name: 'DR.SHOBHAGINI NAYAK',
    qualification: 'MBBS, MD',
    speciality: 'Pathologist',
    specialCareServices:'',
designation:' Senior Consultant',
   
    
    image: drPriyaDesai,
  },

  {
   id: 'DR.PRADEEP RAJANNA',
    name: 'DR.PRADEEP RAJANNA',
    qualification: 'MBBS, MEM(GWU-USA), FEM (RCGP-UK) FCCM',
    speciality: 'Emergency, Medicine',
    specialCareServices:'',
designation:'Consultant',
   
    
    image: drpradeeprajanna,
  },

   {
   id: 'DR.MOHAMMED FAISER NAZAR',
    name: 'DR.MAOHAMMED FAISER NAZAR',
    qualification: 'MBBS, DNB, IDCCM, IAPC',
    speciality: 'Critacal Care Medicine',
    specialCareServices:'SEVERAL SEPSIS WITH SEPTIC SHOCK WITH MULTI ORGAN FAILURE, ARDS, POISONING CASES & DRUG OVERDOSES, NEUROLOGICAL TRAUMA, POST  SERGICAL CASES  & COMPLICATIONS, ALL ACUTE RESPIRATORY COMPLICATION, CARDIAC EMERGENCY, AKI & CKD REQURING HD & SLEDD, NEUROLOGICAL CASES (STOKE , BRAIN INFECTION )',
designation:'Consultant',
   
    
    image: drmohammedfaiser,
  },

     {
   id: 'DR.JYOTHI JOSHI',
    name: 'DR.JYOTHI JOSHI',
    qualification: 'MBBS, DNB',
    speciality: 'Anaesthesia',
    specialCareServices:'ADMINISTRATION OF GENERAL , REGIONAL & MONITORED ANAESTHESIA (MAC), ADVANCE AIRWAY MANAGEMENT , FIBREOPTIC INTUBATION, ULTRASOUND - GUIDED REGIONAL & POST-OPERATIVE PAIN MANAGEMENT BLOCKS, CRITICAL CARE SUPPORT VENTILATOR MANAGEMENT',
designation:'Consultant',
   
    
    image: drjyothijoshi,
  },


   {
   id: 'DR.ANJAN KUMAR PANDA',
    name: 'DR.ANJAN KUMAR PANDA',
    qualification: 'MBBS, DNB',
    speciality: 'Anaesthesia',
    specialCareServices:'ADVANCE AIRWAY MANAGEMENT, FIBREOPTIC INTUBATION, REGIONAL ANAESTHESIS TECHNIQUE, USG GUIDED NERVE BLOCKS, MULTIMODAL PAIN MANAGEMENT, ICU & CRITICAL CARE',
designation:'Consultant',
   
    
    image: dranjankumarpanda,
  },

]
