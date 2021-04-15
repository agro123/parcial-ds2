import React, { useState } from 'react';
import propTypes from 'prop-types';

export const Calculadora = ({ num1, num2, name }) => {
    const [numeros, setNumeros] = useState({
        numero1: num1,
        numero2: num2,
        nombre: name,
        resultado: '',
        operacion: ''
    })
    const { numero1, numero2, nombre, resultado, operacion } = numeros;

    const sumar = () => {
        setNumeros({
            ...numeros,
            resultado: parseInt(numero1) + parseInt(numero2),
            operacion: "suma"
        })
    }
    const restar = () => {
        setNumeros({
            ...numeros,
            resultado: parseInt(numero1) - parseInt(numero2),
            operacion: "resta"
        })
    }

    const onChange = ({ target }) => {
        setNumeros({
            ...numeros,
            [target.name]: target.value
        })
    }

    return (
        <div className="calculadora">
            <h1>Taller -Ds2</h1>
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
            <p> Señor {nombre} el resultado de la {operacion} es:</p>
            <p className="result">{resultado}</p>
        </div>
    )
}

Calculadora.propTypes = {
    num2: propTypes.number.isRequired,
    num1: propTypes.number.isRequired,
    name: propTypes.string.isRequired
}
