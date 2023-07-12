import { useState, useEffect } from 'react'

const useFetch = (url: string, options: RequestInit = {}) => {
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setLoading(true)
        fetch(url, options)
            .then(res => res.json())
            .then(d => {
                setData(d)
                setLoading(false)
            })
            .catch(error => console.log(error))
    }, [url, options])

    return { data, loading }
}

export default useFetch