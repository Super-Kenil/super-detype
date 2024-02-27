import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

const ProductPagination = () => {
  return (
    <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 pt-6 md:flex-nowrap md:justify-end">
    <nav>
      <ul className="inline-flex items-center space-x-2 rounded-md text-sm">
        <li>
          <span className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-primary bg-primary text-white">1</span>
        </li>
        <li>
          <span className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-default-100 text-default-800 transition-all duration-500 hover:border-primary hover:bg-primary hover:text-white">2</span>
        </li>
        <li>
          <span className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-default-100 text-default-800 transition-all duration-500 hover:border-primary hover:bg-primary hover:text-white">...</span>
        </li>
        <li>
          <span className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-default-100 text-default-800 transition-all duration-500 hover:border-primary hover:bg-primary hover:text-white">9</span>
        </li>
        <li>
          <span className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-default-100 text-default-800 transition-all duration-500 hover:border-primary hover:bg-primary hover:text-white">10</span>
        </li>
      </ul>
    </nav>
    <nav>
      <ul className="inline-flex items-center space-x-2 rounded-md text-sm">
        <li>
          <span className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-default-100 text-default-800 transition-all duration-500 hover:border-primary hover:bg-primary hover:text-white"><LuChevronLeft size={20} /></span>
        </li>
        <li>
          <span className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-default-100 text-default-800 transition-all duration-500 hover:border-primary hover:bg-primary hover:text-white"><LuChevronRight size={20} /></span>
        </li>
      </ul>
    </nav>
  </div>
  )
}

export default ProductPagination
