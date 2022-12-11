import axios, { AxiosError } from "axios";
import { error } from "helpers/notify/error";
import { useMutation } from "react-query";
import { FormData } from "shared/types/apiSchema";

export async function createCheckout(data: FormData) {

    try {
        const response = await axios.post(
            '/api/checkout',
            {
                customer: {
                    name: data.name,
                    lastname: data.lastname,
                    email: data.email,
                    address: {
                        address1: data.address1,
                        address2: data.address2,
                        city: data.city,
                        state: data.state,
                        zipCode: data.zipCode,
                    }
                },
                card: {
                    number: data.number,
                    cvc: data.cvc,
                    expDate: data.expDate,
                    nameOnCard: data.nameOnCard,
                }
            }
        )

        return response;
    } catch (e: any) {

        if (e.response.data.message === "The card doesn't have the require amount to do the transfer") {
            error("Cartão sem saldo");
        }

        if (e.response.data.message === "The card cannot authorize the payment. Please call your bank before try again") {
            error("Pagamento não autorizado");
        }

        if (e.response.data.message === "The address data is invalid. Please review your data and submit it again") {
            error("Endereço invalido, verifique os dados e envie novamente")
        }

        if (e.response.data.message === "The card data is not valid. Please review your data and submit it again") {
            error("Número do cartão invalido, verifique os dados e envie novamente!")
        }


        return Promise.reject(e);
    }
}

export function useCheckout() {
    return useMutation(createCheckout);
}