import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

export const Captcha3 = () => {
    const recaptchaRef = React.useRef() //as React.MutableRefObject<HTMLFormElement>;

    const onSubmitWithReCAPTCHA = async () => {
        const token = await recaptchaRef.current.executeAsync();
    }
    const verifyCallback = response => console.log(response);
    const expiredCallback = () => { console.log('expiredCallback') };

    return (
        <>
            {/*  <form onSubmit={onSubmitWithReCAPTCHA}>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    size="normal"//compact, normal or invisible
                    sitekey={import.meta.env.VITE_V3_KEY}
                />
            </form> */}
            {/*  <form method="post" action="/captcha">
                <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response" />
                <input type="hidden" name="action" value="validate_captcha" />
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="form-group col-md-4">
                        <label for="name">Name:</label>
                        <input type="text" class="form-control" name="name" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="form-group col-md-4">
                        <button type="submit" class="btn btn-success" style="margin-left:38px">Send</button>
                    </div>
                </div>
            </form>

            <script src="https://www.google.com/recaptcha/api.js?render=your reCAPTCHA site key here"></script>
            <script>
                grecaptcha.ready(function() {
                    // do request for recaptcha token
                    // response is promise with passed token
                    grecaptcha.execute('your reCAPTCHA site key here', { action: 'validate_captcha' })
                        .then(function (token) {
                            // add token value to form
                            document.getElementById('g-recaptcha-response').value = token;
                        })
                });
                </script> */}


        </>
    )

}
