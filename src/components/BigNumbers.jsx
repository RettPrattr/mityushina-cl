import React from 'react'

const ThreeParams = () => {


    const params = [
        {
            title: '111',
            description: 'Lorem ipsum lorem Lorem ipsum lorem ipsum'
        },
        {
            title: '222',
            description: 'Lorem ipsum lorem Lorem ipsum lorem ipsum'
        },
        {
            title: '333',
            description: 'Lorem ipsum lorem Lorem ipsum lorem ipsum'
        }
    ]

  return (
	<div className='BigNumbers flex flex-row justify-between items-center w-full h-full'>
		{/* <img src="images/PC_Green.jpg" alt="" /> */}
		{params?.map((item, i) => {
			return (
				<div key={i} className={"stat stat flex flex-col"}>
					<h2 className=''>{item.title}</h2>
					<p className='w-full'>{item.description}</p>
				</div>
			)
		})}
	</div>
  )
}

export default ThreeParams