import vikash from '../assets/images/leadership/vikash.png'
import manoj from '../assets/images/leadership/manoj.png'

/**
 * Leadership profiles.
 * image: null uses initials placeholder (e.g. Pooja Shukla — no photo provided).
 */
export const leadership = [
  {
    id: 'vikash',
    name: 'Vikash Kumar Pandey',
    role: 'Director',
    image: vikash,
    initials: 'VK',
    bio: [
      "Building India's most trusted healthcare ecosystem",
      'On a mission to make quality healthcare affordable & accessible for all',
      'Entrepreneur | Healthcare Leader | Public Health Advocate',
      "We don't just run a company, we build healthier communities",
    ],
  },
  {
    id: 'manoj',
    name: 'Manoj Kumar Shukla',
    role: 'Director',
    image: manoj,
    initials: 'MS',
    bio: [],
  },
  {
    id: 'pooja',
    name: 'Pooja Shukla',
    role: 'Director',
    image: null,
    initials: 'PS',
    bio: ['Healthcare is my profession, seva is my passion'],
  },
]
