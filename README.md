# Currency Exchanger

#### A website that converts USD to other currencies based on information from ExchangeRate-API.

#### By Seung Lee

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _jQuery_
* _npm_
* _webpack_
* _eslint_
* _babel_
* _html-loader_
* _style-loader_
* _css-loader_
* _file-loader_
* _jest_
* _dotenv_

## [GitHub Pages Link](https://leark.github.io/currency-exchanger)
## Description
Currency Exchanger is a simple webpage where a user can select the original currency, its amount, and target currency to see how much it's worth in the target currency. Bottom of the page also displays how much 1 USD is worth in all the currencies supported.

## Setup/Installation Requirements

1. Open Git Bash if on Windows and terminal if on Mac
2. Run the command

    ``git clone https://github.com/leark/currency-exchanger.git``

3. Run the command

    ``cd currency-exchanger``

4. Run the command

    ``touch .env``

5. Go to [ExchangeRate-API website](https://www.exchangerate-api.com/)

6. Click on "Get Free Key!" after putting in your email address

7. Follow directions and sign in to go to the dashboard

8. Copy the API key and type the following line in the .env file where {YOUR API KEY HERE} is the copied API key

    ``API_KEY={YOUR API KEY HERE}``

9. Run the command in Git Bash/terminal

    ``npm init -y``

10. Run the command

    ``npm install``

11. Run the command

    ``npm run start``

## Known Bugs

* _No Known Issues_

## License

[GNU](/LICENSE-GNU)

Copyright (c) 2022 Seung Lee

## Contact Information

Seung Lee
shl7@uw.edu