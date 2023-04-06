import React from "react";


const Contact = () => {

    return (
        <div className="contact-container container-fluid d-flex justify-content-center align-items-center">
            <div className="row container d-flex mx-auto justify-content-center align-items-center">
                <div className="col-10 col-md-5 align-self-start">
                    <h2 className="contact-title">Get a demo</h2>
                    <p className="contact-paragraph">Amet tellus cras adipiscing enim eu turpis egestas pretium. At quis risus sed vulputate odio ut.</p>
                </div>
                <div className="col-10 col-md-5">
                    <form className="container">
                        <div className="row gap-1">
                            <input className="border-0 rounded py-2 input-field col-10 col-md-5 my-1" type="text" placeholder="First Name"/>
                            <input className="border-0 rounded py-2 input-field col-10 col-md-5 my-1" type="text" placeholder="Last Name"/>
                        </div>
                        <div className="row gap-1">
                            <input className="border-0 rounded py-2 input-field col-10 col-md-5 my-1" type="email" placeholder="Your Email"/>
                            <input className="border-0 rounded py-2 input-field col-10 col-md-5 my-1" type="text" placeholder="Phone"/><br/>
                        </div>
                        <div className="row py-1 pb-2">
                            <textarea className="border-0 rounded message col-10 col-md-10" placeholder="message"/>
                        </div>
                        <div className="row">
                            <button className="button rounded border-0 col-10 col-md-10" type="button">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;