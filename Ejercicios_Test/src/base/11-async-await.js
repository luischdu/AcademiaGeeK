export const getImagen = async() => {

    try {

        const apiKey = 'RV7MZTV2p1YH3zkDxMbrp4d8xbLKDjUu';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;
        return url
        
    } catch (error) {
        console.error(error)
        return error
    }
}




