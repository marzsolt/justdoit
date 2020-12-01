export async function authenticate(accessToken) {
    const response = await fetch(
        "https://afm3v78k7b.execute-api.eu-central-1.amazonaws.com/default/login",
        {
            method: 'POST',
            mode: 'no-cors',
            body: { "token": accessToken },
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    return response; 
}
