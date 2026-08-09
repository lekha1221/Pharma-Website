import { useEffect } from 'react'
import { company } from '../data/company'

export function usePageTitle(title, description) {
  useEffect(() => {
    document.title = title
      ? `${title} | ${company.shortName}`
      : `${company.name} | Quality Pharmaceutical Solutions`

    if (description) {
      let meta = document.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'description')
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', description)
    }
  }, [title, description])
}
