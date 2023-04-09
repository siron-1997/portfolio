import { Layout } from '@/components/layout'
import { Portal } from '@components/home'
import { PageHeader } from '@components/general'
// import { Inter } from '@next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <PageHeader Background={<Portal />}>
        <section>
          <h1>HOME Page</h1>
          <p>test</p>
        </section>
      </PageHeader>
      <h1>Home</h1>
    </Layout>
  )
}
