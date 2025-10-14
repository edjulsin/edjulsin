const Hero = () =>
    <section className='min-h-[80dvh] grid grid-rows-[2fr_1fr_.5fr] *:flex *:flex-col *:justify-center *:items-center'>
        <div>
            <h1 className='uppercase flex flex-col gap-1 md:gap-2 xl:gap-4'>
                <span className='text-5xl md:text-7xl xl:text-9xl'>Frontend</span>
                <span className='text-4xl md:text-6xl xl:text-8xl text-neutral-500'>Developer</span>
            </h1>
        </div>
        <div className='xl:items-end'>
            <div className='flex flex-col gap-y-1 text-center'>
                <h3 className='uppercase font-light text-xl md:text-2xl xl:text-3xl'>Open to work</h3>
                <small className='capitalize text-sm md:text-base xl:text-lg text-neutral-500'>Based in Indonesia 🇮🇩</small>
            </div>
        </div>
        <div className='xl:items-start'>
            <span className='text-2xl md:text-3xl xl:text-4xl font-extralight animate-bounce block'>&#8595;</span>
        </div>
    </section>

export default Hero