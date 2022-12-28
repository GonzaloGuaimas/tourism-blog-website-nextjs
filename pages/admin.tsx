import Head from 'next/head'
import styles from '../styles/Admin.module.css'
import { Inter } from '@next/font/google'
import Header from '../components/admin/Header'
import { TabView, TabPanel } from 'primereact/tabview'
import { MainForm } from '../components/admin/MainForm'

// eslint-disable-next-line no-unused-vars
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
          <Head>
            <title>Free Tours Argentina | Admin</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/assets/logoMundo.png" />
          </Head>
          <main className={styles.main}>
            <Header tourName={'Bariloche'} tourlogo={'/assets/blogExample/1.jpg'}/>
            <TabView>
                <TabPanel header="Información Principal">
                    <MainForm/>
                </TabPanel>
                <TabPanel header="Contenido Blog">
                    Content II
                </TabPanel>
                <TabPanel header="Reconocimientos">
                    Content III
                </TabPanel>
            </TabView>
          </main>
        </>
      )
}