import React from 'react'
import Header from '../../../components/header'

const ContactPage = () => {
    return (
        <div>
            <Header />
            <div className="sm:flex items-center max-w-screen-xl">
                <div className="sm:w-1/2 p-10">
                    <div className="image object-center text-center">
                        <img src="https://i.imgur.com/WbQnbas.png" />
                    </div>
                </div>
                <div className="sm:w-1/2 p-5">
                    <div className="text">
                        <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
                            Contact us
                        </span><br /><br />
                        <p className="text-gray-700">
                            We’d love to hear from you! Whether you have questions, suggestions, or just want to say hello, feel free to contact us at mestaoui0yasser@gmail.com.
                            <br />
                            <br />
                            Thank you for choosing Price Tracker to assist you with your online shopping. We look forward to helping you save money and making your shopping experience as enjoyable as possible.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactPage
