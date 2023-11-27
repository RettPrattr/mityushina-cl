import React from 'react'

const HighlightedText = (props) => {
    const { text } = props
  return (
    <div className="highlightedText highlightedText-1 mb">
            <p
                className=""
                dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  )
}

export default HighlightedText
