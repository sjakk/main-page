import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Breno is a freelance and a full-stack developer based in Brazil with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. You can contact me at
        
          <a href="https://github.com/sjakk" target="_blank"> GitHub</a>
        
        
        </p>
        <p>
          EN/PT-BR/日本語勉強中
        </p>
         <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
          <Link href={`/posts/${id}`}>
          <a>{title}</a>
          </Link>
         <br />
        <small className={utilStyles.lightText}>
          <Date dateString={date} />
          </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
