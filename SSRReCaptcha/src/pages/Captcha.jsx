//import { addAndMultiply } from '../add'
//import { multiplyAndAdd } from '../multiply'
import './../styles/Captcha.css'
//import { useState } from 'react'
import reactLogo from './../assets/react.svg'
import ReCaptcha from './../assets/ReCaptcha.png'
import { Captcha2 } from './../components/Captcha2'
import { Captcha3 } from './../components/Captcha3'
export default function Captcha() {
    return (
        <>
            <h1>Captcha</h1>
            {/* <div>{addAndMultiply(1, 2, 3)}</div>
            <div>{multiplyAndAdd(1, 2, 3)}</div> */}
            <div className="Captcha">
                <div>
                    <a href="https://www.npmjs.com/package/react-google-recaptcha" target="_blank">
                        <img src={ReCaptcha} className="logo" alt="ReCaptcha" />
                    </a>
                    <a href="https://reactjs.org" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1>React-ReCaptcha-Pages</h1>
                <div className="card">
                    <Captcha2 />
                    <Captcha3 />
                </div>
                <p className="read-the-docs">
                    Click on the React and ReCaptcha logos to learn more
                </p>
            </div>
        </>
    )
}