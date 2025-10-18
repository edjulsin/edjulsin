import Link from 'next/link'

const Page = () =>
    <main>
        <section className='min-h-[80dvh] flex flex-col justify-center items-center text-center'>
            <div>
                <h1 className='text-7xl md:text-8xl xl:text-9xl'>404</h1>
                <br />
                <h2 className='text-neutral-500 text-xl md:text-2xl xl:text-3xl'>This page could not be found.</h2>
                <br />
                <br />
                <br />
                <Link className='text-lg md:text-xl xl:text-2xl' href='/'>Homepage &#8594;</Link>
            </div>
        </section>
    </main>

export default Page