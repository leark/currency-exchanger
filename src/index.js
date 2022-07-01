import $ from 'jquery';
import './css/styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './exchange-service.js';

// User Interface Logic

$(function () {
  $('#showRate').on('click', function (event) {
    event.preventDefault();
    getRates();
  });
});

async function getRates() {
  // const response = await ExchangeService.getExchangeRate();
  const response = MOCK_RESPONSE;
  displayRates(response);
}

function displayRates(response) {
  const rates = response.conversion_rates;
  let ul = document.createElement('ul');
  for (const currency in rates) {
    if (currency !== 'USD') {
      let li = document.createElement('li');
      li.innerText = `${rates[currency]} in ${currency}`;
      ul.appendChild(li);
    }
  }
  $('#rates').append(ul);
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
    AED: 3.6725,
    AFN: 88.7058,
    ALL: 113.4361,
    AMD: 407.208,
    ANG: 1.79,
    AOA: 430.5785,
    ARS: 125.1351,
    AUD: 1.4502,
    AWG: 1.79,
    AZN: 1.6982,
    BAM: 1.8703,
    BBD: 2.0,
    BDT: 92.8943,
    BGN: 1.8719,
    BHD: 0.376,
    BIF: 2033.4297,
    BMD: 1.0,
    BND: 1.3916,
    BOB: 6.8875,
    BRL: 5.2104,
    BSD: 1.0,
    BTN: 78.8816,
    BWP: 12.4237,
    BYN: 2.8826,
    BZD: 2.0,
    CAD: 1.2889,
    CDF: 1993.9654,
    CHF: 0.9557,
    CLP: 925.6917,
    CNY: 6.696,
    COP: 4142.6821,
    CRC: 688.5289,
    CUP: 24.0,
    CVE: 105.4415,
    CZK: 23.6919,
    DJF: 177.721,
    DKK: 7.134,
    DOP: 54.5531,
    DZD: 146.6503,
    EGP: 18.7894,
    ERN: 15.0,
    ETB: 52.0165,
    EUR: 0.9562,
    FJD: 2.2101,
    FKP: 0.8232,
    FOK: 7.134,
    GBP: 0.8232,
    GEL: 2.9302,
    GGP: 0.8232,
    GHS: 8.1424,
    GIP: 0.8232,
    GMD: 54.1677,
    GNF: 8685.8753,
    GTQ: 7.7565,
    GYD: 209.0228,
    HKD: 7.8491,
    HNL: 24.6526,
    HRK: 7.2049,
    HTG: 114.4549,
    HUF: 378.9775,
    IDR: 14930.039,
    ILS: 3.4962,
    IMP: 0.8232,
    INR: 78.883,
    IQD: 1458.0879,
    IRR: 41983.579,
    ISK: 133.6387,
    JEP: 0.8232,
    JMD: 150.8415,
    JOD: 0.709,
    JPY: 135.8849,
    KES: 118.2042,
    KGS: 80.0074,
    KHR: 4065.0532,
    KID: 1.4503,
    KMF: 470.447,
    KRW: 1292.9283,
    KWD: 0.2996,
    KYD: 0.8333,
    KZT: 469.133,
    LAK: 16544.2339,
    LBP: 1507.5,
    LKR: 354.6949,
    LRD: 152.6548,
    LSL: 16.3026,
    LYD: 4.8041,
    MAD: 9.8512,
    MDL: 19.1807,
    MGA: 4069.9498,
    MKD: 58.6103,
    MMK: 1842.1779,
    MNT: 3142.875,
    MOP: 8.0846,
    MRU: 36.2738,
    MUR: 45.1303,
    MVR: 15.4496,
    MWK: 1032.9726,
    MXN: 20.1362,
    MYR: 4.3948,
    MZN: 64.2828,
    NAD: 16.3026,
    NGN: 415.2514,
    NIO: 35.9742,
    NOK: 9.8778,
    NPR: 126.2106,
    NZD: 1.6043,
    OMR: 0.3845,
    PAB: 1.0,
    PEN: 3.8026,
    PGK: 3.5747,
    PHP: 54.955,
    PKR: 204.9139,
    PLN: 4.4844,
    PYG: 6972.7504,
    QAR: 3.64,
    RON: 4.7341,
    RSD: 112.2995,
    RUB: 53.1934,
    RWF: 1051.4023,
    SAR: 3.75,
    SBD: 8.0211,
    SCR: 12.9236,
    SDG: 497.4192,
    SEK: 10.25,
    SGD: 1.3916,
    SHP: 0.8232,
    SLL: 13157.3023,
    SOS: 578.0047,
    SRD: 22.0594,
    SSP: 498.4711,
    STN: 23.4283,
    SYP: 2495.7114,
    SZL: 16.3026,
    THB: 35.3171,
    TJS: 11.0967,
    TMT: 3.4981,
    TND: 2.9182,
    TOP: 2.3347,
    TRY: 16.6845,
    TTD: 6.7801,
    TVD: 1.4503,
    TWD: 29.6502,
    TZS: 2327.8096,
    UAH: 29.8682,
    UGX: 3754.1337,
    UYU: 39.3938,
    UZS: 10906.1904,
    VES: 5.5207,
    VND: 23292.2598,
    VUV: 117.5324,
    WST: 2.7079,
    XAF: 627.2627,
    XCD: 2.7,
    XDR: 0.7534,
    XOF: 627.2627,
    XPF: 114.1119,
    YER: 250.6552,
    ZAR: 16.3032,
    ZMW: 16.9167,
    ZWL: 354.605,
  },
};
