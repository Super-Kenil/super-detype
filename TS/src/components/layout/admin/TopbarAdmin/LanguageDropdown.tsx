import { germanyImg, italyImg, russiaImg, spainImg } from '@/assets/data'
import Image, { type StaticImageData } from 'next/image'
import { LuGlobe } from 'react-icons/lu'

type LanguageType = {
  image: StaticImageData
  name: string
}

const languages: LanguageType[] = [
  {
    name: 'German',
    image: germanyImg,
  },
  {
    name: 'Italian',
    image: italyImg,
  },
  {
    name: 'Spanish',
    image: spainImg,
  },
  {
    name: 'Russian',
    image: russiaImg,
  },
]

const LanguageDropdown = () => {
  return (
    <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
      <button
        id="hs-dropdown-with-header"
        type="button"
        className="hs-dropdown-toggle inline-flex h-10 w-10 flex-shrink-0 items-center justify-center gap-2 rounded-full bg-default-100 align-middle text-xs font-medium text-default-700 transition-all hover:text-primary"
      >
        <LuGlobe size={24} />
      </button>
      <div className="hs-dropdown-menu duration mt-2 hidden min-w-[12rem] rounded-lg border border-default-200 bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50">
        {languages.map((language) => (
          <button key={language.name} className="flex w-full items-center gap-x-3.5 rounded px-3 py-2 text-sm transition-all hover:bg-default-100">
            <Image src={language.image} width={24} height={16} alt="user-image" className="h-4" />
            <span className="align-middle">{language.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default LanguageDropdown
