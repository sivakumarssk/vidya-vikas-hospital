// import drVikramMalhotra from '../assets/figma/doctor-vikram-malhotra.png'
// import drAnanyaSharma from '../assets/figma/doctor-ananya-sharma.png'
// import drRajeshVarma from '../assets/figma/doctor-rajesh-varma.png'
// import drMeeraIyer from '../assets/figma/doctor-meera-iyer.png'
import drbikramadityapadhi from '../assets/figma/docto-bikramaditya-padhi.png'
import drfakirmohansahu from '../assets/figma/doctor-fakir-mohan-sahu.png'
import drsovanhota from '../assets/figma/doctor-sovan-hota.png'
import drsibashishpanigrahi from '../assets/figma/doctor-sibashish-panigrahi.png'
import drdineshkumaragarwal from '../assets/figma/doctor-dinesh-kumar-agarwal.png'
import drsamitakumari from '../assets/figma/doctor-samita-kumari-pallo.png'
import drraviteja from '../assets/figma/doctor-venkata-ravi-teja-badvelli.png'
import drpasalapriyanka from '../assets/figma/doctor-pasala-priyanka.png'
import drbigyankeshari from '../assets/figma/doctor-bigyan-keshari-kapardar.png'
import draswathimenon from '../assets/figma/doctor-aswathi-menon.png'
import drtapankumarkarmakar from '../assets/figma/doctor-tapan-kumar-karmakar.png'
import drrakeshkumar from '../assets/figma/doctor-rakesh-kumar.png'
import drgouraharipradhan from '../assets/figma/doctor-gourahari-pradhan.png'
import drpradeeprajanna from '../assets/figma/doctor-pradeep-rajanna.png'
import drmohammedfaiser from '../assets/figma/doctor-mohammed-faiser.png'
import drjyothijoshi from '../assets/figma/doctor-jyoti-joshi.png'
import dranjankumarpanda from '../assets/figma/doctor-anjan-kumar-panda.png'
import drshobhagininayak from '../assets/figma/doctor-shobhagini-nayak.png'
//import drumapathinaidu from '../assets/figma/doctor-umapathi-naidu.png'
import drrammohan from '../assets/figma/doctor-ram-mohan.png';
import drsweetykumari from '../assets/figma/doctor-Sweety-Kumari .png'
import drshrabanee from '../assets/figma/doxtor-Shrabanee-Nanda.png'


export type DoctorItem = {
  id: string
  name: string
  qualification: string
  speciality: string
  specialCareServices:string,
  designation:string,
  aboutDoctor?: string
  image: string
}

