const express = require('express');
const date = require(__dirname+'/GetDate.js');

const app = express();
app.use(express.static('public'));

app.get('/', (request, response)=>{
    response.send('Hello, world!');
});

app.get('/getdate', (req, res)=> { //req - request, res - response
    let today = date.getDate();
    res.send(today);
});

app.get('/weekday', (req, res) => {
    let weekday = date.getWeekDay();
    res.send(weekday);
}

app.get('*', (req, res)=> {
    res.sendFile(__dirname+'(404.html');
});


port = 3000;
app.listen(port, ()=> {
    console.log(`Server is running on port ${port}.`);
});

var formatThousandsNoRounding = function(n, dp){
    var e = '', s = e+n, l = s.length, b = n < 0 ? 1 : 0,
        i = s.lastIndexOf(','), j = i == -1 ? l : i,
        r = e, d = s.substr(j+1, dp);
    while ( (j-=3) > b ) { r = '.' + s.substr(j, 3) + r; }
    return s.substr(0, j + 3) + r + 
      (dp ? ',' + d + ( d.length < dp ? 
          ('00000').substr(0, dp - d.length):e):e);
  };
  
  var hasRun = false;
  
  inView('#countUp').on('enter', function() {
      if (hasRun == false) {
          $('.number').each(function() {
              var $this = $(this),
                  countTo = $this.attr('data-count');
  
              $({ countNum: $this.text()}).animate({
                  countNum: countTo
              },
              {
                  duration: 2000,
                  easing:'linear',
                  step: function() {
                      $this.text(formatThousandsNoRounding(Math.floor(this.countNum)));
                  },
                  complete: function() {
                      $this.text(formatThousandsNoRounding(this.countNum));
                  }
              });
          });
          hasRun = true;
      }
  });