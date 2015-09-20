#!/bin/sh

# 
# This generates a public/private OpenSSL RSA keys:
#
# From 
#   https://en.wikibooks.org/wiki/Cryptography/Generate_a_keypair_using_OpenSSL
# and 
#   man openssl

# You DO NOT want to use the private key checked-in here!  Rather you want to 
# run this script to generate your own private key.  This is for demo purposes only

# Generate a Private key 
openssl genrsa -out private_key.pem 2048


# Generate a Public key
openssl rsa -pubout -in private_key.pem -out public_key.pem

