import React from 'react'

function Footer() {
  return (
    <footer className="footer p-10 bg-orange-200 text-base">
    <aside>
      <img src="https://th.bing.com/th/id/OIP.s3x79zW0bKRaTfItjRj9KgHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" className='h-40 w-40  rounded-[20px]'/>
      
    </aside> 
    <nav>
      <h6 className="footer-title text-xl">Services</h6> 
      <a className="link link-hover">Branding</a>
      <a className="link link-hover">Design</a>
      <a className="link link-hover">Marketing</a>
      <a className="link link-hover">Advertisement</a>
    </nav> 
    <nav>
      <h6 className="footer-title text-xl">Company</h6> 
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
      <a className="link link-hover">Press kit</a>
    </nav> 
    <nav>
      <h6 className="footer-title text-xl">Legal</h6> 
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
      <a className="link link-hover">Cookie policy</a>
    </nav>
  </footer>
  )
}

export default Footer
