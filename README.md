# email-multiplexer
[![Build Status](https://travis-ci.org/koalazak/email-multiplexer.svg?branch=master)](https://travis-ci.org/koalazak/email-multiplexer)
[![dependencies Status](https://david-dm.org/koalazak/email-multiplexer/status.svg)](https://david-dm.org/koalazak/email-multiplexer)
[![npm version](https://badge.fury.io/js/email-multiplexer.svg?r)](http://badge.fury.io/js/email-multiplexer)

Gets all variants of an email address filling with dots. *One address to rule them all.*

## The dots in your Gmail/Outlook address don’t matter

You can email `pepito@gmail.com`, `pep.ito@gmail.com` or `p.e.p.i.t.o@gmail.com` and they would all go to the same place. The periods in your email address are actually totally meaningless.

The dots and capitalization can help make the Gmail address easier to read for humans, but the Google Gmail servers don't even notice them.

Obtaining all your variants you can create X accounts in other services using a unique verified gmail account. 

The longer the address, the more variants you can get.

# Install


First you need node.js installed and then in your project directory:

```bash
$ npm install email-multiplexer --save
```

# Quick start

Create `myapp.js` file with this content:

```javascript
const emailMultiplexer = require ('email-multiplexer');

const emailVariants = emailMultiplexer('pipito@gmail.com');

console.log(emailVariants);

```

Then run your script:

```
$ node myapp.js
[ 'pepito@gmail.com',
  'pepit.o@gmail.com',
  'pepi.to@gmail.com',
  'pepi.t.o@gmail.com',
  'pep.ito@gmail.com',
  'pep.it.o@gmail.com',
  'pep.i.to@gmail.com',
  'pep.i.t.o@gmail.com',
  'pe.pito@gmail.com',
  'pe.pit.o@gmail.com',
  'pe.pi.to@gmail.com',
  'pe.pi.t.o@gmail.com',
  'pe.p.ito@gmail.com',
  'pe.p.it.o@gmail.com',
  'pe.p.i.to@gmail.com',
  'pe.p.i.t.o@gmail.com',
  'p.epito@gmail.com',
  'p.epit.o@gmail.com',
  'p.epi.to@gmail.com',
  'p.epi.t.o@gmail.com',
  'p.ep.ito@gmail.com',
  'p.ep.it.o@gmail.com',
  'p.ep.i.to@gmail.com',
  'p.ep.i.t.o@gmail.com',
  'p.e.pito@gmail.com',
  'p.e.pit.o@gmail.com',
  'p.e.pi.to@gmail.com',
  'p.e.pi.t.o@gmail.com',
  'p.e.p.ito@gmail.com',
  'p.e.p.it.o@gmail.com',
  'p.e.p.i.to@gmail.com',
  'p.e.p.i.t.o@gmail.com' ]
```