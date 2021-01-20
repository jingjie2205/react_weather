import React from 'react'
import "./style/Table.css"

function Table({ countries }) {
    var nf = new Intl.NumberFormat();
    return (
        <div className="table">
            {countries.map(({Country, TotalConfirmed}) => (
                <tr>
                    <td>{Country}</td>
                    <td>
                        <strong>{nf.format(TotalConfirmed)}</strong>
                    </td>
                </tr>    
            ))}
        </div>
    )
}

export default Table
