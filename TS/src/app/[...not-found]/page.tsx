import { notFound } from 'next/navigation'

/**
 * Not Found page keeps reloading infinitely in dev mode,
 * This is the fix to that as per discussion on Nextjs issues
 * https://github.com/vercel/next.js/discussions/40000
 */
const NotFoundCatchAllRoutes = () => notFound()

export default NotFoundCatchAllRoutes
