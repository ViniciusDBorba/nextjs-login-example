
const api = () => {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL

    const post = async (url, data) => {

        const getHeaders = new Headers({
            'x-access-token': localStorage.getItem("authToken"),
            'Content-Type': "application/json"
        });

        const json = await fetch(`${BASE_URL}${url}`, {
            method: 'POST',
            headers: getHeaders,
            body: data
        }).then(resp => {
            const json = resp.json()
            return json
        });

        return json
    }

    const get = async (url) => {

        const getHeaders = new Headers({
            'x-access-token': localStorage.getItem("authToken"),
            'Content-Type': "application/json"
        });

        const json = await fetch(`${BASE_URL}${url}`, {
            method: 'GET',
            headers: getHeaders,
        }).then(resp => {
            return resp.json()
        });

        return json
    }

    return {
        login: () => get(`todos/1`),
    }
}

export default api();