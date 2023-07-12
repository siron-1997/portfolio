type Navigation = {
    readonly text: string,
    readonly link: string
}
type SiteMap = readonly Navigation[]

export const siteMap: SiteMap = [
    {
        text: 'about',
        link: '/about',
    },
    {
        text: 'works',
        link: '/works',
    },
    {
        text: 'contact',
        link: '/contact',
    }
]