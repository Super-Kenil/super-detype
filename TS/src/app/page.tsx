import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { LuEye, LuShoppingCart } from 'react-icons/lu'
import { demo1Img, logoDarkImg, logoLightImg, offerBgOtherImg } from '@/assets/data/images'
import {
  adminPanelDemosData,
  authDemosData,
  clientAppDemosData,
  extraDemosData,
  frameworksData,
  landingFeaturesData,
  mainDemosData,
} from '@/assets/data/landing'
import { FeatureCard, DemoCard, TopMenu } from '@/components/landing'
const StickyHeader = dynamic(() => import('@/components/StickyHeader'), {
  ssr: false,
})

export default function Home() {
  return (
    <>
      <StickyHeader>
        <div className="flex h-16 items-center">
          <div className="container">
            <nav className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Link href="/">
                  <Image src={logoDarkImg} width={130} height={40} alt="logo" className="flex h-10 dark:hidden" placeholder="blur" priority />
                  <Image src={logoLightImg} width={130} height={40} alt="logo" className="hidden h-10 dark:flex" placeholder="blur" priority />
                </Link>
              </div>

              <TopMenu />

              <div>
                <Link
                  href="#demo"
                  className="inline-flex items-center gap-2.5 rounded bg-primary px-4 py-2 text-center text-sm font-semibold text-white shadow-lg  shadow-transparent transition-all duration-500 ease-in-out hover:-translate-y-[2px] focus:outline-none md:me-0"
                >
                  <LuShoppingCart size={20} /> Order Now
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </StickyHeader>
      <section className="relative bg-gradient-to-t from-orange-600/20 via-orange-600/5 to-orange-600/0 py-6 lg:pb-36 lg:pt-24" id="home">
        <div className="absolute inset-0 " />
        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-10">
            <div className="z-10 self-center lg:col-span-4">
              <div className="text-center lg:text-start">
                <h1 className="text-2xl font-medium capitalize text-primary-950 dark:text-primary-50  md:text-3xl/snug lg:text-4xl/normal">
                  Multipurpose <span className="font-semibold text-primary">Food</span> Client &amp; Admin App with Tailwind
                </h1>
                <p className="mt-5">Discover the ease of having your preferred dishes delivered straight to your door. 🚪</p>
                <Link
                  className="mt-10 inline-flex w-auto items-center gap-2 rounded-full bg-primary px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-primary-200/10"
                  href="#demo"
                >
                  View Demos <LuEye size={20} />
                </Link>
              </div>
            </div>
            <div className="relative flex items-center justify-center lg:col-start-6 lg:col-end-11">
              <Image alt="demo" src={demo1Img} width={728} height={527} className="mx-auto rounded-lg shadow-lg" placeholder="blur" priority />
            </div>
          </div>
          <div className="mt-20 text-center">
            <p className="text-2xl font-medium">Developed Using</p>
            <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-4">
              {frameworksData.map((framework, idx) => (
                <div key={framework.name + idx} className="flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-default-200">
                  <Image src={framework.icon} height={36} width={36} alt={framework.name} className="h-9 w-9" priority />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20" id="demo">
        <div className="container">
          <div className="mx-auto mb-14 text-center">
            <span className="mb-2 inline-flex rounded-full border-x-2 border-x-primary-600 bg-primary-100 px-2 text-base font-semibold  text-primary-700">
              Apps
            </span>
            <h2 className="mb-2.5 text-3xl font-semibold text-default-950">Client &amp; Admin Apps</h2>
            <p className="text-base font-medium text-default-900">
              Empowering Food Business: Seamless Control for Clients, Effortless Management for Admins!
            </p>
          </div>

          <div className="justify-content-center grid grid-cols-1 gap-8 lg:grid-cols-2">
            {mainDemosData.map((demo, idx) => (
              <DemoCard key={idx} demo={demo} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-14 text-center">
            <span className="mb-2 inline-flex rounded-full border-x-2 border-x-primary-600 bg-primary-100 px-2 text-base font-semibold text-primary-700">
              User
            </span>
            <h2 className="mb-2.5 text-3xl font-semibold text-default-950">Client App</h2>
            <p className="text-base font-medium text-default-900">
              Instant Flavor, Effortless Ordering: Your Culinary Journey Starts Here with Our Food Client Web App!
            </p>
          </div>
          <div className="justify-content-center grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {clientAppDemosData.map((demo, idx) => (
              <DemoCard key={idx} demo={demo} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-20" id="admin">
        <div className="container">
          <div className="mx-auto mb-14 text-center">
            <span className="mb-2 inline-flex rounded-full border-x-2 border-x-primary-600 bg-primary-100 px-2 text-base font-semibold  text-primary-700">
              Control
            </span>
            <h2 className="mb-2.5 text-3xl font-semibold text-default-950">Admin Panel</h2>
            <p className="text-base font-medium text-default-900">
              Effortless Kitchen Management: Elevate Your Culinary Business with Our Admin Web App!
            </p>
          </div>

          <div className="justify-content-center grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {adminPanelDemosData.map((demo, idx) => (
              <DemoCard key={idx} demo={demo} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-14 text-center">
            <span className="mb-2 inline-flex rounded-full border-x-2 border-x-primary-600 bg-primary-100 px-2 text-base font-semibold  text-primary-700">
              Security
            </span>
            <h2 className="mb-2.5 text-3xl font-semibold text-default-950">Auth Pages</h2>
            <p className="text-base font-medium text-default-900">
              Well, of course we would provide Authentication pages, which are just right for your App.
            </p>
          </div>

          <div className="justify-content-center grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {authDemosData.map((demo, idx) => (
              <DemoCard key={idx} demo={demo} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-14 text-center">
            <span className="mb-2 inline-flex rounded-full border-x-2 border-x-primary-600 bg-primary-100 px-2 text-base font-semibold  text-primary-700">
              Helper
            </span>
            <h2 className="mb-2.5 text-3xl font-semibold text-default-950">Extra Pages</h2>
            <p className="text-base font-medium text-default-900">
              Beyond Taste: Explore Food Varieties with our Extra Pages Web App – Where Culinary Diversity Meets Innovation!
            </p>
          </div>

          <div className="justify-content-center grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {extraDemosData.map((demo, idx) => (
              <DemoCard key={idx} demo={demo} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-default-50/80 py-20" id="features">
        <div className="container">
          <div className="mx-auto mb-14 text-center">
            <span className="mb-2 inline-flex rounded-full border-x-2 border-x-primary-600 bg-primary-100 px-2 text-base font-semibold  text-primary-700">
              Features
            </span>
            <h2 className="mb-2.5 text-3xl font-semibold text-default-950">Awesome Template Features</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {landingFeaturesData.map((feature, idx) => (
              <FeatureCard key={idx} feature={feature} />
            ))}
          </div>
          <p className="mt-6 text-center text-base font-medium text-primary-900 dark:text-primary">
            All these sounds yummy, right? Wait until you purchase it. 😉
          </p>
        </div>
      </section>
      <footer style={{ backgroundImage: `url(${offerBgOtherImg.src})` }} className="relative">
        <div className="pb-10 pt-20">
          <div className="container relative">
            <div className="text-center">
              <div className="mx-auto mb-12">
                <Link className="flex items-center justify-center" href="">
                  <Image src={logoDarkImg} width={130} height={40} alt="logo" className="flex h-10 dark:hidden" placeholder="blur" priority />
                  <Image src={logoLightImg} width={130} height={40} alt="logo" className="hidden h-10 dark:flex" placeholder="blur" priority />
                </Link>
                <h2 className="my-5 text-xl font-semibold capitalize text-default-900 md:text-3xl">Get Food for yourself</h2>
                <p className="font-semibold text-default-800">
                  Start working with <span className="text-primary">Food </span>
                  to showcase your app to millions of people.
                </p>
              </div>
              <Link
                className="inline-flex items-center gap-2.5 rounded bg-primary px-4 py-2 text-center text-sm font-semibold text-white shadow-lg  shadow-transparent transition-all duration-500 ease-in-out hover:-translate-y-[2px] focus:outline-none md:me-0"
                href=""
              >
                <LuShoppingCart size={20} /> Buy Now
              </Link>
            </div>
          </div>
        </div>
        <div className="container relative">
          <p className="py-6 text-center font-medium text-default-900">
            © Yum. Crafted and Coded with <span className="text-red-500">❤️</span> by{' '}
            <Link className="text-primary-700" href="https://coderthemes.com/" target="_blank">
              Coderthemes
            </Link>
          </p>
        </div>
      </footer>
    </>
  )
}
