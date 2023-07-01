const path = '/icons/'
const svg = '.svg',
      webp = '.webp'


export const introduction = {
    title: 'About',
    description:
    '1997年生まれ大阪出身。現在は3DCGおよびwebフロントエンド開発をメインに活動をしています。\n' +
    '幼少期から物を作ることが好きで芸術、デザイン、インターネット、デジタル技術、航空機、自然に興味関心があり、個人の活動ではコンセプトRC飛行機や気象情報を用いた作品を実験的に制作しています。\n' +
    '2022年に京都精華大学を卒業し、学生時代は専攻していた芸術学部造形学科で人体をモチーフにした塑像をはじめ、ブロンズ鋳造や金属、彫刻、木彫、石彫など素材加工の基礎を学び、観察力や想像力を働かせ作品を表現する取組を行いました。\n' +
    'また学外では休学中に東京のベンチャー企業でweb制作およびデスクトップアプリ開発、2次元図面からの3次元モデル作成を担当させていただきました。\n' +
    'これからの展望としては気象情報と三次元的形状およびAPI技術などを用いた作品制作、webサービスやデスクトップアプリ開発およびUI・UXデザインの設計をメインに活動をしていきたいと考えています。\n'
}

export const profileSkills = [
    {
        title: 'Language & Framework',
        skills: [
            {
                image: path + 'html5_48x48' + svg,
                alt: 'HTML5',
                title: 'HTML5',
                text: '3 year'
            },
            {
                image: path + 'css3_48x48' + svg,
                alt: 'CSS3',
                title: 'CSS3',
                text: '3 year'
            },
            {
                image: path + 'javascript_48x48' + svg,
                alt: 'JavaScript',
                title: 'JavaScript',
                text: '2 ~ 3 year'
            },
            {
                image: path + 'react' + svg,
                alt: 'React',
                title: 'React',
                text: '2 ~ 3 year'
            },
            {
                image: path + 'next_js_100x100' + svg,
                alt: 'Next.js',
                title: 'Next.js',
                text: '2 ~ 3 year'
            },
            {
                image: path + 'three_js' + webp,
                alt: 'Three.js',
                title: 'Three.js',
                text: '2 ~ 3 year'
            },
            {
                image: path + 'node_js_48x48' + svg,
                alt: 'Node.js',
                title: 'Node.js',
                text: '3 month'
            }
        ]
    },
    // {
    //     title: 'Cloud Service',
    //     skills: [
    //         {
    //             image: path + 'aws_48x48' + svg,
    //             alt: 'AWS',
    //             title: 'AWS',
    //             text: '2 month'
    //         }
    //     ]
    // },
    {
        title: 'Development Tool',
        skills: [
            {
                image: path + 'visual_studio_code_48x48' + svg,
                alt: 'VSCode',
                title: 'VSCode',
                text: '3 year'
            },
            {
                image: path + 'github_48x48' + svg,
                alt: 'GitHub',
                title: 'GitHub',
                text: '2 ~ 3 year'
            },
            {
                image: path + 'git_48x48' + svg,
                alt: 'Git',
                title: 'Git',
                text: '2 ~ 3 year'
            },
            {
                image: path + 'blender_48x48' + svg,
                alt: 'Blender',
                title: 'Blender',
                text: '1 year'
            },
            {
                image: path + 'autodesk_fusion360' + svg,
                alt: 'Fusion360',
                title: 'Fusion360',
                text: '4 year'
            },
        ]
    }
]