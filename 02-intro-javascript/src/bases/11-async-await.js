const getImagen = async() => {

    try {
        const apiKey = '5nWCgBaxLxl9bQZQoetVV9WXUbh7WIJT';
        // el await indica que, el cod se debe esperar a que termine la peticion
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${ apiKey }`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (err) {
        console.err(err);
    }
}

getImagen();



const apiKey = '5nWCgBaxLxl9bQZQoetVV9WXUbh7WIJT';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${ apiKey }`);
peticion
    .then(resp => resp.json())
    .then(({ data }) => {

        const { images } = data;
        const { original } = images;
        const { url } = original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    })
    .catch(console.warn);