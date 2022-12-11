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

export const checkoutSchema = Yup.object().shape({
    customer: Yup.object({
      name: Yup.string().required(),
      lastname: Yup.string().required(),
      email: Yup.string().email("O email é invalido").required(),
      address: Yup.object({
        address1: Yup.string().required(),
        address2: Yup.string().nullable().notRequired(),
        city: Yup.string().required(),
        state: Yup.string().required(),
        zipCode: Yup.string().required(),
      }),
    }),
    card: Yup.object({
      number: Yup.string().matches(/[0-9]+\s[0-9]+\s[0-9]+\s[0-9]/, "Formato inválido").min(19).max(19).required(),
      nameOnCard: Yup.string().required(),
      expDate: Yup.string()
        .required()
        .matches(/(0[1-9]|10|11|12)[/](20\d{2})/, "Validade do cartão incorreta")
        .min(
          7,
          "Data de validade deve conter mês com 2 dígitos e ano com 4 dígitos"
        ),
      cvc: Yup.string().max(3).min(3).required(),
    })
  });
export default Yup