const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const port = 8080;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    
    console.log('Request:', pathname, 'from', req.headers.host);
    
    // Handle blog post URLs (but not static files)
    if (pathname.startsWith('/blog/')) {
        const slug = pathname.replace('/blog/', '');
        
        // Check if this is a static file request (has file extension)
        if (path.extname(slug) !== '') {
            // This is a static file request, serve it normally
            const filePath = path.join(__dirname, pathname);
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    res.writeHead(404);
                    res.end('File not found');
                } else {
                    const ext = path.extname(filePath);
                    let contentType = 'text/plain';
                    
                    if (ext === '.js') contentType = 'application/javascript';
                    else if (ext === '.css') contentType = 'text/css';
                    else if (ext === '.html') contentType = 'text/html';
                    
                    res.writeHead(200, { 'Content-Type': contentType });
                    res.end(data);
                }
            });
            return;
        }
        
        // This is a blog post request
        console.log('Blog post requested:', slug);
        fs.readFile('blog-post.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('File not found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
        return;
    }
    
    // Handle root
    if (pathname === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('File not found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
        return;
    }
    
    // Serve static files
    const filePath = path.join(__dirname, pathname);
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('File not found');
        } else {
            const ext = path.extname(filePath);
            let contentType = 'text/plain';
            
            if (ext === '.js') contentType = 'application/javascript';
            else if (ext === '.css') contentType = 'text/css';
            else if (ext === '.html') contentType = 'text/html';
            
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log('Blog posts will be available at: http://localhost:8080/blog/slug-name');
}); 