import { Typography } from '@mui/material'
import s from '@/styles/about/Introduction.module.css'

export default function Introduction({ introductionRef }) {
    return (
        <div ref={introductionRef}>
            <section className={s.profile_text}>
                <Typography component='h1' variant='h1'>About</Typography>
                <Typography component='p' variant='p'>現在はweb関連の業務をメインに2年半ほど前から活動しています。</Typography>
                <Typography component='p' variant='p'>具体的にはフロントエンド周りの実装、3Dコンテンツの実装、レスポンシブデザインの実装などを行っています。</Typography>
                <Typography component='p' variant='p'>web業界に入る前は、大学で芸術を専攻し、インスタレーション、塑像、彫刻などの立体造形を学んでいました。</Typography>
                <Typography component='p' variant='p'>2年間の基礎講義を終え自主課題に取り組み始めるタイミングで3Dデータに興味を持ち、以降は3Dモデリングと3Dプリンターを用いて立体作品の制作にあたりました。</Typography>
            </section>
        </div>
    )
}