import express from "express";
import axios from 'axios'
const router = express.Router();
// POST /user/signin
router.post('/signin', async (req, res) => {
    try {
        res.send('OK');
    } catch (e) {
        res.status(500).send(e.toString());
    }
});

router.get('/health', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/captcha', async (req, res) => {
    if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
        return res.json({ "responseError": "something goes to wrong" });
    }
    const secretKey = "xxxx";

    const verificationURL = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&amp;response=" + req.body['g-recaptcha-response'] + "&amp;remoteip=" + req.connection.remoteAddress;

    try {
        const response = await axios.get(verificationURL);
        console.log(response);
        body = JSON.parse(response.data);

        if (body.success !== undefined && !body.success) {
            return res.json({ "responseError": "Failed captcha verification" });
        }
        res.json({ "responseSuccess": "Sucess" });
    } catch (error) {
        console.error(error);
    }


})

export default router;





