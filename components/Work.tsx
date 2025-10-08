import projects from '@/data/projects'
import Link from 'next/link'

const Work = () =>
    <section className='*:uppercase min-h-[100dvh] flex flex-col justify-center gap-y-15 md:gap-y-30'>
        <h2 className='flex flex-col gap-y-2 md:gap-y-4 xl:gap-y-6'>
            <span className='text-neutral-500 text-3xl md:text-5xl xl:text-7xl'>Selected</span>
            <span className='text-4xl md:text-6xl xl:text-8xl'>Works</span>
        </h2>
        <ul
            className={
                `
                    text-4xl 
                    md:text-6xl 
                    xl:text-8xl 
                    flex 
                    flex-col 
                    justify-center 
                    *:p-5 
                    md:*:p-10 
                    xl:*:p-20 
                    *:border-neutral-800 
                    *:border-t-1 
                    *:last:border-b-1 
                    *:text-neutral-500 
                    *:hover:text-white 
                    *:cursor-pointer 
                    *:transition-colors
                `
            }
        >
            {
                projects.map(v =>
                    <li key={ v.slug }>
                        <Link href={ `projects/${v.slug}` }>{ v.title }</Link>
                    </li>
                )
            }
        </ul>
    </section>

export default Work