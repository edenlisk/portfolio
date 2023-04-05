import React from "react";

const Expertise = () => {

    return (
        <div className="expertise-container container-fluid d-flex justify-content-center align-items-center">
            <div className="row mx-4 d-flex justify-content-center p-0 gy-4">
                <div className="col-9 col-md lh-lg">
                    <h4 className="my-skills py-3 px-3">MY SKILLS</h4>
                    <h1 className="expertise text-white py-3 px-3">Expertise</h1>
                    <p className="skills-paragraph px-3">
                        Two decades of hands-on experience and hundreds of millions in spend have yielded a diverse skillset
                        that touches on most every function. This is a partial list.
                    </p>
                </div>
                <div className="col-9 col-md lh-lg">
                    <ul className="list-unstyled skills">
                        <li className="px-3">— Brand Development & Advertising</li>
                        <li className="px-3">— Direct-Response Marketing</li>
                        <li className="px-3">— Search Marketing: SEO & PPC</li>
                        <li className="px-3">— Digital Video & TV, including Super Bowl</li>
                        <li className="px-3">— Streaming & Radio</li>
                        <li className="px-3">— Out-of-Home</li>
                        <li className="px-3">— Influencer Marketing: Podcast & YouTube</li>
                        <li className="px-3">— Email Marketing, Design & Dev</li>
                        <li className="px-3">— Social Media (Paid & Organic)</li>
                    </ul>
                </div>
                <div className="col-9 col-md lh-lg">
                    <ul className="list-unstyled skills">
                        <li className="px-3">— Website Design & Development</li>
                        <li className="px-3">— Advertising Creative (All Mediums)</li>
                        <li className="px-3">— Identify Design</li>
                        <li className="px-3">— Conversion Rate Optimization</li>
                        <li className="px-3">— CopyWriting (Ad, Web, & Product)</li>
                        <li className="px-3">— Media Planning & Buying (up to $100MM)</li>
                        <li className="px-3">— Content Strategy & Execution</li>
                        <li className="px-3">— Business Development</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Expertise;