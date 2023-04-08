import React from 'react'
import Image from './components/Image'
import Main from './components/Main'
import Footer from './components/Footer'
import './index.css'

export default function App(){
    return (
        <div className='container'>
            <Image />
            <Main />
            <Footer />
        </div>
    )
    }