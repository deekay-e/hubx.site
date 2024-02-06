import React from "react"
function anotherButton(props){
    return(
        <a className='inline-block rounded-lg border border-white dark:border-black bg-white dark:bg-black p-3 text-sm font-medium text-blue-500 transition hover:bg-transparent dark:hover:bg-transparent hover:text-blue-900  dark:hover:text-black focus:outline-none focus:ring focus:ring-yellow-400'
        href={props.linkinfo.href}>
            {props.linkinfo.name}
        </a>
    )
    
}
export default anotherButton;