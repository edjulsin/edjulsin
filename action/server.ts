import Form from '@/type/form'

export const send = async (formData: FormData): Promise<Form> =>
    Promise.resolve({ sent: false, token: '', name: { error: false, value: '' }, email: { error: false, value: '' }, message: { error: false, value: '' }, server: { error: false, value: '' } })