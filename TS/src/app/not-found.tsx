import Image from 'next/image'
import Link from 'next/link'
// import { type Metadata } from "next"
import { error404OtherImg } from '@/assets/data/images'
import { GoBackButton } from '@/components'

/**
 * Uncomment the below metadata when https://github.com/vercel/next.js/issues/45620 gets fixed
 */
// export const metadata: Metadata = {
//   title: 'Not Found',
// }

const Error404 = () => {
  return (
    <section className="py-10">
      {/* 
        Used the below Title as a workout, as there's an open issue in Nextjs regarding metadata not working in not-found page.
        You can track the issue here: https://github.com/vercel/next.js/issues/45620 
      */}
      <title>Not Found | Yum Nextjs - Multipurpose Food Tailwind CSS Template</title>

      <div className="container">
        <div className="flex items-center justify-center">
          <div>
            <div className="mb-10 flex h-full w-full justify-center">
              <Image src={error404OtherImg} width={450} height={450} alt="not-found-image" className="h-full max-w-full" priority />
            </div>
            <div className="max-w-xl text-center">
              <h1 className="mb-4 text-5xl font-semibold text-default-800">Ooops...</h1>
              <h3 className="mb-4 text-2xl font-medium text-default-800">It’s look like you’re lost...</h3>
              <p className="mx-auto mb-8 max-w-xl text-base text-default-600">
                Something went wrong. It’s look that your requested could not be found. It’s look like the link is broken or the page is removed.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <GoBackButton />
                <Link
                  href="/home"
                  className="relative inline-flex w-1/2 items-center justify-center rounded-lg border border-primary px-6 py-3 text-base font-medium capitalize text-primary transition-all hover:bg-primary hover:text-white lg:w-2/6"
                >
                  Go To home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Error404
