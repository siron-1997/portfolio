import { useEffect } from 'react'
import { siteMap } from '@assets/site-map'
import { Container } from '@components/ui'

export default function Header() {
    return (
        <header>
            <Container>
                <div>


                    <div>
                        
                    </div>
                    {siteMap.map((item, i) => (

                    ))}
                </div>
            </Container>
        </header>
    )
}