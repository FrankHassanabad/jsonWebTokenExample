jsonWebTokenExample
==================

Example of using JWT (JSON Web Tokens) to generate a mock access token as if it
came from an Auth server such as an OAuth2 provider.

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

Encoding JWT token of:
{
  "jti": "fb5a33b6-4486-4861-91e9-7e0adc69c042",
  "iss": "String of your Auth Server which generated this",
  "aud": "Client ID of who this is intended for",
  "exp": 1442777896092,
  "iat": 1442777680092
}

Generated token from private key (size 631):

eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJmYjVhMzNiNi00NDg2LTQ4NjEtOTFlOS03ZTBhZGM2OWMwNDIiLCJpc3MiOiJTdHJpbmcgb2YgeW91ciBBdXRoIFNlcnZlciB3aGljaCBnZW5lcmF0ZWQgdGhpcyIsImF1ZCI6IkNsaWVudCBJRCBvZiB3aG8gdGhpcyBpcyBpbnRlbmRlZCBmb3IiLCJleHAiOjE0NDI3Nzc4OTYwOTIsImlhdCI6MTQ0Mjc3NzY4MDA5Mn0.kKbARkgiLWoBgJqQnaT0MEW_HGftTGCTyl2mGsqM066d5bRSv513yw3osA21VBW-qnOHFxriOOHDURq2ZgnHo2IEPvQyfv0vI8EPJDM6g8xi_TLvP-ssjQbPSmYiiImP61Ng1F5scuvdgTSdKth9Iwp0CrSg9Q4fwgDYJXKZ_4D29W-KqbJ98Abcl-t6VBk54ECvg2WahxzovBQrAK4icPmboehrlo--aagmh3puwC3hnVeqttkNDUGtEgvvvsiR5VCIDGlM2mwffNaqcRxNq-A-PfvnCIrov-w0Xox0LPijJHZnmxV7vB7nGSmGcZlUSNoZHl8FhQ68SpJHRE4c8A

Decoded token from public key is:
{
  "jti": "fb5a33b6-4486-4861-91e9-7e0adc69c042",
  "iss": "String of your Auth Server which generated this",
  "aud": "Client ID of who this is intended for",
  "exp": 1442777896092,
  "iat": 1442777680092
}
```
