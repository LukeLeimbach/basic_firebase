/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Luke's Firebase!");
});

exports.pubsub = functions
  .runWith({timeoutSeconds: 60, memory: "1GB"})
  .pubsub
  .schedule("every 1 minutes")
  .onRun((context) => {
      logger.datetime
      logger.log("Pubsub ran at " + datetime.toISOString().slice(0, 10));
    });
