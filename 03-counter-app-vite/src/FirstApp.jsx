import PropTypes from 'prop-types'

// export function App(){
//     return (<h1>Hola mundo!!</h1>);
// }


/*Se recomienda que las contantes que no cambien de forma frecuente
se declaren fuera del componetFuntion*/
const newMessage = {
    message: 'Hola mundo',
    title:'Rafael'
};

const getNombre = ( newMessage ) => {
    return newMessage.title;
};


export const FirstApp = ( {title, subTitle, propTest} ) => {


    //console.log( props );

    /*
    Al envolver un grupo de elementos entre <> </>, permite utilizar
    de forma implícita el Fragment
    */
    return (
        <> 
        <h1>Rafael Brenes</h1>
        <h1> {/*props.title*/ } </h1>
        <h1> { title} </h1>
        <h2> { subTitle} </h2>
        <h3> { propTest} </h3>

        {/*<h1> { getNombre(newMessage).message } </h1>
        <code> { JSON.stringify(newMessage) } </code>
        <p>Nueva línea de descripción</p>*/}
        </>
    );
}

//export const FirstApp = () => (<div>FirstApp!</div>);



FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    subTitle: 'subTitle',
    //title: 'No hay titulo',
}