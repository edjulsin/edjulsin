'use server'

import { Form } from '@/type/form'
import { Resend } from 'resend'
import sanitize from 'sanitize-html'
import { isEmail, isLength } from 'validator'
import crypto from 'crypto';
import { render, toPlainText } from '@react-email/render'
import Email from '@/components/Email'

const smtp = () => new Resend(process.env.RESEND_API_KEY)

const field = (name: string, form: FormData) => {
    const value = form.get(name) ?? ''
    return typeof value === 'string' ? sanitize(value.trim()) : ''
}

export const send = async (form: FormData): Promise<Partial<Form>> => {
    const value = {
        name: field('name', form),
        email: field('email', form),
        message: field('message', form)
    }
    const error = Object.entries({
        name: isLength(value.name, { min: 2, max: 50 }),
        email: isEmail(value.email),
        message: isLength(value.message, { min: 10, max: 1000 })
    }).filter(([ _, v ]) => !v).map(([ k ]) => k)

    if(error.length > 0) {
        const message = {
            name: 'Name must be between 2 to 50 characters.',
            email: 'Email format must be correct.',
            message: 'Message must be between 10 to 1000 chararcters.'
        }
        return Promise.reject(
            Object.fromEntries(
                Object.entries(message).filter(([ k ]) =>
                    error.includes(k)
                )
            )
        )
    } else {
        return render(
            Email(value)
        ).then(
            v => {
                return smtp().emails.send({
                    from: `${value.name} <${process.env.RESEND_EMAIL_SENDER as string}>`, // change this after acquiring domain
                    to: process.env.RESEND_EMAIL_RECEIVER as string,
                    subject: `Contact from ${process.env.NEXT_PUBLIC_SITE_NAME}`,
                    html: v,
                    text: toPlainText(v),
                    replyTo: value.email
                }, {
                    idempotencyKey: crypto
                        .createHash('sha256')
                        .update(`${value.name}${value.email}${value.message}`)
                        .digest('hex')
                }).then(
                    () => Promise.resolve({}),
                    () => Promise.reject({ other: 'Something wrong' })
                )
            },
            () => Promise.reject({ other: 'Something wrong' })
        )
    }
}