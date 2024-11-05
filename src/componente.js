import React, { useState } from 'react';

function Componente(props) {
    const [numero, setNumero] = useState(props.numero);
    return(
        <div>
            <p>
            {numero}
            </p>
            <button className='bg-green-400' onClick={() => {
                if (numero === 9) {
                    setNumero(0)
                } else {
                    setNumero(numero + 1)
                }
            }}>Boton</button>
        </div>
    )
}
export default Componente;