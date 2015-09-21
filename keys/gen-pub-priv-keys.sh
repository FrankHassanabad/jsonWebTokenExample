#!/bin/sh

#
# This generates a public/private OpenSSL RSA keys:
#
# From
#   https://en.wikibooks.org/wiki/Cryptography/Generate_a_keypair_using_OpenSSL
# and
#   https://wiki.openssl.org/index.php/Command_Line_Elliptic_Curve_Operations
# and
#   man openssl

# You DO NOT want to use the private key checked-in here!  Rather you want to
# run this script to generate your own private key.  This is for demo purposes only

# Generate a Private Elliptic Curve Key
openssl ecparam -name secp256k1 -genkey -noout -out private_key.pem

# Generate a Public Elliptic Curve Key
openssl ec -in private_key.pem -pubout -out public_key.pem


# Uncomment this if you want to use RSA keys instead.  In the code
# you will have to change the algorithm from ES256 to RS256

# Generate a Private RSA key
# openssl genrsa -out private_key.pem 2048

# Generate a Public RSA key
# openssl rsa -pubout -in private_key.pem -out public_key.pem
