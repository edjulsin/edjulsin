import type { StaticImageData } from 'next/image'

export type Photo = {
    width: number
    height: number
    data: StaticImageData
    alt: string
}