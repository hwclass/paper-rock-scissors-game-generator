const http = require('http')
const fs = require('fs')
const path = require('path')

const port = 3333

const requestHandler = (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.writeHead(200, { "Content-Type": "json" });
  return fs.readFile(path.resolve('./seed/data.json'), 'utf8', function(err, data) {
    if (err) console.log(err) 
    response.write(JSON.stringify(JSON.parse(data)))
    return response.end()
  })
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) console.log(err)
  console.log(`Server is listening on ${port}`)
})