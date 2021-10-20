import React from "react";

const TransferForm = ({ form, onChange, onSubmit }) => {
    return (
        <form action="" className="form-inline justify-content-center" onSubmit={onSubmit}>
            <div className="form-group mb-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Descripción"
                    name="description"
                    value={form.description}
                    onChange={onChange} />
            </div>
            <div className="form-group mx-sm-2 mb-2">
                <div className="input-group-prepend">
                    <div className="input-group-text">$</div>
                </div>
                <input
                    type="text"
                    className="form-control"
                    name="amount"
                    onChange={onChange}
                    value={form.amount}
                />

            </div>
            <button className="btn btn-primary mb2">
                Add
            </button>
        </form>
    )
}

export default TransferForm;