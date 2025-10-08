import Link from 'next/link'

const Contact = () =>
    <section className='min-h-[50dvh] flex flex-col justify-center gap-y-20 xl:flex-row xl:justify-between xl:items-center'>
        <Link href='' className='uppercase text-2xl md:text-4xl xl:text-6xl px-4 py-2 md:px-8 md:py-4 xl:px-16 xl:py-8 outline-1 outline-neutral-500 rounded-full text-center'>Get in touch</Link>
        <Link href='' className='text-lg md:text-2xl xl:text-4xl flex justify-between items-center xl:gap-x-2'>
            <span>Github</span>
            <span>&#8599;</span>
        </Link>
    </section>

export default Contact