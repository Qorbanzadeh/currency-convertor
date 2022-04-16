# Frontend Developer Assignment

## Installation

```bash
# yarn
yarn

# npm
npm install
```

## How to run?

```bash
echo FIXERIO_ACCESS_KEY=YOUR_ACCESS_KEY > .env

# yarn
yarn start

# npm
npm start
```

## How to test?

```bash
# yarn
yarn cypress

# npm
npm cypress
```

## Other scripts

```bash
# lint --> eslint
yarn lint

# format --> prettier
yarn format
```


## Techs:
- React(hooks)
- Webpack
- Typescript
- eslint, prettier
- Cypress

## Notes:

- I've emailed the `ACCESS_KEY`, but you can get one from [here][fixerio]. Please put it in a `.env` file, then run the project

- I've uploaded the project to a [github page][gh-page] but since I can't use it with `https` due to the free plan,
  browsers will block the endpoint!

- Since I was using the free plan of [fixer.io][fixerio], I couldn't change the base currency.
 So, I had to do it manually which is not good if it was a real project.
 Also, the rates would be updated only by refreshing the page since with the [free plan][fixerio]
 only comes **100** requests per month!

- I'm using the `.env` file to access the **API_KEY** but it's defiantly
 not secure enough because it would eventually be visible in the bundle file,
 the better way would be to save the **API_KEY** on the backend side then get an
 endpoint from it without needing a key.

- For the following reasons I get all of the countries on the initial load:
  - Showing an empty page is not good for the UI
  - The [search endpoint doesn't function very well][rc-api-bug]
  - It wasn't specified in the assignment description how to get the data as long as users can search for countries

## Things that could be improved

As mentioned in the assignment description I worked on this project on `Saturday, April 16th`
So, for not more than a day, So, if I spend more time on it, it can be improved, these are some of the things that I think can be improved:

- It's a basic list(table) and I didn't put much time into its UI, So:
 - Defiantly colors can be improved
 - Pagination and skeleton loading would make it better(though it's better to do the pagination on the backend side)
 - If it had more components, I would probably use `SCSS` instead of pure css!

- The initial load could be faster if the endpoint has pagination or
 I could have implemented a function to mount more countries when a user scrolls down.


<!-- External Links -->
[fixerio]: https://fixer.io/product
[gh-page]: https://qorbanzadeh.github.io/currency-convertor/
[rc-api-bug]: https://restcountries.com/v3.1/name/iran
