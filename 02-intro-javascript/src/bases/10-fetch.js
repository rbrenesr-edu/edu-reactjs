 const apiKey = '5nWCgBaxLxl9bQZQoetVV9WXUbh7WIJT';

 console.log(apiKey);
 const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${ apiKey }`);
 peticion
     .then(resp => resp.json())
     .then(({ data }) => {

         console.log(data);

         const { url } = data.images.original;
         const img = document.createElement('img');
         img.src = url;
         document.body.append(img);

     })
     .catch(console.warn);