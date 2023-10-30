{/*In server.js, I went to express js, to the hello world example */}
const express = require('express')
const app = express();
const port = 3000
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


{/*In server.js, I changed the ”/name” route to accept the name variable as a URL encoded GET variable. Run
the server and test*/}
app.get('/name', (req,res) =>{
    console.log(req.query.fname);
    res.send('Hello' + req.query.fname + " " + req.query.lname);
})

{/* The app.post() function routes the HTTP POST requests to the specified path with the specified callback functions. */}
app.post('/name',(req,res)=>{
    res.send('Hello '+req.body.fmame+' '+req.body.lname);
})

{/* The app.get() function routes the HTTP GET Requests to the path which is being specified with the specified callback functions. */}
app.get('/', (req, res) => {
  res.send('Welcome to Data Representation & Querying')
})


app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('hello' +req.params.name);
  })


{/* The app.listen() function is used to bind and listen to the connections on the specified host and port.  */}
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


      
{/*I added a route point /api/books that will return the following json data*/}
app.get('/api/books', (req, res) => {
    const data = [
        {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
        "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },
        {
        "title": "Getting MEAN with Mongo, Express, Angular, and Node",
        "isbn": "1617292036",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
        "status": "MEAP",
        "authors": ["Simon Holmes"],
        "categories": []
        }

        ];
        res.status(200).json({
            mybooks:data
        })
})

{/* I added another route /test that returns a html page when Queried. My file would be called
index.html.*/}

app.get('/test', (req,res) =>{
    res.sendFile(path.join(__dirname+'/index.html'));
})
