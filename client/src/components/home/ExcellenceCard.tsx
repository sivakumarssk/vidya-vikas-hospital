import type { ExcellenceCard as ExcellenceCardType } from '../../data/home'
import { Link } from 'react-router-dom'

type Props = {
  card: ExcellenceCardType
}

function ArrowRight({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 12" fill="none" aria-hidden>
      <path
        d="M1 6h10M9 2l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ExcellenceCard({ card }: Props) {
  return (
    <article className="group flex h-full flex-col rounded-[1.75rem] border border-black/[0.04] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-green/10 hover:shadow-xl sm:rounded-[2rem] sm:p-8">
     <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-sm ring-1 ring-[#ececec] transition sm:mb-6 sm:h-28 sm:w-28">
        <img
  src={card.image}
  alt={card.title}
 className="h-16 w-16 object-contain sm:h-20 sm:w-20"
/>
      </div>
      <h3 className="font-heading text-lg font-bold text-brand-navy sm:text-xl">{card.title}</h3>
      <p className="mt-2 flex-1 overflow-hidden text-ellipsis text-sm leading-relaxed text-brand-muted [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] sm:text-[0.9375rem]">
        {card.description}
      </p>
      <Link
        to={`/specialities/${card.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green transition group-hover:gap-2"
      >
        View Department
        <ArrowRight className="size-3.5" />
      </Link>
    </article>
  )
}

// function SpecialityIcon({ icon }: { icon: string }) {
//   if (icon === 'heart') {
//     return (
//       <svg className="size-8 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
//         <path d="M12 20s-7-4.5-9-9a5.2 5.2 0 019-5 5.2 5.2 0 019 5c-2 4.5-9 9-9 9z" />
//       </svg>
//     )
//   }
//   if (icon === 'bone') {
//     return (
//       <svg className="size-8 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
//         <path d="M6 8a2.5 2.5 0 11-3-4l2 2 12 12-2-2a2.5 2.5 0 114 3l-2-2-2 2a2.5 2.5 0 11-3-4l2 2L6 8z" />
//       </svg>
//     )
//   }
//   if (icon === 'brain') {
//     return (
//       <svg className="size-8 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
//         <path d="M9 6a3 3 0 016 0v12a3 3 0 11-6 0V6zM6 9a3 3 0 013 3v3a3 3 0 11-3 3 3 3 0 01-3-3v-3a3 3 0 013-3zm12 0a3 3 0 013 3v3a3 3 0 11-6 0v-3a3 3 0 013-3z" />
//       </svg>
//     )
//   }
//   if (icon === 'stomach') {
//     return (
//       <svg className="size-8 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
//         <path d="M9 4v6c0 3 2 5 5 5h2a4 4 0 110 8H8a5 5 0 01-5-5V9h3" />
//       </svg>
//     )
//   }
//   if (icon === 'women') {
//     return (
//       <svg className="size-8 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
//         <circle cx="12" cy="8" r="4" />
//         <path d="M12 12v8M9 17h6" />
//       </svg>
//     )
//   }
//   return (
//     <svg className="size-8 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
//       <path d="M12 3l8 4v6c0 5-3.5 7.5-8 8-4.5-.5-8-3-8-8V7l8-4z" />
//       <path d="M9.5 12l2 2 3-3" />
//     </svg>
//   )
// }
