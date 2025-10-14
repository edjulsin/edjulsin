'use client'

import { send } from '@/action/server'
import NextForm from 'next/form'
import { useActionState } from 'react'
import FormType from '@/type/form'

const contact = (state: FormType, form: FormData) =>
    send(form).then(
        v => ({ ...state, ...v }),
        v => ({ ...state, ...v })
    )

const Field = ({ id, children }: { id: string, children: React.ReactNode }) =>
    <fieldset className='flex flex-col gap-y-5'>
        <label htmlFor={ id } className='capitalize sr-only'>
            { id } <span className='text-neutral-500'>*</span>
        </label>
        { children }
    </fieldset>

const Error = ({ message }: { message: string }) => <small className='text-red-500'>* { message }</small>
const Success = ({ message }: { message: string }) => <small className='text-green-500 text-center'>* { message }</small>
const Server = ({ message }: { message: string }) => <small className='text-red-500 text-center'>* { message }</small>

const Form = () => {
    const [ state, action, pending ] = useActionState<FormType, FormData>(contact, {
        token: '',
        sent: false,
        name: { error: false, value: 'Name is wrong' },
        email: { error: false, value: 'Email is wrong' },
        message: { error: false, value: 'Message is wrong' },
        server: { error: false, value: 'Server is wrong' }
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
                { state.name.error ? <Error message={ state.name.value } /> : null }
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
                { state.email.error ? <Error message={ state.email.value } /> : null }
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
                { state.message.error ? <Error message={ state.message.value } /> : null }
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
                    : state.server.error
                        ? <Server message='Server error. Please retry' />
                        : null
            }
        </NextForm>
    )
}

export default Form