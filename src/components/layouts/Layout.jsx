import React, { useState, useEffect} from 'react';
import Header from '../Header';
import BrandFooter from '../BrandFooter';

export default function Layout({children}) {

    const [headerData, setHeaderData] = useState()
    const [footerData, setFooterData] = useState()

    useEffect(() => {
        (async () => {
            const response = await fetch(`${process.env.API_LINK}/api/layout?populate=deep`)
            const result = await response.json()
            const data = result.data
            setFooterData(data?.attributes?.BrandFooter)
            setHeaderData(data?.attributes?.Header)
          })()
    }, [])

        return (
            <>
                {headerData && <Header
                    data={headerData}
                /> }
                <main>
                    {children}
                </main>
                {footerData && <BrandFooter
                    props={footerData}
                />}
            </>
        )
}