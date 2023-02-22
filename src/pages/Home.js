import React,{useEffect, useState} from 'react'
import NavigationBar from '../Components/navbar'
import FeaturedSection from '../Components/featuredSection'
import HeroSection from '../Components/hero-section'
import CategoriesSection from '../Components/CategoriesSection'

export default function Home() {

      return(
      <>
      <NavigationBar/>
      <HeroSection/>
      <FeaturedSection/>
      <CategoriesSection/>
      </>
      )
    }

