import { api } from "../apiBase";

const contact = () => {

    const send = (form: any) => {
        return api.post(`/api/contact`, form);
    }


    return {
        send
    }

}


export default contact;