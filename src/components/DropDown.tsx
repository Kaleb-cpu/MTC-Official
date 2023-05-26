import  { useState } from 'react'
import { Link } from 'react-router-dom'
import AroundTowneItems from './Around-Towne-Items'
import '../assets/css files/dropdown.css'

function DropDown() {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <>
            <section className='drop-section'>
                <ul onClick={handleClick} className={click ? 'drop-menu' : 'dropdown-menu'}>
                    {AroundTowneItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className='menu-items' to={item.path} onClick={() => setClick(false)}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </>
    )
}

export default DropDown;

