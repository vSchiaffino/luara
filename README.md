# Luara

Minimal "ecommerce" template with Google Sheets, NextJS SSG and React

## Getting Started

To create a custom local Luara page:

1. Create a google sheet like [this](https://docs.google.com/spreadsheets/d/1QqpNyXh4C9kyJ0dGnpZx_zy_7josC_d8Kz6Kw1D5HWQ/edit?usp=sharing)
2. In the google docs spreadsheet, click on file -> Share -> To the web, select as .csv value and copy the link generated (should look like [this](https://docs.google.com/spreadsheets/d/e/2PACX-1vTj_BVYqprfKVQFKs6H_Tv5o8h2fI2g0cqQiwJLmTbQNp4lJE-7ipknc53_A0vr9PxZngugvki5wwPB/pub?output=csv))
3. Create a copy of .env.example, and name it: .env.local
4. In this file, set NEXT_PUBLIC_PHONE_NUMBER and NEXT_PUBLIC_SHEET_URL respectively
5. Open a terminal in the root of the proyect and run:

```bash
npm install
npm run build
npm start
```

6. You are running Luara [locally](http://localhost:3000)! :D

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
