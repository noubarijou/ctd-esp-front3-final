import * as Yup from 'yup'

const locale = {
    mixed: {
        default: 'Dados inválidos',
        required: 'Campo obrigatórios',
        notType: 'Dados inválidos',
        oneOf: 'Um dos campos não corresponde',
        max: 'Mínimo de ${max} caracteres nesse campo',
        min: 'Mínimo de ${min} caracteres nesse campo',
       },
    string: {
        email: 'Use um email válido',
        max: 'Mínimo de ${max} caracteres nesse campo',
        min: 'Mínimo de ${min} caracteres nesse campo',
    },
    number: {
        max: 'Mínimo de ${max} caracteres nesse campo',
        min: 'Mínimo de ${min} caracteres nesse campo',
    },
}

Yup.setLocale(locale)

export default Yup