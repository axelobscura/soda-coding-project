import React from "react";

function Grid(props) {
    const { datos } = props;
    return (
        <>
            {datos.map(element => (
                <span className="celda">{element}</span>
            ))}
        </>
    );
}

export default Grid;
