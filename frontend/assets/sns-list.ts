type Sns = {
    readonly image: string,
    readonly alt: string,
    readonly link: string
}
type SnsList = readonly Sns[]

const path: string = '/icons/',
      svg: string = '.svg'

export const snsList: SnsList = [
    {
        image: path + 'twitter_sns_48x48' + svg,
        alt: 'twitter',
        link: 'https://twitter.com/Jsiron2029'
    },
    {
        image: path + 'instagram_sns_48x48' + svg,
        alt: 'instagram',
        link: 'https://www.instagram.com/shiron50'
    },
    {
        image: path + 'github_sns_60x60' + svg,
        alt: 'github',
        link: 'https://github.com/siron-1997'
    }
]