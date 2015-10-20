var express = require('express');
var app = express();

app.use(express.static('public'));


var stuff = {catURLs:["https://pbs.twimg.com/profile_images/424484505915621376/EOwsjaMZ_400x400.png",
    ,"http://25.media.tumblr.com/tumblr_m1v6y19gEH1rp17vmo1_500.jpg"
    ,"http://24.media.tumblr.com/tumblr_lwz63zbBH71qcq6gto1_500.jpg"
    ,"http://24.media.tumblr.com/tumblr_lpxo5tljVC1qfwg9lo1_500.jpg"
    ,"http://www.wpclipart.com/animals/cats/cat_photos/cat_face_striped_tabby_T.png"
    ,"http://www.cats.org.uk/uploads/images/news/early_neutering.jpg"
    ,"http://i.imgur.com/fHHOgDY.jpg"
    ,"http://i.ytimg.com/vi/z3U0udLH974/hqdefault.jpg"
    ,"http://viralportal.net/wp-content/uploads/2015/06/cc.jpg"
    ,"http://cdn.pet360.com/pet360/Content/Images/CMS/Slideshows/cms_resized_large/cats-that-stay-small1.lg.jpg"
    ,"http://i.imgur.com/yIaGy8Ob.jpg"
    ,"http://www.todayifoundout.com/wp-content/uploads/2010/03/kittens2.jpg"
    ,"https://s-media-cache-ak0.pinimg.com/236x/1d/ac/45/1dac4558616fa0c1c4b27f431a5e3a19.jpg"
    ,"http://dogshome.com/wp-content/uploads/2012/03/cat-adoption.jpg"
    ,"http://www.memrise.com/s3_proxy/?f=uploads/mems/4535567000130812033704.jpeg"
	,"http://images4.fanpop.com/image/photos/18000000/Adorable-kitties-kitties-18082645-570-558.jpg"]
}

app.get('/', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.send(stuff);
});




var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});