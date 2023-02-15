import { useRouter } from 'next/router'

export default function TestRouter () {
    const router = useRouter()
    const { pid } = router.query

    return (
        <p>TestRouter: {pid}</p>
    )
}