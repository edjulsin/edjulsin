'use client'

import { Photo } from '@/type/photo'
import Image from 'next/image'
import { Dialog } from 'radix-ui'
import Intersector from './Intersector'

const Screenshots = ({ title, description, images }: { title: string, description: string, images: Photo[] }) =>
    <section>
        <Intersector selectors={['.project-image']} />
        <ul className='flex flex-col gap-y-10 sticky top-0 right-0'>
            {
                images.map(v =>
                    <li
                        className='project-image data-[intersected=true]:unfold-xy'
                        key={v.data.src}
                    >
                        <Dialog.Root>
                            <Dialog.Trigger asChild>
                                <Image
                                    className='size-full object-contain object-center cursor-pointer'
                                    unoptimized={true}
                                    src={v.data}
                                    alt={v.alt}
                                />
                            </Dialog.Trigger>
                            <Dialog.Portal>
                                <Dialog.Overlay className='cursor-pointer z-50 inset-0 fixed bg-neutral-950/80' />
                                <Dialog.Content className='z-60 max-w-[75%] max-h-[75%] size-max fixed flex items-center justify-center top-1/2 left-1/2 -translate-1/2 outline-1 outline-transparent'>
                                    <div className='sr-only'>
                                        <Dialog.Title>{title}</Dialog.Title>
                                        <Dialog.Description>{description}</Dialog.Description>
                                    </div>
                                    <Image
                                        className='size-full object-contain object-center rounded-4xl'
                                        unoptimized={true}
                                        src={v.data}
                                        alt={v.alt}
                                    />
                                </Dialog.Content>
                            </Dialog.Portal>
                        </Dialog.Root>
                    </li>
                )
            }
        </ul>
    </section>

export default Screenshots