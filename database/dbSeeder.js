var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/media', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

  var mediaSchema = new mongoose.Schema({
    photos : [String],
    beds : Number,
    baths : Number,
    street_view : String,
    threeD_room_view: String,
    threeD_plan_view : String
  });

  var MediaListings = mongoose.model('MediaListings', mediaSchema);

  var randomRoom = function () {
    return Math.floor(Math.random() * 6)
  };

  var listing = function () {
    return new MediaListings({
      photos : ['photo_url_one', 'photo_url_two', 'photo_url_three', 'photo_url_three'],
      beds : randomRoom(),
      baths : randomRoom(),
      street_view : 'https://www.google.com/maps/@37.7882659,-122.3984396,3a,75y,201.23h,76.07t/data=!3m7!1e1!3m5!1s-Aj92Dv9q97nvQFQcaiXyg!2e0!6s%2F%2Fgeo0.ggpht.com%2Fcbk%3Fpanoid%3D-Aj92Dv9q97nvQFQcaiXyg%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D87.42118%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192',
      threeD_room_view : 'https://my.matterport.com/show/?m=GFpbgiP95CE&play=1&qs=1&tiles=1&vr=0&title=0&help=2&tourcta=2&hlr=2&rf-experience=desktop-mb-next-photo',
      threeD_plan_view : 'https://yantramstudio.com/images/rendering/thumb/floor-plan/residential-floor-plan.png'
    });
  };

  var listingData = [];

  while (listingData.length < 100) {
    listingData.push(listing())
  }

  MediaListings.insertMany(listingData, function (error, docs) {
    if (error) {
      console.log('did not upload');
    } else {
      console.log(docs);
    }
  });
});