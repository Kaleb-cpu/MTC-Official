import { useState } from 'react'
import Button from './Button';
import logo from '/media/Logo.png';
import '../../../assets/css files/App.css'
import { Outlet, Link } from "react-router-dom";


const Nav = () => {
    let links =[
      {name:"Home",  to:"/"},
      {name:"Facility Rentals", to:"/FacilityRentals"},
      {name:"Childcare", to:"/Childcare"},
      {name:"Around Towne", to:"/AroundTowne"},
      {name:"About", to:"/About"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='w-full top-0 left-0'>
      <div className='primary-background md:flex items-center justify-between py-4 md:px-10 px-7'>
      <div className=''>
        <img src={logo} className="App-logo" width={150} alt="logo" />
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      {/* <ion-icon name={open ? 'close':'menu'}></ion-icon> */}
      </div>


      <div>
         {links.map(link => (<Link to={link.to} className='pl-5 text-xl text-white'>{link.name}</Link> ))}
      </div>
        <Button>
          Resident info
        </Button>
      </div>
      <Outlet />
    </div>
  )
}

export default Nav