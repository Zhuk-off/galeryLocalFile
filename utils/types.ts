import { StaticImageData } from "next/image"

/* eslint-disable no-unused-vars */
export interface ImageProps {
  id: number
  height: string
  width: string
  blurDataUrl?: string
  img?:StaticImageData
}

export interface SharedModalProps {
  index: number
  images?: ImageProps[]
  currentPhoto?: ImageProps
  changePhotoId: (newVal: number) => void
  closeModal: () => void
  navigation: boolean
  direction?: number
}
