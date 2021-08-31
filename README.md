## Next.js API Routes

Project built to better understand the functioning of API routes in Next.js

- API routes are defined inside a special folder called "api" folder inside the "pages" folder.

* inside each api route file, "handler" function is defined to handle the requests.

* "handler" function in api routes get triggered for every kind of request like POST, GET, DELETE etc.
  Therefore need to use if-else to check the kind of request.

* "getStaticProps" function can be used in any page to pre-render data of that page in server side.
  It runs in server-side and not visible in client side.
