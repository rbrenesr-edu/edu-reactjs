export const fileUpload = async(file) => {

    if(!file) throw new Error('No tenemos archivo por subir.');
    
    const URLClooudinary = 'https://api.cloudinary.com/v1_1/rbrenesr-cloudinary/upload';
    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {

        const resp = await fetch(URLClooudinary,{
            method: 'POST',
            body: formData
        });

        console.log(resp);
        if(!resp.ok) throw new Error('No se pudo cargar el archivo');

        const cloudResp = await resp.json();
                
        return cloudResp.secure_url;

    } catch (error) {
        console.log(error);
        throw new Error( error.message );
    }

}