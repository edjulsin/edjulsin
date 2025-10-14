
type Field = { error: boolean, value: string }

type Form = {
    sent: boolean,
    token: string,
    name: Field,
    email: Field,
    message: Field,
    server: Field
}

export default Form