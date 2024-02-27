import Link from 'next/link'
import { LuChevronRight } from 'react-icons/lu'
import type { BreadcrumbProps } from '@/types/other'

const BreadcrumbAdmin = ({ title, subtitle, link }: BreadcrumbProps) => {
  return (
    <div className="flex w-full items-center justify-between">
      <h4 className="text-xl font-medium">{title}</h4>
      <ol aria-label="Breadcrumb" className="hidden min-w-0 items-center gap-2 whitespace-nowrap md:flex">
        <li className="text-sm">
          <Link href={link ?? ''} className="flex items-center gap-2 align-middle text-default-800 transition-all hover:text-primary-500">
            {subtitle}
            <LuChevronRight size={16} />
          </Link>
        </li>
        <li aria-current="page" className="truncate text-sm font-medium text-primary hover:text-primary-500">
          {title}
        </li>
      </ol>
    </div>
  )
}

export default BreadcrumbAdmin
