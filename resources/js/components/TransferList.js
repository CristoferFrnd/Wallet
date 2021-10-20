import React from 'react'

const TransferList = ({ transfers }) => {
    return (
        <table className="table">
            <tbody>
                {transfers.map((transfer) => (
                    <tr key={transfer.id} className="text-center">
                        <td>{transfer.description}</td>
                        <td
                            className={transfer.amount > 0 ? 'text-success' : 'text-danger'}
                        >{transfer.amount}</td>
                    </tr>
                ))}

            </tbody>
        </table>
    )
}

export default TransferList;
