import { useState, useEffect } from 'react'

export default function useFetch(url, options = {}) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

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