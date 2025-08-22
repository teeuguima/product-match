import React from 'react';

function ResetFormButton({ text, ...props }) {
    return <button type='reset' className={["bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"]}{...props}>{text}</button>;
}

export default ResetFormButton;
