import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LandingTemplate from '../src/modules/shared/layout/containers'
import styles from '../styles/Home.module.css'
import NewsSectionContainer from '../src/modules/news/containers/index';

const Home: NextPage = () => {
  return (
    <LandingTemplate>
      <NewsSectionContainer/>
    </LandingTemplate>
  )
}

export default Home
