import React, { useState } from 'react';
import propTypes from 'prop-types';

export const Calculadora = ({ num1, num2, name }) => {
    const [numeros, setNumeros] = useState({
        numero1: num1,
        numero2: num2,
        nombre: name,
    })
    const { numero1, numero2, nombre } = numeros;

    const sumar = () => {
       alert(`Señor ${nombre} el resultado de la suma es ${parseInt(numero1) + parseInt(numero2)}`) 
    }
    const restar = () => {
        alert(`Señor ${nombre} el resultado de la restae es ${parseInt(numero1) - parseInt(numero2)}`) 
    }
    const onChange = ({ target }) => {
        setNumeros({
            ...numeros,
            [target.name]: target.value
        })
    }

    return (
        <div className="calculadora">
            <input
                className="inputText"
                value={nombre}
                name="nombre"
                type="text"
                placeholder="Ingrese su nombre"
                onChange={onChange}
            />
            <div>
                <input
                    value={numero1}
                    name="numero1"
                    type="number"
                    onChange={onChange}
                />
                <input
                    value={numero2}
                    name="numero2"
                    type="number"
                    onChange={onChange}
                />
            </div>
            <div>
                <button onClick={sumar}>Sumar</button>
                <button onClick={restar}>Restar</button>
            </div>
        </div>
    )
}

Calculadora.propTypes = {
    num2: propTypes.number.isRequired,
    num1: propTypes.number.isRequired,
    name: propTypes.string.isRequired
}
