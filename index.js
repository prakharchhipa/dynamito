const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

let bodyParser = require('body-parser');

let request = require('request');

let urlencodedParser = bodyParser.urlencoded({ extended: false });

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
  })
  .post('/process_post', urlencodedParser, function (req, res) {
    let i = 0;
    let url = req.body.url;
    let id = url.split("=")[1];

    let msg = "  Check this after approximately " + Math.round((req.body.count*2)/60) + " minutes.  " + url;

    while (i < req.body.count) {
        let options = {
            'method': 'POST',
            'url': 'https://iccr4art.com/getResult.php',
            'headers': {
                'Accept': '*/*',
                'Content-Type': ['application/x-www-form-urlencoded; charset=UTF-8', 'text/plain'],
                'Origin': 'https://iccr4art.com',
                'Referer': url,
                'TE': 'Trailers'
            },
            body: "id="+ id +"&type=like"

        };
        request(options, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
        });
        i++;
    }
    res.send(msg);
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));


