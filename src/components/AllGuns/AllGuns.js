import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';

const AllGuns = ({ countIncrease }) => {
    const [guns, setGuns] = useState([]);

    /* const datas = async () => {
        const res = await fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json');
        const data = await res.json();
        setGuns(data);
    } */
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
            .then(res => res.json())
            .then(data => setGuns(data))
        // datas();
    }, []);
    return (
        <div className='mt-5'>
            <div className='my-4'>
                <h1 className='text-4xl text-center font-bold mt-4'>Welcome to Guns Store</h1>
                <p className='text-center font-bold'>Welcome to fake gun store.Here you will get different types of guns all around of the world. You can buy any of this as your choice. Thanks for visiting our shop.</p>
            </div>
            <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    guns.map(gun => <SingleGun
                        gun={gun}
                        key={gun.id}
                        countIncrease={countIncrease}
                    ></SingleGun>)
                }
            </div>
        </div>

    );
};

export default AllGuns;