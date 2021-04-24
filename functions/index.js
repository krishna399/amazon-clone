/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51IheLISAZBhSouuZIBAKzG9Tnf9ZrQXV8JczR7SaopOrkYXVmMIY01ppbGPvbD9N3LIF6o5Imo3l8BSCSOHSDz3c00cfdbywOL");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// API

// App config
const app = express();

// Middlewares
app.use(cors(
    {
      origin: true,
    }));
// this allows data to send data and parse it in json
app.use(express.json());

// API routes
app.get("/", (request, response) =>
  response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  console.log("reached to post call");
  const total = request.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
    description: "test service",
  });
  const customer = await stripe.customers.create({
    name: "Jenny Rosen",
    address: {
      line1: "510 Townsend St",
      postal_code: "98140",
      city: "San Francisco",
      state: "CA",
      country: "US",
    },
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
    customer: customer,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);


