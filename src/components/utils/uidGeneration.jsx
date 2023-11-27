import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function uidGeneration () {
    const key = uuidv4();
    //console.log(key, "KEY")
    return key
}