const listingMediaData = require('./listingMediaData.js')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/media', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

  let mediaSchema = new mongoose.Schema({
    photos: [String],
    beds: Number,
    baths: Number,
    street_view: String,
    threeD_room_view: String
  });

  let MediaListings = mongoose.model('MediaListings', mediaSchema);

  let randomMedia = () => {
    let randomIndex = Math.floor(Math.random() * 5);
    return listingMediaData[randomIndex];
  };

  let randomBeds = () => (
    Math.ceil(Math.random() * 5)
  );

  let randomBaths = () => (
    (Math.random() < .5) ? Math.ceil(Math.random() * 5) + 1 : Math.ceil(Math.random() * 5) + 0.5
  );

  let listing = () => {
    var data = randomMedia();

    return new MediaListings({
      photos: data.photos,
      beds: randomBeds(),
      baths: randomBaths(),
      street_view: data.streetView,
      threeD_room_view: data.roomView
    });
  };

  let listingData = [];

  while (listingData.length < 100) {
    listingData.push(listing());
  }

  MediaListings.insertMany(listingData, function (error, docs) {
    if (error) {
      console.log('did not upload');
    } else {
      console.log(docs);
    }
  });
});