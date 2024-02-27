'use client'
import Image from 'next/image'
import { FilePond, registerPlugin } from 'react-filepond'
import { LuImage, LuUploadCloud } from 'react-icons/lu'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop'
import { burritoBowlImg } from '@/assets/data'

// styles
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginImageCrop)

const EditDishUploader = () => {
  return (
    <div className="rounded-lg border border-default-200 p-6">
      <div className="mb-4 flex h-96 flex-col items-center justify-center rounded-lg border border-default-200 p-6">
        <div className="hidden">
          <div className="mb-4">
            <LuImage size={40} className="fill-primary/10 stroke-primary" />
          </div>
          <h5 className="mb-2 text-base font-medium text-primary">
            <LuUploadCloud className="ms-2 inline-flex" />
            Upload Image
          </h5>
          <p className="mb-2 text-sm text-default-600">Upload a cover image for your product.</p>
          <p className="text-sm text-default-600">
            File Format
            <span className="text-default-800">jpeg, png</span>
            Recommended Size
            <span className="text-default-800">600x600 (1:1)</span>
          </p>
        </div>
        <Image src={burritoBowlImg} alt="burrito" />
      </div>
      <h4 className="mb-4 text-base font-medium text-default-800">Additional Images</h4>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex h-40 flex-col items-center justify-center rounded-lg border border-default-200 p-6">
          <FilePond
            className="h-24 w-24 p-0"
            labelIdle='<div class="lg:mt-4 md:mt-5 sm:mt-6 mt-7">Upload Image</div>'
            imageCropAspectRatio="1:1"
            styleButtonRemoveItemPosition="center bottom"
          />
        </div>
        <div className="flex h-40 flex-col items-center justify-center rounded-lg border border-dashed border-default-200" />
      </div>
    </div>
  )
}

export default EditDishUploader
