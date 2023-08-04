import React from 'react';

const Loading = () => {
    return (
        <div className='h-56  grid   content-evenly justify-items-center w-full'>
            <div className='justify-center items-center'>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        </div>
    );
};

export default Loading;