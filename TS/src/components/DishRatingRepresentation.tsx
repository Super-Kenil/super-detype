import { FaStar } from 'react-icons/fa6'

const DishRatingRepresentation = () => {
  return (
    <>
      <h4 className="mb-4 text-xl font-semibold text-default-800">Consumer Ratings</h4>
      <div className="grid items-center gap-5 lg:grid-cols-4">
        <div className="flex flex-col items-center justify-center rounded-lg bg-primary/10 py-8">
          <h1 className="mb-4 text-6xl font-semibold text-default-800">4.7</h1>
          <div className="mb-2 flex gap-1.5">
            <span>
              <FaStar size={18} className="text-yellow-400" />
            </span>
            <span>
              <FaStar size={18} className="text-yellow-400" />
            </span>
            <span>
              <FaStar size={18} className="text-yellow-400" />
            </span>
            <span>
              <FaStar size={18} className="text-yellow-400" />
            </span>
            <span>
              <FaStar size={18} className="text-default-200" />
            </span>
          </div>
          <h4 className="text-base font-medium text-default-700">
            Customer Rating <span className="font-normal text-default-500">(23,476)</span>
          </h4>
        </div>
        <div className="md:col-span-3 xl:col-span-2">
          <div className="mb-3 grid items-center gap-2 md:grid-cols-12">
            <div className="flex gap-1.5 md:col-span-3 lg:justify-center">
              <span>
                <FaStar size={18} className="text-yellow-400" />
              </span>
              <span>
                <FaStar size={18} className="text-yellow-400" />
              </span>
              <span>
                <FaStar size={18} className="text-yellow-400" />
              </span>
              <span>
                <FaStar size={18} className="text-yellow-400" />
              </span>
              <span>
                <FaStar size={18} className="text-yellow-400" />
              </span>
            </div>
            <div className="md:col-span-7">
              <div className="flex h-1 w-full overflow-hidden rounded-full bg-default-200">
                <div
                  className="flex w-4/6 flex-col justify-center overflow-hidden rounded bg-primary"
                  role="progressbar"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h4 className="inline-block text-sm font-medium text-default-700">66%</h4>
              <span className="font-normal text-default-500">(94,532)</span>
            </div>
          </div>
          <div className="mb-3 grid items-center gap-2 md:grid-cols-12">
            <div className="flex gap-1.5 md:col-span-3 lg:justify-center">
              <span>
                <FaStar size={18} className="text-yellow-400" />
              </span>
              <span>
                <FaStar size={18} className="text-yellow-400" />
              </span>
              <span>
                <FaStar size={18} className="text-yellow-400" />
              </span>
              <span>
                <FaStar size={18} className="text-yellow-400" />
              </span>
              <span>
                <FaStar size={18} className="text-default-200" />
              </span>
            </div>
            <div className="md:col-span-7">
              <div className="flex h-1 w-full overflow-hidden rounded-full bg-default-200">
                <div
                  className="flex w-1/4 flex-col justify-center overflow-hidden rounded bg-primary"
                  role="progressbar"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h4 className="inline-block text-sm font-medium text-default-700">25%</h4>
              <span className="font-normal text-default-500">(6,717)</span>
            </div>
          </div>
          <div className="mb-3 grid items-center gap-2 md:grid-cols-12">
            <div className="flex gap-1.5 md:col-span-3 lg:justify-center">
              <span>
                <FaStar size={18} className="text-yellow-400" />
              </span>
              <span>
                <FaStar size={18} className="text-yellow-400" />
              </span>
              <span>
                <FaStar size={18} className="text-yellow-400" />
              </span>
              <span>
                <FaStar size={18} className="text-default-200" />
              </span>
              <span>
                <FaStar size={18} className="text-default-200" />
              </span>
            </div>
            <div className="md:col-span-7">
              <div className="flex h-1 w-full overflow-hidden rounded-full bg-default-200">
                <div
                  className="flex w-2/12 flex-col justify-center overflow-hidden rounded bg-primary"
                  role="progressbar"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h4 className="inline-block text-sm font-medium text-default-700">16%</h4>
              <span className="font-normal text-default-500">(714)</span>
            </div>
          </div>
          <div className="mb-3 grid items-center gap-2 md:grid-cols-12">
            <div className="flex gap-1.5 md:col-span-3 lg:justify-center">
              <span>
                <FaStar size={18} className="text-yellow-400" />
              </span>
              <span>
                <FaStar size={18} className="text-yellow-400" />
              </span>
              <span>
                <FaStar size={18} className="text-default-200" />
              </span>
              <span>
                <FaStar size={18} className="text-default-200" />
              </span>
              <span>
                <FaStar size={18} className="text-default-200" />
              </span>
            </div>
            <div className="md:col-span-7">
              <div className="flex h-1 w-full overflow-hidden rounded-full bg-default-200">
                <div
                  className="flex w-1/12 flex-col justify-center overflow-hidden rounded bg-primary"
                  role="progressbar"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h4 className="inline-block text-sm font-medium text-default-700">8%</h4>
              <span className="font-normal text-default-500">(643)</span>
            </div>
          </div>
          <div className="grid items-center gap-2 md:grid-cols-12">
            <div className="flex gap-1.5 md:col-span-3 lg:justify-center">
              <span>
                <FaStar size={18} className="text-yellow-400" />
              </span>
              <span>
                <FaStar size={18} className="text-default-200" />
              </span>
              <span>
                <FaStar size={18} className="text-default-200" />
              </span>
              <span>
                <FaStar size={18} className="text-default-200" />
              </span>
              <span>
                <FaStar size={18} className="text-default-200" />
              </span>
            </div>
            <div className="md:col-span-7">
              <div className="flex h-1 w-full overflow-hidden rounded-full bg-default-200">
                <div
                  className="flex w-[4%] flex-col justify-center overflow-hidden rounded bg-primary"
                  role="progressbar"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h4 className="inline-block text-sm font-medium text-default-700">4%</h4>
              <span className="font-normal text-default-500">(152)</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DishRatingRepresentation
