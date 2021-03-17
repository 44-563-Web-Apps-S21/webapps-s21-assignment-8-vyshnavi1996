const http = require('http')    //Pull in a useful node package
var fs = require('fs')

const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req, res) => {               //Anonymous function to handle the request
      console.log("Request recieved")
      console.log(req.url)
      // Build a fake url so we can get the search parameters using a URL object
      fake_url = "https://fake.com/path" + req.url
      const url = new URL(fake_url)
      const search_params = url.searchParams


      console.log("Queries: " + search_params)

      if (req.method === 'GET') {

        console.log("Look for query parameter data: " + search_params.get("data"))
        x = search_params.get("x");

        // Process the queries here
        res.statusCode = 200      //code for OK
        res.setHeader('Content-Type','text/html')
        
        res.write("last digit of 919 number is '5'<br/>")
        res.write(`The logarithm value of x is ${Math.log(x, Number)}<br/>`)
        res.write(`cosh value of x is ${Math.cosh(x, Number)}<br/>`)
        res.write(`floor value of x is ${Math.floor(x, Number)}<br/>`)
        res.end();

      } else {
        console.log("Status 404")
        res.statusCode = 404;
        res.end();
      }

    }
  )

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})