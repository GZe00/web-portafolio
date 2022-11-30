import React from 'react';

import contactApi from "./index"

const useSendEmail = () => {

    const [error, setError] = React.useState("");
    const [loading, setLoading] = React.useState<boolean>(false);

    const sendEmail = (form: any) => {
        return new Promise((resolve, reject) => {
            setLoading(true);
            contactApi().send(form).then((response) => {
                console.log(response)
            }).catch(error => {
                console.log("Este es el error al enviar el formulario de contacto")
                console.log(error)
            }).finally(() => {
                setLoading(false);
            })
        })
    }

    return {
        sendEmail,
        error,
        loading
    }
}

export default useSendEmail
