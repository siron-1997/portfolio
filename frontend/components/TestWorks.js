
import { fetcher } from "@/utils/strapi"
import { useEffect } from "react"

export default function TestWorks() {
    useEffect(() => {
        const getData = async () => {
            const d = await fetcher('api/works?populate=*')
            setRestaurants(d.data.data)
            console.log(d)
        }
        getData()
    }, [])

    return (
        <h1>test works</h1>
    )
}