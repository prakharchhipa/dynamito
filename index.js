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
  .post('/process_post', urlencodedParser, function (req, res) {
    let i = 0;
    let url = req.body.url;
    let id = url.split("=")[1];

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
            res.end(response.body);
        });

        i++;
    }
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));


