import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center space-y-4 my-10'>
      <h1  className=' text-center text-2xl font-bold'>Our Purpose</h1>
      <div  className='flex flex-row space-x-4'  >
        <div className='flex flex-col items-center space-y-2'>
          <h1 className='text-xl font-bold'>Mission</h1>
          <p className='text-center'>Our mission is to provide a platform that helps people manage their finances and make better financial decisions.</p>
        </div>
        <div className='flex flex-col items-center space-y-2'>
          <h1 className='text-xl font-bold'>Vision</h1>
          <p className='text-center'>Our vision is to create a world where everyone has access to the tools and resources they need to achieve financial freedom.</p>
        </div>

          
     
      </div>
      <img src="https://wallpaperaccess.com/full/1104826.jpg" alt="" height={200} width={200}/>
      <div>
        <h1 className="text-2xl font-bold">About Us</h1>
        <p className="mt-4">
        
        </p>
      </div>
    </div>
  )
}

export default About