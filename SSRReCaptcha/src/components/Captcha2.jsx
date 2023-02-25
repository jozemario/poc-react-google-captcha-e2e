import React, { useEffect, useState } from 'react';
//import ReCAPTCHA from "react-google-recaptcha";
//import { Helmet } from "react-helmet"

export const Captcha2 = () => {
    const [message, setMessage] = useState('');

    const recaptchaRef = React.useRef() //as React.MutableRefObject<HTMLFormElement>;

    const onSubmitWithReCAPTCHA = async () => {
        alert('thanks ' + document.getElementById('field').value);
        const token = await recaptchaRef.current.executeAsync();
        console.log('onSubmitWithReCAPTCHA: ', token)
    }

    const onChange = (value) => {
        console.log("Captcha value:", value);
    }
    const validate = (event) => {
        event.preventDefault();
        if (!document.getElementById('field').value) {
            alert("You must add text to the required field");
        } else {
            grecaptcha.execute();
        }
    }

    useEffect(() => {
        /*     const url = `https://www.google.com/recaptcha/api.js?render=6LcEvackAAAAABlykIYvtJM0sCPmF1Tl9PEdPDBZ`
            const head = document.querySelector("head");
            const script = document.createElement("script");
    
            script.setAttribute("src", url);
            head.appendChild(script); */

        const element = document.getElementById('submit');
        element.onclick = validate;

        if (typeof grecaptcha === 'undefined') {
            grecaptcha = {};
        }
        grecaptcha.ready(function () {
            grecaptcha.render("recaptcha-container", {
                sitekey: import.meta.env.VITE_V2_KEY,
                callback: function (token) {
                    console.log('recaptcha callback', token);
                },
                theme: 'dark',
                //badge: "inline",
                size: "invisible"
            });
        });

        return () => {
            // head.removeChild(script);
        };

    }, []);

    useEffect(() => {
        fetch('/api/healt')
            .then((response) => response.json())
            .then((data) => setMessage(data.message));
    }, []);

    return (
        <>
            {/* <Helmet>
                <script
                    src="https://www.google.com/recaptcha/api.js"
                    //crossorigin="anonymous"
                    async
                ></script>
            </Helmet> */}

            <form onSubmit={onSubmitWithReCAPTCHA}>
                {/* <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={import.meta.env.VITE_V2_KEY}
                /> */}
                <p>{message}</p>;
                {'Name: (required)'} <input id="field" name="field" />
                <div ref={recaptchaRef} id="recaptcha-container"></div>
                {/*  <div id="recaptcha" className="g-recaptcha"
                    //ref={recaptchaRef}
                    data-sitekey="6LfL8qckAAAAAC367UGCUcwykNEp0WvemqlrXci7"
                    data-callback="onSubmit"
                    data-size="invisible" /> */}
                <button id="submit">submit</button>

            </form>
        </>
    )

}

