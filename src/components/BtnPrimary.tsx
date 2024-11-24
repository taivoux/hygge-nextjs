import React from 'react'
import { Button } from './ui/button';

interface BtnPrimaryProps {
    onSubmit: () => void;
}

const BtnPrimary = ({ onSubmit }: BtnPrimaryProps) => {
    return <Button onClick={onSubmit} >Submit Order</Button>
}

export default BtnPrimary