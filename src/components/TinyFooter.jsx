import React from 'react';
import Image from 'next/image'

function TinyFooter(props) {

    const { type, text1, text2, text3 } = props

    function currentYear() {
        return new Date().getFullYear();
    }

    if ( type === 1 ) {
        return (
            <footer className='tinyFooter container tinyFooter-1 flex flex-row'>
                <div className="cd3 cm4 flex">
                    <p>© {currentYear()}{text1}</p>
                </div>
                <div className="cd6 cm4 flex justify-center">
                    <a><u>{text2}</u></a>
                </div>
                <div className="cd3 cm4 flex justify-end">
                    <p>{text3}</p>
                </div>
            </footer>
        )
    }
}

export default TinyFooter