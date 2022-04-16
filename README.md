# Frontend Developer Test Assignment

## Installation

```bash
# yarn
yarn

# npm
npm install
```

## How to run?

```bash
# yarn:
yarn start

# npm:
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

- I've uploaded the project to a [github page](https://qorbanzadeh.github.io/currency-convertor/) but since I can't use it with `https` due to the free plan,
  browsers will block the endpoint!

- Since I was using the free plan of [fixer.io](https://fixer.io/product), I couldn't change the base currency.
 So, I had to do it manually which is not good if it was a real project.
 Also, the rates would be updated only by refreshing the page since with the [free plan](https://fixer.io/product)
 only comes **100** request per month!

- I'm using the `.env` file to access the **API_KEY** but it's defiantly
 not secure enough because it would eventually be visible in the bundle file,
 the better way would be to save the **API_KEY** on the backend side then get an
 endpoint from it without needing a key.

- For the following reasons I get all of the countries on the initial load:
  - Showing an empty page is not good for the UI
  - The [search endpoint doesn't function very well](https://restcountries.com/v3.1/name/iran)
  - It wasn't specified in the assignment description how to get the data as long as users can search for countries

## Things that could be improved

As mentioned in the assignment description I worked on this project in `Saturday, April 16th`
So, not more than a day, So, if I spend more time on it, it can be improved, these are some the things that I think can be improved:

- IT's a basic list(table) and I didn't put much time on its UI, So:
 - Defiantly colors can be improved
 - Pagination and skelton loading would make it better(though it's better to do the pagination on the backend side)
 - If it had more components, I would probably use `SCSS` instead of pure css!

- The initial load could be faster if the the endpoint has pagination or
 I could have implement a function to mount more countries when user scroll down.
