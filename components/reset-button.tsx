import * as React from 'react';

type PropsType = {
    onClick: () => void
}

const ResetButton = ({onClick}: PropsType) => {
    return  <button onClick={onClick} className='cursor-pointer mt-2.5 bg-transparent border border-gray-400 py-1 px-3 rounded'>Reset</button>
};

export default ResetButton;