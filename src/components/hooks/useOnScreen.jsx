import React, {useState, useEffect, useContext, useMemo} from 'react'

export default function useOnScreen(ref) {

    const [isIntersecting, setIntersecting] = useState(false)
  


    // const observer = new IntersectionObserver()
  
  
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting)
        )
        observer.observe(ref.current)
        //console.log(observer, "ON SCREEN JOOK")
        return () => observer.disconnect()
    }, [])

    return isIntersecting
}
  