import React from 'react';

function Componente(props) {
    const presupuesto = (props.presupuesto);
    return (
        <div className='border-4 border-green-500/100 m-5 p-3 bg-slate-300 text-slate-700'>
            <p className='text-4xl py-2'>
                Total: {(presupuesto.precio + presupuesto.manoObra) * ((presupuesto.ganancia / 100) + 1)} $
            </p>
            <p className='text-2xl py-2'>
                {presupuesto.materiales}
            </p>
            <button
                className='bg-green-500/100 rounded-xl px-5 py-2 border-2 text-slate-900 border-slate-500 hover:bg-green-200/100 hover:border-green-500/100 hover:text-slate-800'
                onClick={() =>
                    console.log("Mensaje enviado", presupuesto.id_)
                }
            >
                Boton
            </button>
        </div>
    )
}
export default Componente;