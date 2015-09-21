jsonWebTokenExample
==================

Example of using JWT (JSON Web Tokens) to generate an access token as if it
came from an Auth server such as a OAuth2 provider.  This uses a public/private
key pair based on a Elliptic Curve Asymmetric algorithm.  The private key is
used to encrypt tokens on the Auth server and the public key is available for download
by any service needing to verify tokens on a continuous basis without wanting to
make additional roundtrips to the Auth server.

More information on [JWT](https://tools.ietf.org/html/rfc7515#section-3.3),
[Elliptic Curve](https://wiki.openssl.org/index.php/Command_Line_Elliptic_Curve_Operations),
[RSA](https://wiki.openssl.org/index.php/Command_Line_Utilities#rsa_.2F_genrsa) private/public keys,
[OAuth2](https://tools.ietf.org/html/rfc6749), and
[node web token](https://github.com/auth0/node-jsonwebtoken)


Install and Run

```
git clone https://github.com/FrankHassanabad/jsonWebTokenExample.git
cd jsonWebTokenExample
npm install
node app.js
```


Output should be something like the following:

```
Reading private key of: keys/private_key.pem
Reading public key of: keys/public_key.pem

Generated token from private key (size 375):

eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJqdGkiOiI4ODQ0NGFjNS1jZGI3LTRkMjctYjIyMS1kZTMyZDY0Zjc5YWQiLCJpc3MiOiJTdHJpbmcgb2YgeW91ciBBdXRoIFNlcnZlciB3aGljaCBnZW5lcmF0ZWQgdGhpcyIsImF1ZCI6IkNsaWVudCBJRCBvZiB3aG8gdGhpcyBpcyBpbnRlbmRlZCBmb3IiLCJleHAiOjE0NDI3OTY0NDc3NTcsImlhdCI6MTQ0Mjc5NjIzMTc1N30.59813RD2iKWcL5av9GgW600ubf22EDo8CmtEcWqMXLkHy-ivX5VU5Ainpg8IvvSC0TPqKvbRcImiVOcYXidwFg

Decoded token from public key is:
{
  "jti": "88444ac5-cdb7-4d27-b221-de32d64f79ad",
  "iss": "String of your Auth Server which generated this",
  "aud": "Client ID of who this is intended for",
  "exp": 1442796447757,
  "iat": 1442796231757
}
```

Check out the shell script in the keys directory to generate new elliptic curve or RSA
private/public keys.  You can play with the different elliptic curve types or sizes of
RSA to see the different length differences of the tokens.

Don't deploy any checked-in private key to a server (obviously).  
