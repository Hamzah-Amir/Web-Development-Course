import React from 'react'
import Script from 'next/script'

const Contact = () => {
    return (

        <div>
            <Script>
                {`alert("Welcome to Contact Page:")`}
            </Script>
            Contact
        </div>
    )
}

export default Contact


export const metadata = {
    title: "Contact Facebook App",
    description: "Contact Facebook You can connect with the world",
};