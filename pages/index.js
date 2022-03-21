import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../component/Header";
import Footer from '../component/Footer';
import Banner from '../component/Banner';

export default function Home() {
  return (
    <>
   {/* <h1>Hello</h1> */}
   <Header />
   <Banner />
   <Footer/>
  </>
  )
}
