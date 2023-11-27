import React from 'react';

function Text(props) {

    const { text } = props 
 
    
    //console.log("TEXT")


        return (
            <div className="text text-1 mb">
                  <p
                      className=""
                      dangerouslySetInnerHTML={{ __html: text }}></p>
              </div>
        )
}

export default Text