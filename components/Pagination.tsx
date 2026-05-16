import projects from '@/data/projects'
import Link from 'next/link'
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'

const Pagination = ({ index }: { index: number }) => {
    const prev = projects[index - 1] || null
    const next = projects[index + 1] || null
    return (
        <nav className='pt-10'>
            <ul className='uppercase grid grid-cols-2 items-center w-full gap-x-3'>
                {
                    prev ? (
                        <li className='col-start-1 justify-self-start'>
                            <Link href={`/projects/${prev.slug}`} rel='prev' className='flex flex-col justify-center items-start'>
                                <span className='text-neutral-500 font-medium flex items-center gap-x-1'>
                                    <span><ArrowLeftIcon /></span>
                                    <span className='text-sm md:text-base xl:text-lg'>Prev</span>
                                </span>
                                <p className='text-2xl md:text-4xl xl:text-6xl'>{prev.title}</p>
                            </Link>
                        </li>
                    ) : null
                }
                {
                    next ? (
                        <li className='col-start-2 justify-self-end'>
                            <Link href={`/projects/${next.slug}`} rel='next' className='flex flex-col justify-center items-end'>
                                <span className='text-neutral-500 font-medium flex items-center gap-x-1'>
                                    <span className='text-sm md:text-base xl:text-lg'>Next</span>
                                    <span><ArrowRightIcon /></span>
                                </span>
                                <p className='text-2xl md:text-4xl xl:text-6xl'>{next.title}</p>
                            </Link>
                        </li>
                    ) : null
                }
            </ul>
        </nav>
    )
}
export default Pagination