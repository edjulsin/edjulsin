const info = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

const Item = ({ title, description }: { title: string, description: string }) =>
    <li
        className='flex flex-row-reverse gap-x-20 items-center group text-right'
        data-intersected={ false }
    >
        <h5 className='uppercase text-4xl/tight md:text-6xl/tight xl:text-8xl/tight xl:basis-[55%]'>{ title }</h5>
        <p className='sr-only xl:group-data-[intersected=true]:not-sr-only xl:basis-[30%] text-neutral-500 text-xl'>{ description }</p>
    </li>

const Intro = () =>
    <section className='min-h-[150dvh] xl:min-h-[250dvh] flex flex-col justify-center'>
        <ul className='flex flex-col justify-center gap-y-20 md:gap-y-40 xl:gap-y-60'>
            <Item
                title='frontend'
                description={ info }
            />
            <Item
                title='Responsive design'
                description={ info }
            />
            <Item
                title='Animation & interactivity'
                description={ info }
            />
            <Item
                title='Accessible & SEO'
                description={ info }
            />
            <Item
                title='Readable & testable'
                description={ info }
            />
        </ul>
    </section>

export default Intro