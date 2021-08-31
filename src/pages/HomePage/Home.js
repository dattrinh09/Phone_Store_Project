import React from 'react'
import { Footer, InfoSection } from '../../components'
import { 
    homeObjOne,  
    homeObjTwo 
} from './Data'

const Home = () => {

    console.log(localStorage.getItem('product'))

    return (
        <>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Footer/>
        </>
    )
}

export default Home
