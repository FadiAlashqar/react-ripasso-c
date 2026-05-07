import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const fecthData = async () => {
            try {
                setError(null)
                setLoading(true)
                const response = await fetch(url)
                const obj = await response.json()
                setData(obj)
            } catch (err) {
                setError(err.message || "something went wrong!")
            } finally {
                setLoading(false)
            }
        }

        fecthData()

    }, [url])

    return { data, error, loading }
}

export default useFetch