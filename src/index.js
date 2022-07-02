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
    // checking if we've already stored rates in session storage
    if (!sessionStorage.getItem('rates')) {
      ExchangeService.getExchangeRate()
        .then(function (response) {
          if (response instanceof Error) {
            throw Error(`ExchangeRate API error: ${response.message}`);
          }
          const rates = response.conversion_rates;
          sessionStorage.setItem('rates', JSON.stringify(rates));
          displayConverted(rates);
          displayRatesList(rates);
        })
        .catch(function (error) {
          $('#showErrors').text(
            `There was an error with getting the current exchange rate: ${error.message}`
          );
        });
    } else {
      const rates = JSON.parse(sessionStorage.getItem('rates'));
      displayConverted(rates);
      displayRatesList(rates);
    }
  });
});

async function getCurrencies() {
  if (!sessionStorage.getItem('currencies')) {
    const response = await ExchangeService.getSupportedCurrencies();
    sessionStorage.setItem('currencies', JSON.stringify(response));
  }
  displayCurrencies(JSON.parse(sessionStorage.getItem('currencies')));
}

// fills datalist #currencies with available currencies
function displayCurrencies(response) {
  $('#showErrors').text('');
  if (response.documentation) {
    const list = $('#currencies');
    const currencies = response.supported_codes;
    currencies.forEach(function (element) {
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
    let amount = fAmount * parseFloat(rates[currency]);
    $('#secondAmount').val(amount.toFixed(3));
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
