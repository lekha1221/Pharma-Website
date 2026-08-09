import vikashPhoto from '../assets/images/leadership/vikash.png'
import manojPhoto from '../assets/images/leadership/manoj.png'

/**
 * Leadership profiles.
 * image: null uses initials placeholder (e.g. Pooja Shukla — no photo provided).
 * Photos: Vikash/Manoj use swapped image files by request.
 */
export const leadership = [
  {
    id: 'vikash',
    name: 'Vikash Kumar Pandey',
    role: 'Director',
    image: manojPhoto,
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
    image: vikashPhoto,
    initials: 'MS',
    bio: [
      'Building healthcare solutions that actually help people',
      'Behind the scenes of running a healthcare company',
      'Business, Health Tips & My Entrepreneur Journey',
    ],
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
