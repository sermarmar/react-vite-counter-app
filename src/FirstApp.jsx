import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name}) => {
    return (
        <>
            <h1>{ title }</h1>
            {/*<code>{JSON.stringify(newMessage)}</code>*/}
            <p>{ subTitle }</p>
            <p>{ name }</p>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

FirstApp.defaultProps = {
    //title: 'No hay título',
    subTitle: 'No  hay subtitulo',
    name: "Sergio Martín"
}