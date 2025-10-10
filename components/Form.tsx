'use client'

import NextForm from 'next/form'

const Field = ({ id, children }: { id: string, children: React.ReactNode }) =>
    <fieldset className='flex flex-col'>
        <label htmlFor={ id } className='capitalize sr-only'>{ id } <span className='text-neutral-500'>*</span></label>
        { children }
    </fieldset>


const Form = () => {

    return (
        <NextForm
            action={ () => Promise.resolve() }
            className={ `
                w-full
                max-w-lg
                text-lg/relaxed 
                md:text-xl/relaxed
                xl:text-2xl/relaxed
                flex 
                flex-col 
                gap-y-15
                *:*:last:border-b-1 
                *:*:last:border-b-neutral-800
                *:*:p-2
                *:*:last:focus:outline-none
                *:*:last:focus:border-b-foreground
            `}
        >
            <Field id='name'>
                <input
                    placeholder='Name'
                    id='name'
                    type='text'
                    name='name'
                    minLength={ 2 }
                    maxLength={ 50 }
                    required
                />
            </Field>
            <Field id='email'>
                <input
                    placeholder='Email'
                    id='email'
                    type='email'
                    name='email'
                    required
                />
            </Field>
            <Field id='message'>
                <textarea
                    className='min-h-35'
                    placeholder='Message'
                    id='message'
                    name='message'
                    minLength={ 10 }
                    maxLength={ 1000 }
                    required
                />
                <style jsx>
                    { `#message { scrollbar-width: thin; }` }
                </style>
            </Field>
            <button className='p-2 uppercase rounded-full outline-1 outline-neutral-500 cursor-pointer'>Send</button>
        </NextForm>
    )
}

export default Form