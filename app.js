'use strict'

//required imports
var jwt = require('jsonwebtoken');
var fs = require('fs');
var uuid = require('node-uuid');

//private/public key locations
var PRIVATE_KEY = 'keys/private_key.pem';
var PUBLIC_KEY = 'keys/public_key.pem';

// get your public/private RSA generated keys
console.log("Reading private key of: " + PRIVATE_KEY);
var privateKey = fs.readFileSync(PRIVATE_KEY);
console.log("Reading public key of: " + PUBLIC_KEY, '\n');
var publicKey = fs.readFileSync(PUBLIC_KEY);

// Create the jwt to encode.  This is the part done by the Auth Server with
// and used with the private key
var nowEpoch = new Date().valueOf()
var hourFromNowEpoch = nowEpoch + new Date((60 * 60) * 60).valueOf();
var jwtToEncode = {
  jti: uuid.v4(),
  iss: 'String of your Auth Server which generated this',
  aud: 'Client ID of who this is intended for',
  exp: hourFromNowEpoch,
  iat: nowEpoch
}
console.log("Encoding JWT token of:\n" + JSON.stringify(jwtToEncode, null, 2), '\n');
var signedJwtToken = jwt.sign(jwtToEncode, privateKey, { algorithm: 'RS256' });

// Write the token out to the console
console.log("Generated token from private key (size " + signedJwtToken.length + "):\n\n" + signedJwtToken + "\n")

// Verify the token with the public key.  This part is done by clients with
// downloaded public keys
jwt.verify(signedJwtToken, publicKey, { algorithms: ['RS256'] }, function(err, decoded) {
  if(err)
    console.log("Error decoding:", err.message)
  else
    console.log("Decoded token from public key is:\n" + JSON.stringify(decoded, null, 2), '\n')
});
