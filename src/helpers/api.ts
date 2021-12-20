export default class Api {

    static async get( url: string) {

        const response = await fetch( process.env.VUE_APP_API_URL + url);
        return response.json(); // parses JSON response into native JavaScript objects


    }


}

