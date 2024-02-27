import Image from 'next/image'
import Link from 'next/link'
import { LuExternalLink } from 'react-icons/lu'
import type { LandingDemoType } from '@/types/other'

const DemoCard = ({ demo }: { demo: LandingDemoType }) => {
  return (
    <Link href={demo.link} target="_blank">
      <div className="group relative rounded-lg border border-default-100 bg-white text-center shadow-md transition-all duration-500 hover:-translate-y-1 dark:bg-default-100">
        <div className="p-4">
          <div className="relative overflow-hidden rounded-lg ">
            <Image src={demo.image} alt="demo-img" className="w-full rounded-lg border border-default-100" placeholder="blur" />
            <div className="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center  bg-default-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <div className="inline-flex items-center justify-center rounded-full bg-primary py-1.5 pe-2 ps-5 text-center align-middle text-base font-semibold text-white duration-500 hover:bg-primary-600">
                Live Preview{' '}
                <span className="ms-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white bg-white text-primary">
                  <LuExternalLink size={20} />
                </span>
              </div>
            </div>
          </div>
          <h5 className="mt-4 text-center text-lg font-semibold capitalize text-primary-900 dark:text-primary">{demo.name}</h5>
        </div>
      </div>
    </Link>
  )
}

export default DemoCard
