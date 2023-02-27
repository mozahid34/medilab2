import React from 'react';

const ButtonComponet = ({children}) => {
    return (
        <div>
            <button className='btn btn-primary'>{children}</button>
        </div>
    );
};

export default ButtonComponet;