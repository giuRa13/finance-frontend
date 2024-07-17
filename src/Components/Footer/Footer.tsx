import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <section id='footer' className=' w-full mx-auto p-6 bg-blue2 mt-auto '>
        <div className=' flex items-center justify-center '>
            <a href="https://coindata-search.netlify.app/" target={"_blank"} rel='noreferrer'
            className='text-green flex flex-col items-center justify-center'>
              <p className='text-gray-100'>Want to explore the Cryptocurrency Market too ?</p>
              <p className='hover:underline font-semibold'>https://coindata-search.netlify.app/</p>
            </a>
        </div>
        
    </section>
  )
}

export default Footer