import { Layout } from '@/components/layout'
import { MyProfile, Skills } from '@/components/profile'

export default function Profile() {
    return (
        <Layout>
            <MyProfile />
            <Skills />
        </Layout>
    )
}