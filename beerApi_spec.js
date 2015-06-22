var frisby = require('frisby');


frisby.create('GET JSON data from an endpoint')
  .get('http://beerlocker.azurewebsites.net/api')
  .expectStatus(200)
  .expectJSON({message: 'You are running dangerously low on beer, really!'})
  .expectHeaderContains('content-type', 'application/json')
.toss();


frisby.create('GET 404 Not found')
  .get('http://beerlocker.azurewebsites.net/ape')
  .expectStatus(404)
.toss();

frisby.create('GET Beer by and verify Name and Quantity')
  .get('http://beerlocker.azurewebsites.net/api/beers/55857167df3f181720e377b6')
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .expectJSON({name: 'Hops Of Wrath'})
  .expectJSON({quantity: 100})
  .toss();


