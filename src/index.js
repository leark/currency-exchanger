import $ from 'jquery';
import './css/styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './exchange-service.js';

// User Interface Logic

$(function () {
  getCurrencies();
  $('#showRate').on('click', function (event) {
    event.preventDefault();
    ExchangeService.getExchangeRate()
      .then(function (response) {
        if (response instanceof Error) {
          throw Error(`ExchangeRate API error: ${response.message}`);
        }
        const rates = response.conversion_rates;
        displayConverted(rates);
        displayRatesList(rates);
      })
      .catch(function (error) {
        $('#showErrors').text(
          `There was an error with getting the current exchange rate: ${error.message}`
        );
      });
  });
});

// fills datalist #currencies with available currencies
async function getCurrencies() {
  const response = await ExchangeService.getSupportedCurrencies();
  displayCurrencies(response);
}

function displayCurrencies(response) {
  $('#showErrors').text('');
  if (response.documentation) {
    const list = $('#currencies');
    const rates = response.supported_codes;
    rates.forEach(function (element) {
      let currency = $(document.createElement('option'));
      currency.text(element[1]);
      currency.val(element[0]);
      list.append(currency);
    });
  } else {
    $('#showErrors').text(
      `There was an error with getting the available currencies: ${response}`
    );
  }
}

function displayConverted(rates) {
  const fAmount = $('#firstAmount').val();
  const currency = $('#currencySelect').val();
  if (rates[currency]) {
    $('#secondAmount').val(fAmount * parseFloat(rates[currency]));
  } else {
    $('#showErrors').text(`Currency ${currency} does not exist`);
  }
}

function displayRatesList(rates) {
  let ul = document.createElement('ul');
  for (const currency in rates) {
    if (currency !== 'USD') {
      let li = document.createElement('li');
      li.innerText = `${rates[currency]} in ${currency}`;
      ul.appendChild(li);
    } else {
      $('#baseUSD').text(rates[currency]);
    }
  }
  $('#rates').show();
  $('#ratesList').html('');
  $('#ratesList').append(ul);
}

const MOCK_RESPONSE = {
  result: 'success',
  documentation: 'https://www.exchangerate-api.com/docs',
  terms_of_use: 'https://www.exchangerate-api.com/terms',
  time_last_update_unix: 1656633602,
  time_last_update_utc: 'Fri, 01 Jul 2022 00:00:02 +0000',
  time_next_update_unix: 1656720002,
  time_next_update_utc: 'Sat, 02 Jul 2022 00:00:02 +0000',
  base_code: 'USD',
  conversion_rates: {
    USD: 1,
    AUD: 1.4502,
    AWG: 1.79,
    AZN: 1.6982,
    BZD: 2.0,
    CAD: 1.2889,
    CNY: 6.696,
    EUR: 0.9562,
    FJD: 2.2101,
    FKP: 0.8232,
    FOK: 7.134,
    GBP: 0.8232,
    HKD: 7.8491,
    HNL: 24.6526,
    HRK: 7.2049,
    IDR: 14930.039,
    ILS: 3.4962,
    IMP: 0.8232,
    INR: 78.883,
    JPY: 135.8849,
    KES: 118.2042,
    KRW: 1292.9283,
    NZD: 1.6043,
    OMR: 0.3845,
    PAB: 1.0,
    PEN: 3.8026,
    PGK: 3.5747,
    PHP: 54.955,
    PKR: 204.9139,
    PLN: 4.4844,
    PYG: 6972.7504,
    VND: 23292.2598,
    VUV: 117.5324,
  },
};
