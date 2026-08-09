import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import Button from '../components/Button'
import { usePageTitle } from '../hooks/usePageTitle'

export default function NotFound() {
  usePageTitle('Page Not Found')

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface px-4 py-16 text-center">
      <Logo size="lg" />
      <h1 className="mt-8 font-display text-3xl font-semibold text-brand-800">Page not found</h1>
      <p className="mt-3 max-w-md text-sm text-muted">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button to="/">Go to Home</Button>
        <Button to="/contact" variant="secondary">
          Contact Us
        </Button>
      </div>
      <p className="mt-6 text-xs text-muted">
        Or browse from the{' '}
        <Link to="/" className="font-medium text-brand-600 hover:underline">
          home page
        </Link>
        .
      </p>
    </div>
  )
}
