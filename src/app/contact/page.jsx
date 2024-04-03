import CommonHeroSection from '@/components/common/CommonHeroSection'
import Form from '@/components/contact/Form'
import Join from '@/components/home/Join'
import React from 'react'
export default function Contact() {
  return (
   <>
      <CommonHeroSection 
      title="Get in touch today to find your perfect office space in Mayfair and elevate your business presence in London's prestigious district."/>
      <Form/>
      <Join/>
   </>
  )
}
