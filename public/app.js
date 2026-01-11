const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;

const MIMES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    // Normalize path
    let requestPath = req.url.split('?')[0];
    let filePath = path.join(PUBLIC_DIR, requestPath === '/' ? 'index.html' : requestPath);
    let ext = path.extname(filePath).toLowerCase();

    // Security: Prevent directory traversal
    if (!filePath.startsWith(PUBLIC_DIR)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }

    fs.stat(filePath, (err, stats) => {
        // If file doesn't exist or is a directory, try SPA fallback for HTML requests
        if (err || !stats.isFile()) {
            // If it looks like a file request (has extension), return 404
            if (ext && ext !== '.html') {
                res.writeHead(404);
                res.end('Not Found');
                return;
            }

            // SPA Fallback: Serve index.html
            filePath = path.join(PUBLIC_DIR, 'index.html');
            fs.readFile(filePath, (err, content) => {
                if (err) {
                    res.writeHead(500);
                    res.end('Server Error: index.html not found');
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            });
            return;
        }

        // Serve the static file
        const contentType = MIMES[ext] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': contentType });
        fs.createReadStream(filePath).pipe(res);
    });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
