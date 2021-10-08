import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/news-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to database');
}).catch(() => {
  console.log('Unable to connevt to database', error);
});