'use client'
import { useFilterContext } from '@/context'
import { FaStar } from 'react-icons/fa6'

const RatingFilter = () => {
  const { rating, updateRating } = useFilterContext()

  return (
    <>
      {Array.from(new Array(5)).map((_val, idx) => {
        return (
          <div key={idx} className="flex items-center text-sm sm:text-base">
            <input
              className="h-5 w-5 rounded-full border-gray-300 text-primary"
              type="radio"
              name="ratingFilterGroup"
              id={`${idx + 1}_star`}
              defaultChecked={rating == 5 - idx}
              onChange={(e) => updateRating(5 - idx)}
            />
            <label htmlFor={`${idx + 1}_star`} className="flex flex-1 select-none flex-col justify-center ps-2.5 sm:ps-3.5">
              <div className="flex items-center gap-2">
                {Array.from(new Array(5 - idx)).map((_star, i) => (
                  <span key={i}>
                    <FaStar key={idx} size={18} className="fill-yellow-400 text-yellow-400" />
                  </span>
                ))}

                {Array.from(new Array(idx)).map((_star, i) => (
                  <span key={i}>
                    <FaStar key={idx} size={18} className="text-default-400" />
                  </span>
                ))}

                <span>{5 - idx}</span>
              </div>
            </label>
          </div>
        )
      })}
    </>
  )
}

export default RatingFilter
