import React from "react";


function Button(props) {
    return(
        <a className='rounded-lg bg-blue-600 py-2.5 px-5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600' href= {props.linkinfo.href}>
            {props.linkinfo.name}
        </a>
    )
}



export default Button;