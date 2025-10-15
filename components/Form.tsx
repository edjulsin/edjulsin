'use client'

import NextForm from 'next/form'
import { send } from '@/action/server'
import { useActionState } from 'react'
import { FormState } from '@/type/form'

const defaultState = { sent: false, name: '', email: '', message: '', server: '' }

const contact = (state: FormState, form: FormData) =>
    send(form).then(
        () => ({ ...defaultState, sent: true }),
        v => ({ ...defaultState, ...v, sent: false })
    )

const Field = ({ id, children }: { id: string, children: React.ReactNode }) =>
    <fieldset className='flex flex-col gap-y-5'>
        <label htmlFor={ id } className='capitalize sr-only'>
            { id } <span className='text-neutral-500'>*</span>
        </label>
        { children }
    </fieldset>

const Error = ({ message }: { message: string }) =>
    <small className='text-red-500'>* { message }</small>

const Success = ({ message }: { message: string }) =>
    <small className='text-green-500 text-center'>* { message }</small>

const Other = ({ message }: { message: string }) =>
    <small className='text-red-500 text-center'>* { message }</small>

const Form = () => {
    const [ state, action, pending ] = useActionState<FormState, FormData>(contact, {
        sent: false,
        name: '',
        email: '',
        message: '',
        other: ''
    })

    return (
        <NextForm
            action={ action }
            className={ `
                w-full
                max-w-lg
                text-lg/relaxed 
                md:text-xl/relaxed
                xl:text-2xl/relaxed
                flex 
                flex-col
                gap-y-10
                md:gap-y-15
            `}
        >
            <Field id='name'>
                <input
                    className='px-2 py-1 border-b-1 border-b-neutral-800 focus:outline-none focus:border-b-foreground'
                    placeholder='Name'
                    id='name'
                    type='text'
                    name='name'
                    minLength={ 2 }
                    maxLength={ 50 }
                    required
                />
                { state.name ? <Error message={ state.name } /> : null }
            </Field>
            <Field id='email'>
                <input
                    className='px-2 py-1 border-b-1 border-b-neutral-800 focus:outline-none focus:border-b-foreground'
                    placeholder='Email'
                    id='email'
                    type='email'
                    name='email'
                    required
                />
                { state.email ? <Error message={ state.email } /> : null }
            </Field>
            <Field id='message'>
                <textarea
                    className='px-2 py-1 border-b-1 border-b-neutral-800 focus:outline-none focus:border-b-foreground min-h-35'
                    placeholder='Message'
                    id='message'
                    name='message'
                    minLength={ 10 }
                    maxLength={ 1000 }
                    required
                />
                { state.message ? <Error message={ state.message } /> : null }
                <style jsx>
                    { `#message { scrollbar-width: thin; }` }
                </style>
            </Field>
            <button
                className='p-2 uppercase rounded-full outline-1 outline-neutral-500 cursor-pointer hover:bg-foreground hover:text-background disabled:text-neutral-500 disabled:cursor-not-allowed'
                disabled={ pending || state.sent }
            >
                Send
            </button>
            {
                state.sent
                    ? <Success message='Your message has been sent' />
                    : state.other
                        ? <Other message={ state.other } />
                        : null
            }
        </NextForm>
    )
}

export default Form