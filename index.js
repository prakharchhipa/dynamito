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

    let msg = "  Check this after approximately " + (req.body.count*2)/60 + " minutes.  " + url;

    while (i < req.body.count) {
        /*let options = {
            'method': 'POST',
            'url': 'https://iccr4art.com/getResult.php',
            'headers': {
                'Accept': '*!/!*',
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
            res.end(response.body + msg);
        });*/
        let options = {
            'method': 'GET',
            'url': 'https://www.google.com/complete/search?q=new&cp=3&client=psy-ab&xssi=t&gs_ri=gws-wiz&hl=en-IN&authuser=0&psi=HGTFXsSGKqKP4-EP3d6Q2Ac.1589994525596',
            'headers': {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:76.0) Gecko/20100101 Firefox/76.0',
                'Accept': '*/*',
                'Accept-Language': 'en-US,en;q=0.5',
                'Referer': 'https://www.google.com/',
                'Connection': 'keep-alive',
                'Cookie': 'CGIC=CgtmaXJlZm94LWItZCJKdGV4dC9odG1sLGFwcGxpY2F0aW9uL3hodG1sK3htbCxhcHBsaWNhdGlvbi94bWw7cT0wLjksaW1hZ2Uvd2VicCwqLyo7cT0wLjg; 1P_JAR=2020-5-20-17; NID=204=fTY9L4QSzoTtugzJRCIeJ_ckOeaROQ1tQAkSBrRNDQREFvUIHQGwwaW6-gGGGdxzCLQnNjJcOoWjs0xRwUT2mX7obj17dX9cVqKwHw4qwSvvoYWhlV4kK9-Zh5cR3LhaOPJMncbYu68BgIRuZrCcIBGgT1tClTEZgVzRGXs-zEAYFNxJ-VNZhfrAhsfWa0Uw-zIoMmRu9UIAGeLFKTR93_hyMlAqNlPcItEnxXvJFBenMFhC41U9V88qhBYqZuxDwFu7YVFBG807u-UY_WGRiC1j7kejw0x_1g8rojiwi3f8; ANID=AHWqTUmjBDraND8x6iUSgTaKYNCeEQQ44NwWU9be1PpSMhNhT2dWXeIC9RrUX_QV; SID=wQfCg-jZlkMwwvlLD_7cPE2Wr48pPsynhMkfhKNosrUzWgrtdDjTNKexJRqLbL3Rn93IoQ.; HSID=AJp1ildCljnJQQHhT; SSID=AcEV1TvpxCn5v0PqX; APISID=nXpGKSHqKSMUHc89/Aj82geoF6x2PYgyBS; SAPISID=5J8rwNwscFnnCaIt/AoZPGInKXPZoKagNJ; SIDCC=AJi4QfHX3xGn9D7hIU09bVFPGYVt4su43inQkLPCMoDQFEx04ceqNpMwRUWI1Vd7QxvWzuSIC68; SEARCH_SAMESITE=CgQI2Y8B; __Secure-3PSID=wQfCg-jZlkMwwvlLD_7cPE2Wr48pPsynhMkfhKNosrUzWgrtvLrhNOwDT6cuZeWNF_03Cg.; __Secure-3PAPISID=5J8rwNwscFnnCaIt/AoZPGInKXPZoKagNJ; __Secure-HSID=AJp1ildCljnJQQHhT; __Secure-SSID=AcEV1TvpxCn5v0PqX; __Secure-APISID=nXpGKSHqKSMUHc89/Aj82geoF6x2PYgyBS; OTZ=5445424_34_34__34_; S=billing-ui-v3=QKTfaHWWXd6vOK-l-blYCNJTFKgDcu39:billing-ui-v3-efe=QKTfaHWWXd6vOK-l-blYCNJTFKgDcu39',
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache',
                'TE': 'Trailers'
            }
        };
        request(options, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
        });

        i++;
    }
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));


