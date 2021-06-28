const http = require('http')
const fs = require('fs')
const path = require('path')

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    let filename = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
    let ext = path.extname(filename)
    let contentType = 'text/html'

    if(!ext) filename += '.html'

    switch (ext){
        case '.css':
            contentType = 'text/css'
        break
        case '.js':
            contentType = 'text/javascript'
        break
    }

    fs.readFile(filename, (err, content) => {
        if(err){
            fs.readFile(path.join(__dirname, 'public','error.html'), (err, data) => {
                if(err) throw err
                res.writeHead(500, {
                    'Content-Type': contentType
                })
                res.end(data)
            })
        } else {
            res.writeHead(200, {
                'Content-Type': contentType
            })
            res.end(content)
        }
    })
})

server.listen(PORT, () => {
    console.log('server is running');
})