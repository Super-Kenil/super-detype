import Image from 'next/image'

type OfferCardType = {
  offerTitle: string
  image: string
  variant: 'cyan' | 'pink' | 'green' | 'yellow'
}

const ManageOfferCard = ({ image, offerTitle, variant }: OfferCardType) => {
  const variantColor =
    variant == 'cyan' ? 'bg-cyan-500/10' : variant == 'pink' ? 'bg-pink-500/10' : variant == 'green' ? 'bg-green-500/10' : 'bg-yellow-500/10'
  return (
    <div className={`${variantColor} rounded-lg p-4`}>
      <div className="flex items-center justify-center">
        <h4 className="max-w-sm shrink text-lg font-medium text-default-950">{offerTitle}</h4>
        <div className="flex grow justify-end">
          <Image src={image} className="h-full max-w-full" alt="bag" />
        </div>
      </div>
    </div>
  )
}

export default ManageOfferCard
