import * as yup from 'yup';

const contactSchema = yup.object({
    full_name: yup.string().required("Nombre es requerido"),
    phone_number: yup.string().required("Número de teléfono es requerido"),
    email: yup.string().email("Formato no válido").required("Correo electrónico es requerido"),
    comment: yup.string()
})

export const formDonations = yup.object({
    name: yup.string().required("Nombre es requerido"),
    surname: yup.string().required("Nombre es requerido"),
    email: yup.string().email("Formato no válido").required("Correo electrónico es requerido"),
})

export {
    contactSchema
}