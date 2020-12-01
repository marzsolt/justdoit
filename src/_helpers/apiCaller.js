export async function authenticate(accessToken) {
    const response = await fetch(
        "https://afm3v78k7b.execute-api.eu-central-1.amazonaws.com/default/login",
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                "token": accessToken
            })
        }
    );
    return response.json();
}
