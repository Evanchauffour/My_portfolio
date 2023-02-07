import Header from '../../Header/header'

function ProjetPage({props}){

    return(
        <>
        <Header/>
        <h1>{props.value}</h1>
        </>
    )
}

export default ProjetPage