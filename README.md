# poc-react-google-captcha-e2e
P.O.C React-google-captcha-v2v3 e2e testing with cypress

```
nvm use 18
yarn create vite
=> React, Typescript-SWC

cd ReCaptcha
  yarn
  yarn dev

  yarn add react-google-recaptcha-v3 react-google-recaptcha

SSR
---
yarn generate 
yarn serve
yarn cypress:open

-----
ec2
---

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
nvm install --lts
nvm use --lts  
---

```