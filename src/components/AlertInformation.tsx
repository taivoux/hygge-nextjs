import React from 'react'

interface AlertInformationProps {
    name: string;
}

const AlertInformation = ( {name} : AlertInformationProps ) => {
    return (
        <div className="alert information"> {name} </div>
    )
}

export default AlertInformation