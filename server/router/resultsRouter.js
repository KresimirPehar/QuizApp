const express = require('express');

const resultsRouter = express.Router();
const ResultSchema = require('../database/model/resultSchema');

resultsRouter.route('/saveResults').post((req, res) => {
  let result;
  const [name, date, userSelections] = [
    req.body.userName,
    req.body.date,
    req.body.userSelections
  ];
  if (Math.abs(req.body.fePoints - req.body.bePoints) < 3)
    result = 'Full stack developer';
  else if (req.body.fePoints > req.body.bePoints) result = 'Frontend developer';
  else result = 'Backend developer';

  const results = new ResultSchema({
    name,
    date,
    result,
    userSelections
  });
  results
    .save()
    .then(() => console.log('Saved to the databse'))
    .catch(err => console.log(`Can't save to the database:`, err));

  res.json({ name, date, result, path: '/result' });
});

resultsRouter.route('/getResults').get((req, res) => {
  ResultSchema.find({}, (err, results) => {
    if (err) res.send('error:', err);
    res.send(results);
  });
});

module.exports = resultsRouter;
