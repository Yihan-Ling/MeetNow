import express from 'express';
import path from 'path';
import * as url from 'url';
import cors from 'cors';
import mongoose from 'mongoose';

// Setup Express
const app = express();
const port = process.env.PORT || 3000;

// CORS - enable all (not fantastic for security)
app.use(cors());

// Setup JSON parsing for the request body
app.use(express.json());

// Setup our routes.

// When we make a GET request to '/hello', send back this HTML content.
// app.get('/hello', (req, res) => {
//     res.status(200).contentType('text/html').send(
//         `<!DOCTYPE html>
//         <html>
//             <head>
//                 <title>Served from an Express endpoint!</title>
//             </head>
//             <body>
//                 <h1>Hello, Express!</h1>
//                 <p>This HTML content was served from an Express endpoint!</p>
//             </body>
//         </html>`
//     );
// });

// When we make a GET request to '/api', send back this JSON content.
// Uses the "name" query param e.g. http://localhost:3000/api?name=Clara
// app.get('/api', (req, res) => {
//     res.json({
//         greeting: 'Hello, world!',
//         name: req.query.name
//     });
// });

import routes from './routes';
app.use('/', routes);


// Make the "public" folder available statically
app.use(express.static(path.join(url.fileURLToPath(new URL('.', import.meta.url)), 'public')));

// Start the server running. Once the server is running, the given function will be called, which will
// log a simple message to the server console. Any console.log() statements in your node.js code
// can be seen in the terminal window used to run the server.

mongoose.connect("mongodb://127.0.0.1:27017/MeetNow", { useNewUrlParser: true })
    .then(() => app.listen(port, () => console.log(`App server listening on port ${port}!`)));
