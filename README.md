# xpub-epmc-e2e

End-to-end tests for xpub-epmc.

## Cypress

### Configuration

* Add cypress.json in the project root directory:

```
{
  "env": {
    "username": "xxxxxxxx",
    "password": "xxxxxxxx"
  }
}
```

* Install dependencies:

```
$ npm install --save-dev cypress
```

### How to run test

```
$ npm run cypress
```

## TestCafe
### Configuration

* Add .env in the project root directory:

```
PLUS_USERNAME='xxxxxxxx'
PLUS_PASSWORD='xxxxxxxx'
```

* Install dependencies:

```
$ npm install
$ npm install -g testcafe
```

### How to run test

```
$ npm run testcafe
```
