const http = require('http')
const fs = require('fs')
const path = require('path')
const router = require('./server/router')

const port = 3333
const dataPath = './seed/data.json'

router.register('/data', function(request, response) {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.writeHead(200, { "Content-Type": "json" });
  return fs.readFile(path.resolve(dataPath), 'utf8', function(err, data) {
    if (err) console.log(err)
    response.write(JSON.stringify(JSON.parse(data)))
    return response.end()
  })
});

const server = http.createServer((req, res) => {
  handler = router.route(req)
  handler.process(req, res)
})

server.listen(port, (err) => {
  if (err) console.log(err)
  console.log(`Server is listening on ${port}`)
})

module.exports = server