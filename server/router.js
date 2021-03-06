var parser = require('url')
const handler = require('./create-handler')

let handlers = {}

exports.register = function(url, method) {
  handlers[url] = handler.createHandler(method);
}

exports.route = function(req) {
  url = parser.parse(req.url, true);
  var handler = handlers[url.pathname];
  if (!handler) handler = this.missing(req)
  return handler;
}

exports.missing = function(req) {
  // Try to read the file locally, this is a security hole, yo /../../etc/passwd
  var url = parser.parse(req.url, true);
  var path = __dirname + "/public" + url.pathname
  try {    
    data = fs.readFileSync(path);
    mime = req.headers.accepts || 'text/html'
    return handler.createHandler(function(req, res) {
      res.writeHead(200, {'Content-Type': mime});
      res.write(data);
    });        
  } catch (e) { 
    return handler.createHandler(function(req, res) {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write("No route registered for " + url.pathname);
    });      
  }  
}