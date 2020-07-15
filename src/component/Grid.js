import React from "react";

function Grid(props) {
    const { datos } = props;
    return (
        <>
            {datos.map((element, index) => (
                <span className={`celda tipo-${element}`} key={index}>{element}</span>
            ))}
        </>
    );
}

export default Grid;
