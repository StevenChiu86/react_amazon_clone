const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response, request } = require("express");
const stripe = require("stripe")(
  "sk_test_51HRzwzBFhH4UDokeIV98y4B43nQKzeHh5ueXzl6GBSc3IrfRqnR6f1V7a1JebPg6zp40PRcZufbDnUhgkch0KnaB000HR2SG5e"
);

//API

//-App config
const app = express();

//-Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//
//-API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received BOOM!!! for this amount >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of currency
    currency: "usd",
  });
  //OK-Created //201 present it is OK
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//-Listen commad //因為多了export.api 的.api所以網址後面有api
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/challenge-e6dfb/us-central1/api
