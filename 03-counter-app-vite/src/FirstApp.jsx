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
    return (
        <> 
        <h1 data-testid="test-title">{ title }</h1>
        <h2>{ subTitle }</h2>
        <h2>{ subTitle }</h2>
        <h3>{ propTest }</h3>
        </>
    );
}
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
    //subTitle: 'No hay subTitle',
    title: 'No hay titulo',
}