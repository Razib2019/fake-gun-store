import React from 'react';

const Modal = ({ data, setModalData }) => {
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => setModalData(null)} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <img src={data.img} alt=''></img>
                    <h2 className="card-title pt-3">
                        {data?.name}
                        <div className="badge badge-secondary">{data?.action}</div>
                    </h2>
                    <p className="text-lg font-bold">Bullet: <span className='text-orange-600 font-medium'>{data?.bullet}</span></p>
                    <p className="text-lg font-bold">Category: <span className='text-orange-600 font-medium'>{data?.category}</span></p>
                    <p className="text-lg font-bold">Price: <span className='text-orange-600 font-medium'>${data.price ? data.price : "Data Not Found"}</span></p>
                </div>
            </div>
        </div >
    );
};

export default Modal;