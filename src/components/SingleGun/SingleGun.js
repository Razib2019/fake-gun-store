import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const SingleGun = (props) => {
    const [modalData, setModalData] = useState({});
    // console.log(modalData);

    const { gun, countIncrease } = props;
    const { action, img, name } = gun;
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure><img className='w-96 h-72' src={img} alt="gun" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">{action}</div>
                    </h2>
                    <div className="card-actions">
                        <div className='mt-4'>
                            <button onClick={() => countIncrease()} className="btn btn-sm btn-primary mr-2">Add To Cart</button>
                            <label onClick={() => setModalData(gun)} htmlFor="my-modal-3" className="btn modal-button btn-sm">Details</label>
                            {
                                modalData && <Modal data={modalData} setModalData={setModalData}></Modal>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleGun;