export async function getPexelPhotos() {
    const apiurl = 
    "https://api.pexels.com/v1/search?query=people"
    const config = {
        headers: {
            Authorization: "1vTVBv5h1Slhg3VAWV1BDzBzzu9QJHe6dPj9WK6TlWntvbEsiFwXlS54"
        }
    }

    try {
        const response = await fetch(apiurl, config);
        const data = await response.json();
        return data;
    }  catch (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
    }
}

export default getPexelPhotos ;