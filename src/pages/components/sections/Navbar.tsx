import { useState } from 'react'
import Button from './Button';
import logo from '/media/Logo.png';
import '../../../assets/css files/App.css'

const navStyle = {
  opacity: .6
  
}
const Nav = () => {
    let Links =[
      {name:"Home",link:"/"},
      {name:"Facility Rentals",link:"/"},
      {name:"Childcare",link:"/"},
      {name:"Around Towne",link:"/"},
      {name:"About",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div style={navStyle} className='shadow-md w-full fixed top-0 left-0'>
      <div className='primary-background md:flex items-center justify-between py-4 md:px-10 px-7'>
      <div className=''>
        <img src={logo} className="App-logo" width={150} alt="logo" />
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static text-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='font-bold hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
      </ul>
        <Button>
          Resident info
        </Button>
      </div>
    </div>
  )
}

export default Nav