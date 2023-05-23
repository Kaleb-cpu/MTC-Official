import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"


const Button = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
  return (
    <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
    duration-500 '>
      {props.children}
    </button>
  )
}

export default Button