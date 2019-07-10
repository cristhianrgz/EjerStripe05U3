const strip = require("stripe")("sk_test_McOU5Qcch1T97QbdukvWLXJ700hgPIfdeZ");

  switch (err.type) 
  {
    case 'StripeCardError':
      // A declined card error
      err.message; // => e.g. "Your card's expiration year is invalid."
      break;
    case 'RateLimitError':
      // Too many requests made to the API too quickly
      break;
    case 'StripeInvalidRequestError':
      // Invalid parameters were supplied to Stripe's API
      break;
    case 'StripeAPIError':
      // An error occurred internally with Stripe's API
      break;
    case 'StripeConnectionError':
      // Some kind of error occurred during the HTTPS communication
      break;
    case 'StripeAuthenticationError':
      // You probably used an incorrect API key
      break;
    default:
      // Handle any other types of unexpected errors
      break;
  }
strip.charges.retrieve("ch_1EuXdn2eZvKYlo2C9i6KrKhz", {
    api_key: "sk_test_McOU5Qcch1T97QbdukvWLXJ700hgPIfdeZ"
});


const stripE = require("stripe")("sk_test_McOU5Qcch1T97QbdukvWLXJ700hgPIfdeZ");

var charge =  stripE.charges.create();
console.log(charge.lastResponse.requestId);

//-------------Create a charge------------------

stripE.charges.create({
  amount: 2000,
  currency: "usd",
  source: "tok_mastercard", // obtained with Stripe.js
  description: "Charge for cristhian3.1416@gmail.com"
}, function(err, charge) {
  // asynchronously called
});

  //---------------Consulta por ID-------------
  stripE.charges.retrieve(
    'ch_1EuufwEGiOWNSkTE6dDcghDf',
    function(err, charge) {
      // asynchronously called
    }
  );

  //--------------Update a charge ----------------
  stripE.charges.update(
    'ch_1EuufwEGiOWNSkTE6dDcghDf',
    {metadata: {order_id: '6735'}},
      function(err, charge) {
      // asynchronously called
    }
  );
  
  //-------------Capture a charge-------------------
  stripE.charges.capture('ch_1EuufwEGiOWNSkTE6dDcghDf', function(err, charge) {
    // asynchronously called
  });

 //--------------consulta all charge----------------
  stripE.charges.list(
    { limit: 3 },
    function(err, charges) {
      // asynchronously called
    }
  );