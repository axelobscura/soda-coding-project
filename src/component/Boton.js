import React from "react";

function Boton(props) {
    const { texto, sumar } = props;
    return (
        <>
            <button className="boton" onClick={sumar}>{texto}</button>
        </>
    )
}

export default Boton;