export const doctors: DoctorItem[] = [

  

  // {
  //   id: 'DR.UMAPATHI NAIDU',
  //   name: 'DR.UMAPATHI NAIDU',
  //   qualification: 'MBBS, MHSM, DBA',
  //   speciality: 'Head of Unit',
  //   specialCareServices:'',
  //   designation:'Unit Head-Vaidya Vikash Hospital, Sambalpur',
  //  aboutDoctor:'Dr. Umapathi Naidu is the Unit Head of Vaidya Vikash Hospital, Sambalpur, and a healthcare leader committed to advancing patient-centered medical excellence.',
    
  //   image: drumapathinaidu,
  // },



  {
    id: 'DR.BIKRAMADITYA PADHI',
    name: 'DR.BIKRAMADITYA PADHI',
    qualification: 'MBBS, MD(M.ED), FSCAI(U.S.A)',
    speciality: 'Cardiology',
    specialCareServices:'ANGIOGRAPHY & ANGIOPLASTY, PERIPHENAL VASCULAR STERTING, CARDIAC RESYNCHRONIZATION THERAPY, PACEMAKER & I.C.D IMPLANTATION, P.D.A & A.S.D CLOSURE, CONGENITAL HEART DEFECTS',
    designation:'Cardio Senior Consultant',
   aboutDoctor:'Dr. Bikramaditya Padhi is a Senior Consultant Cardiologist with expertise in interventional cardiology and advanced cardiac care. He specializes in angiography, angioplasty, peripheral vascular stenting, cardiac resynchronization therapy (CRT), pacemaker and ICD implantation, PDA and ASD closure procedures, and the management of congenital heart defects. He holds MBBS and MD (Medicine) degrees and is a Fellow of the Society for Cardiovascular Angiography and Interventions (FSCAI, USA).',
    
    image: drbikramadityapadhi,
  },

    {
   id: 'DR.PASALA PRIYANKA',
    name: 'DR.PASALA PRIYANKA',
    qualification: 'MBBS, MD, DM',
    speciality: 'Neurology',
    specialCareServices:"STOKE, EPILEPSY, MOVEMENT DISORDERS & PARKINSON'S DISEASE, NEUROINFECTIONS, DEMYELINATIG DISORDERS, NERVE & MUSCLE DISORDERS",
designation:'Neurologist Consultant',
   aboutDoctor:'Dr. Pasala Priyanka is a Consultant Neurologist with expertise in diagnosing and managing a wide range of neurological disorders. Her areas of specialization include stroke care, epilepsy management, movement disorders, Parkinson’s disease, neuroinfections, demyelinating disorders, and nerve and muscle diseases. With a patient-centered approach and a strong focus on evidence-based treatment, Dr. Priyanka is dedicated to helping patients achieve better neurological health and an improved quality of life through accurate diagnosis and comprehensive care.',
    
    image: drpasalapriyanka,
  },
  {
    id: 'DR.FAKIR MOHAN SAHU',
    name: 'DR.FAKIR MOHAN SAHU',
    qualification: 'MBBS, MS, M.Ch',
    speciality: 'Neuro Surgery',
    specialCareServices:'BRAIN & SPINE TUMOR, STOKE & PARALYSIS, TRAUMA, HEAD & SPINE INJURY, SPONDYLITIS, SEIZURE & PSYCHIATRIC MNF',
    designation:'Neuro Surgery Consultant',
  aboutDoctor:'Dr. Fakir Mohan Sahu is a Consultant Neurosurgeon specializing in the diagnosis and surgical treatment of complex neurological disorders. His areas of expertise include brain and spine tumors, stroke and paralysis management, head and spine trauma, spinal disorders such as spondylitis, and the treatment of seizure-related neurological conditions. He holds MBBS, MS, and M.Ch qualifications and is committed to providing advanced neurosurgical care with a patient-centered approach.',
    
    image: drfakirmohansahu,
  },

  {
   id: 'DR.BIGYAN KESHARI KAPARDAR',
    name: 'DR.BIGYAN KESHARI KAPARDAR',
    qualification: 'MBBS, MD, BMCRI, DFID, CMC, 4C, ISCCM',
    speciality: 'Medicine',
    specialCareServices:"HYPERTENSION & OBESITY ANEMIA ,METABOLIC DISEASE , DIABEETES, THYROID , JOINT PAIN ,  STROKE MANAGEMENT ,  INFECTIOUS DISEASE , RESPIRATORY CARE , HEART DISEASE ",
designation:'General Physician',
   aboutDoctor:'Dr. Bigyan Keshari Kapardar is a trusted General Physician known for his comprehensive approach to adult healthcare and chronic disease management. He has extensive experience in treating conditions such as hypertension, diabetes, thyroid disorders, obesity, anemia, and other metabolic diseases. His expertise also includes the management of infectious diseases, respiratory illnesses, heart-related conditions, joint pain, and stroke care. With a strong focus on preventive medicine and long-term wellness, Dr. Kapardar works closely with patients to develop personalized treatment plans that promote better health and improve overall quality of life.',
    
    image: drbigyankeshari,
  },
      {
   id: 'DR.GOURAHARI PRADHAN',
    name: 'DR.GOURAHARI PRADHAN',
    qualification: 'MBBS, MD',
    speciality: 'Pulmonary Medicine & Critical Care',
    specialCareServices:'RESPIRATORY CRITICAL CARE, ASTHMA, ALLERGY, COPD, BRONCHIECTASIS, ILD, PNEUMONIAS, CHEST, INFECTIONS, TUBERCULOSIS, SLEEP APNEA, BRONCHOSCOPY & OTHER THORIAC INTERVENTIONS',
designation:' Senior Consultant',
   aboutDoctor:'Dr. Gourahari Pradhan is a Senior Consultant in Pulmonary Medicine and Critical Care, dedicated to the diagnosis and treatment of complex respiratory disorders. He has extensive experience in managing conditions such as asthma, allergies, COPD, bronchiectasis, interstitial lung disease (ILD), pneumonia, chest infections, and tuberculosis. His expertise also includes the evaluation and treatment of sleep apnea, respiratory critical care, and advanced thoracic interventions, including bronchoscopy. With a focus on accurate diagnosis and evidence-based treatment, Dr. Pradhan is committed to helping patients achieve better lung health and improved quality of life.',
    
    image: drgouraharipradhan,
  },
   {
   id: 'DR.PRADEEP RAJANNA',
    name: 'DR.PRADEEP RAJANNA',
    qualification: 'MBBS, MEM(GWU-USA), FEM (RCGP-UK) FCCM',
    speciality: 'Emergency, Medicine',
    specialCareServices:'ADVANCED AIRWAY & VENTILATORY MANAGEMENT, TRAUMA RESUSCIATION, POINT OF CARE, ULTRASOUND & BEDSIDE, PROCEDURES & INTERVENTIONS, ACUTE PAIN, MANAGEMENT & PROCEDURAL SEDATION, INFECTIOUS DISEASE, MANAGEMENT, ACUTE STROKE CARE, CARDIAC EMERGENCIES, TOXICOLOGY & POISON MANAGEMENT, OBSTETRIC & GYNECOLOGICAL, ORTHOPEDIC, EMERGENCIES, INFECTIOUS DISEASE, EMERGENCIES, DISASTER PREPAREDNESS & MASS CASUALTY RESPONSE, ',
designation:'Consultant',
   aboutDoctor:'Dr. Pradeep Rajanna is a Consultant in Emergency Medicine with extensive expertise in managing critically ill patients and medical emergencies. Trained in advanced airway and ventilator management, trauma resuscitation, and point-of-care ultrasound, he plays a pivotal role in delivering rapid and life-saving interventions. His areas of specialization include cardiac emergencies, acute stroke care, sepsis management, toxicology and poison management, infectious disease emergencies, and acute pain management. Dr. Rajanna is also experienced in handling obstetric, gynecological, orthopedic, pediatric, and geriatric emergencies, as well as disaster preparedness and mass casualty response. His commitment to timely decision-making and comprehensive emergency care ensures the highest standards of patient safety and treatment outcomes.',
    
    image: drpradeeprajanna,
  },

  {
   id: 'DR.MOHAMMED FAISER NAZAR',
    name: 'DR.MOHAMMED FAISER NAZAR',
    qualification: 'MBBS, DNB, IDCCM, IAPC',
    speciality: 'Critacal Care Medicine',
    specialCareServices:'SEVERAL SEPSIS WITH SEPTIC SHOCK WITH MULTI ORGAN FAILURE, ARDS, POISONING CASES & DRUG OVERDOSES, NEUROLOGICAL TRAUMA, POST SERGICAL CASES  & COMPLICATIONS, ALL ACUTE RESPIRATORY COMPLICATION, CARDIAC EMERGENCY, AKI & CKD REQURING HD & SLEDD, NEUROLOGICAL CASES (STOKE , BRAIN INFECTION )',
designation:'Consultant',
   aboutDoctor:'Dr. Mohammed Faiser Nazar is a Consultant in Critical Care Medicine with extensive experience in managing life-threatening medical conditions and critically ill patients. His expertise includes the treatment of severe sepsis, septic shock with multi-organ failure, acute respiratory distress syndrome (ARDS), poisoning and drug overdose cases, and complex neurological emergencies. He is also skilled in managing post-surgical complications, acute respiratory failure, cardiac emergencies, and kidney disorders requiring advanced renal support therapies. With a strong focus on evidence-based critical care and multidisciplinary treatment, Dr. Najar is dedicated to providing timely interventions and comprehensive intensive care support to improve patient outcomes in the most challenging clinical situations.',
    
    image: drmohammedfaiser,
  },

    {
    id: 'DR.G.RAM.MOHAN',
    name: 'DR.G.RAM.MOHAN',
    qualification: 'FAMS, FIAGES, FAGI, FAGI(ERCP), FBMS, EFIAGES, FALS(HPB), FALS(BARIATIC)',
    speciality: 'GASTROSURGEON',
    specialCareServices:'HPB (HEPATO - PANCREATO - BILIARY), HERNIA, BARIATIC & METABOLIC SURGERY, HERNIA, OESOPHAGUS, GENITOURINARY  SYSTEM, THYROID, SMALL & LARGE BOWL, GYNC.LAPROSCOPY',
    designation:'SR. GASTROINTESTINAL , BARIATIC & METABOLIC SURGEON , ADVANCE LAPROSCOPIC & ROBIC SURGEON',
   aboutDoctor:'Dr. G. Ram Mohan is a Senior Gastrointestinal, Bariatric, and Metabolic Surgeon with extensive expertise in advanced laparoscopic and robotic surgical procedures.',
    
    image: drrammohan,
  },
  {
    id: 'DR.SOVAN HOTA',
    name: 'DR.SOVAN HOTA',
    qualification: 'MBBS, MS, M.CH',
    speciality: 'Urologist',
    specialCareServices:'THLIUM LASER FOR PROSTATE , KIDNEY STONE & BLADDER TUMOR SURGERIES, ADVANCED LAPROSCOPIC SURGERIES, ADVANCE UROLOGICAL CANCER SURGERIES, ADVANCE ENDOSCOPIC UROLOGICAL SURGERIES, RECONSTRUCTIVE UROLOGY, ANDROLOGY',
  designation:'Consultant',
    aboutDoctor:'Dr. Sovan Hota is a Consultant Urologist with expertise in advanced urological and minimally invasive surgical procedures. He specializes in thulium laser treatment for prostate enlargement, kidney stone management, bladder tumor surgeries, advanced laparoscopic and endoscopic urological surgeries, urological cancer surgeries, reconstructive urology, female urology, and andrology. Holding MBBS, MS, and M.Ch qualifications, Dr. Hota is dedicated to providing comprehensive and patient-focused care for a wide range of urological conditions.',
    image: drsovanhota,
  },
  {
    id: 'DR.SIBASHISH PANIGRAHI',
    name: 'DR.SIBASHISH PANIGRAHI',
    qualification: 'MBBS, MS',
    speciality: 'Orthopaedics',
    specialCareServices:'ALL TYPE OF FRACTURE & TRAUMA CARE, JOINT REPLACEMENT (KNEE,HIP,SHOULDER), SPORTS INJURIES & ARTHROSCOPIC SURGERY, ARTHRITIS & OSTEOPOROSIS TREATMENT, SPINE SURGERY & BACK PAIN MANAGEMENT, PEDIATRIC ORTHOPAEDICS, FOOT & ANKLE SURGERY',
designation:'Orthopedic Surgeon',
   aboutDoctor:'Dr. Sibashish Panigrahi is an Orthopedic Surgeon with expertise in the diagnosis and treatment of musculoskeletal disorders and injuries. He specializes in fracture and trauma care, joint replacement surgeries including knee, hip, and shoulder replacements, sports injury management, and arthroscopic procedures. His areas of interest also include arthritis and osteoporosis treatment, spine surgery, back pain management, pediatric orthopedics, and foot and ankle surgery. Holding MBBS and MS qualifications, Dr. Panigrahi is committed to providing advanced orthopedic care and helping patients regain mobility and improve their quality of life.',
    
    image: drsibashishpanigrahi,
  },

  {
    id: 'DR.DINESH KUMAR AGARWAL',
    name: 'DR.DINESH KUMAR AGARWAL',
    qualification: 'MBBS, MD',
    speciality: 'Paediatrics',
    specialCareServices:'DELIVERY & NEW BORN CARE, PRETERM CARE, MANAGEMENT OF PRETERM BABIES & LBW BABIES, GROWING BABY NUTRITION, NON INVACIVE & INVACIVE VENTILATED BABIES, MANAGEMENT OF CRITICALLY ILL CHILDREN, DEVELOPMENT ASSESSMENT & THERAPY INTUBATION, ICD, UAC/UVC CATHETERIZATION, LP, CENTRAL LINE, DIFFICULT PADIATRICS ASTHMA & ALLERGY CASES',
designation:'Consultant',
   aboutDoctor:'Dr. Dinesh Kumar Agarwal is a dedicated pediatrician with expertise in neonatal and child healthcare. He specializes in the management of newborns, preterm infants, and low-birth-weight babies, providing comprehensive care during the most critical stages of early life. His areas of interest include neonatal intensive care, pediatric nutrition, developmental assessment, and the treatment of childhood respiratory conditions such as asthma. With proficiency in advanced neonatal procedures including intubation, UAC/UVC catheterization, PICC line insertion, and central line management, Dr. Agarwal is committed to delivering compassionate, high-quality care to support the healthy growth and development of every child.',
    
    image: drdineshkumaragarwal,
  },
{
   id: 'DR.SAMITA KUMARI PALLO',
    name: 'DR.SAMITA KUMARI PALLO',
    qualification: 'MBBS, MS',
    speciality: 'Obstetrics & Gynaecology',
    specialCareServices:'COMPLETE OBSTERICS CARE, HIGH RISK PREGNANCY, GYNECOLOGICAL PROCEDURES, OBSTERICS & GYNECOLOGICAL ULTRASOUND, INFERTILITY SERVICES',
designation:'Gynecologist',
   aboutDoctor:'Dr. Samita Kumari Pallo is an experienced Obstetrician and Gynecologist dedicated to providing comprehensive healthcare for women at every stage of life. She specializes in complete obstetric care, including the management of high-risk pregnancies, ensuring the safety and well-being of both mother and baby. Her expertise also includes a wide range of gynecological procedures, obstetric and gynecological ultrasound services, and infertility evaluation and treatment. Known for her compassionate approach and patient-centered care, Dr. Pallo strives to support women through their reproductive health journey with confidence and comfort.',
    
    image: drsamitakumari,
  },

  {
   id: 'DR.VENKATA RAVI TEJA BADVELLI',
    name: 'DR.VENKATA RAVI TEJA BADVELLI',
    qualification: 'MBBS, MD',
    speciality: 'RadioDiagnosis',
    specialCareServices:'Abdominal Radiology, Doppler, Ultrasonography, Musculoskeletal MRI, Fetal Imaging',
designation:'Radiologists',
   aboutDoctor:'Dr. Venkata Ravi Teja Badvelli is a skilled Radiologist with expertise in advanced diagnostic imaging and image-based disease evaluation. He has a special interest in abdominal radiology, Doppler ultrasonography, musculoskeletal MRI, and fetal imaging, helping clinicians make accurate and timely diagnoses. By combining technical precision with a thorough understanding of imaging techniques, Dr. Teja plays a vital role in the early detection, assessment, and monitoring of a wide range of medical conditions, ensuring high-quality diagnostic care for patients.',
    
    image: drraviteja,
  },




   {
   id: 'DR.ASWATHI MENON K',
    name: 'DR.ASWATHI MENON K',
    qualification: 'MBBS, MS, DNB',
    speciality: 'Laproscopic & General Surgery',
    specialCareServices:'SPECIAL IN ABDOMINAL & SOFT TISSUE SURGERIES, LAPROSCOPIC SURGERIES, REMOVE GALLBLADDER , APPENDIX , TUMORS & CYSTS, BARIATRIC SURGER, ENDOSCOPIC PROCEDURES, HANDLE THYROID & BREAST SURGERIES, MANAGE ANORECTAL DISEASES',
designation:'General Surgeon',
   aboutDoctor:'Dr. Aswathi Menon K is an experienced General and Laparoscopic Surgeon with a special interest in minimally invasive surgical techniques that promote faster recovery and reduced postoperative discomfort. She is skilled in performing abdominal and soft tissue surgeries, laparoscopic procedures, gallbladder and appendix removal, as well as the surgical management of tumors and cysts. Her expertise also extends to bariatric surgery, endoscopic procedures, thyroid and breast surgeries, and the treatment of anorectal disorders. Combining surgical precision with compassionate patient care, Dr. Menon is committed to delivering safe, effective, and personalized treatment for a wide range of surgical conditions.',
    
    image: draswathimenon,
  },

  {
   id: 'DR.TAPAN KUMAR KARMAKAR',
    name: 'DR. TAPAN KUMAR KARMAKAR',
    qualification: 'MBBS, MS',
    speciality: 'General Surgery',
    specialCareServices:'APPENDIX & GALLBLADDER, STONE TREATMENT, HERNIA, PILES, FISSURE & FISTULA, MANAGEMENT, LAPROSCOPIC(KEYHOLE), SURGERY, THYROID & BREAST LUMP SURGERY, TRAUMA & EMERGENCY SURGICAL CARE, TRAUMA & NON-HEALING WOUND TREATMENT',
designation:'General Surgeon',
   aboutDoctor:'Dr. Tapan Kumar Karmakar is a highly experienced General Surgeon with expertise in managing a wide range of surgical conditions. Over the years, he has successfully treated patients requiring appendix and gallbladder surgeries, hernia repair, and the management of piles, fissures, and fistulas. He is also proficient in laparoscopic (keyhole) surgery, offering minimally invasive treatment options that support faster recovery. In addition to thyroid and breast lump surgeries, Dr. Karmakar has extensive experience in trauma care, emergency surgical interventions, and the treatment of non-healing wounds. His commitment to surgical excellence and patient well-being has made him a trusted name in general surgery.',
    
    image: drtapankumarkarmakar,
  },

     {
   id: 'DR.N.RAKESH KUMAR',
    name: 'DR.N.RAKESH KUMAR',
    qualification: 'MBBS, MS',
    speciality: 'Orthopaedics',
    specialCareServices:'COMPLEX TRAUMA, ARTHROPLASTY, ARTHROSCOPY',
designation:'Orthopedic Surgeon',
   aboutDoctor:'Dr. N. Rakesh Kumar is an Orthopedic Surgeon with a strong focus on trauma care and joint preservation. He specializes in the treatment of complex fractures and traumatic musculoskeletal injuries, helping patients regain mobility and function after accidents and severe injuries. His expertise in arthroplasty (joint replacement surgery) and arthroscopy enables him to provide advanced surgical solutions for joint disorders, sports injuries, and degenerative conditions. Dedicated to delivering personalized orthopedic care, Dr. Rakesh Kumar combines modern surgical techniques with a patient-centric approach to achieve the best possible outcomes.',
    
    image: drrakeshkumar,
  },

  

   {
   id: 'DR.SHOBHAGINI NAYAK',
    name: 'DR.SHOBHAGINI NAYAK',
    qualification: 'MBBS, MD',
    speciality: 'Pathologist',
    specialCareServices:'ALL BIOCHEMICAL TEST, ALL BODY FLUIDS, SEMINAL FLUID, SCRAP CYTOLOGY, PAP SMEAR CYTOLOGY, FINE NEEDLE ASPIRATION CYTOLOGY, BIOSPY, ALL TESTS OF HEMATOLOGY, FNAC-FINE NEEDLE ASPIRATION CYTOLOGY',
designation:' Senior Consultant',
   
    aboutDoctor:'Dr. Shobhagini Nayak is a Senior Consultant Pathologist with extensive experience in laboratory diagnostics and disease evaluation. She specializes in a broad spectrum of pathological investigations, including biochemical testing, hematology, cytology, and histopathology. Her expertise encompasses Pap smear cytology, fine needle aspiration cytology (FNAC), biopsy interpretation, and the analysis of various body fluids, including seminal fluid. Known for her meticulous approach and diagnostic accuracy, Dr. Nayak plays a crucial role in supporting clinicians with reliable laboratory findings that aid in early diagnosis, effective treatment planning, and improved patient outcomes.',
    image: drshobhagininayak,
  },



     {
   id: 'DR.JYOTI JOSHI',
    name: 'DR.JYOTI JOSHI',
    qualification: 'MBBS, DNB',
    speciality: 'Anaesthesia',
    specialCareServices:'ADMINISTRATION OF GENERAL , REGIONAL & MONITORED ANAESTHESIA (MAC), ADVANCE AIRWAY MANAGEMENT , FIBREOPTIC INTUBATION, ULTRASOUND - GUIDED REGIONAL & POST-OPERATIVE PAIN MANAGEMENT BLOCKS, CRITICAL CARE SUPPORT VENTILATOR MANAGEMENT',
designation:'Anaesthetist',
   aboutDoctor:'Dr. Jyoti Joshi is an accomplished Anaesthesiologist with expertise in providing safe and effective anesthesia care across a wide range of surgical procedures. She is skilled in the administration of general anesthesia, regional anesthesia, and monitored anesthesia care (MAC), ensuring patient comfort and safety throughout the perioperative period. Her areas of specialization include advanced airway management, fibreoptic intubation, ultrasound-guided regional blocks, and post-operative pain management. In addition, Dr. Joshi has significant experience in critical care support and ventilator management, playing a vital role in the care of critically ill patients. Her precision, vigilance, and patient-centered approach contribute to optimal surgical and recovery outcomes.',
    
    image: drjyothijoshi,
  },


   {
   id: 'DR.ANJAN KUMAR PANDA',
    name: 'DR.ANJAN KUMAR PANDA',
    qualification: 'MBBS, DNB',
    speciality: 'Anaesthesia',
    specialCareServices:'ADVANCE AIRWAY MANAGEMENT, FIBREOPTIC INTUBATION, REGIONAL ANAESTHESIS TECHNIQUE, USG GUIDED NERVE BLOCKS, MULTIMODAL PAIN MANAGEMENT, ICU & CRITICAL CARE',
designation:'Anaesthetist',
   aboutDoctor:'Dr. Anjan Kumar Panda is a skilled Anaesthesiologist with expertise in perioperative care, advanced airway management, and critical care support. He is proficient in fibreoptic intubation, regional anesthesia techniques, and ultrasound-guided nerve blocks, enabling precise and effective pain control for a wide range of surgical procedures. His special interest in multimodal pain management helps enhance patient comfort and recovery after surgery. In addition to his anesthesia practice, Dr. Panda is actively involved in intensive care and critical care management, ensuring comprehensive support for patients requiring advanced medical monitoring and life-sustaining care.',
    
    image: dranjankumarpanda,
  },


  {
    id: 'DR.SWEETY KUMARI',
    name: 'DR. SWEETY KUMARI',
    qualification: 'MBBS, DGO, MRCOG (London, UK)',
    speciality: 'Obstetrics & Gynaecology',
    specialCareServices: 'MANAGEMENT OF NORMAL AND HIGH-RISK PREGNANCIES, SAFE LABOUR AND DELIVERY MANAGEMENT, COMPREHENSIVE ANTENATAL AND POSTNATAL CARE, PCOS AND PRECONCEPTION MANAGEMENT, MANAGEMENT OF COMPLEX GYNAECOLOGICAL CONDITIONS, INFERTILITY EVALUATION AND MANAGEMENT, RECURRENT PREGNANCY FAILURE MANAGEMENT, OVULATION INDUCTION, IUI (INTRAUTERINE INSEMINATION), IVF (IN VITRO FERTILIZATION), MENSTRUAL DISORDERS, PCOS & MENOPAUSE MANAGEMENT, CONTRACEPTION & PREVENTIVE WOMEN\'S HEALTH',
    designation: 'Chief Consultant Gynaecologist & Medical Superintendent',
    aboutDoctor: 'Dr. Sweety Kumari is a Chief Consultant Gynaecologist and Medical Superintendent with over 22 years of excellence in Obstetrics and Gynaecology. She holds MBBS, DGO, and MRCOG (London, UK) qualifications and specializes in managing normal and high-risk pregnancies, safe labour and delivery, infertility evaluation, ovulation induction, IUI, IVF, and recurrent pregnancy failure. Her expertise also covers PCOS, menstrual disorders, menopause management, and preventive women\'s health, making her a trusted name in comprehensive women\'s healthcare.',
    image: drsweetykumari,
  },

  {
    id: 'DR.SHRABANEE NANDA',
    name: 'DR. SHRABANEE NANDA',
    qualification: 'MDS (OMFS)',
    speciality: 'Oral & Maxillofacial Surgery',
    specialCareServices: 'WISDOM TOOTH & IMPACTED TEETH REMOVAL, JAW SURGERY, FACIAL TRAUMA, CLEFT LIP & PALATE SURGERY, TMJ DISORDERS, ORAL PATHOLOGY, FACIAL DEFORMITY CORRECTION',
    designation: 'Cleft Lip & Palate Surgeon, Maxillofacial Surgeon',
    aboutDoctor: 'Dr. Shrabanee Nanda is a specialist in Oral and Maxillofacial Surgery with expertise in cleft lip and palate surgery and a wide range of maxillofacial procedures. She is skilled in wisdom tooth and impacted teeth removal, jaw surgery, facial trauma management, TMJ disorder treatment, oral pathology, and facial deformity correction. Her commitment to precision surgical care and patient well-being makes her a valuable expert in oral and facial surgical healthcare.',
    image: drshrabanee,
  },
]
