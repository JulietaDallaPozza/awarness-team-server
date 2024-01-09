const router = require("express").Router();
const eventbrite = require('eventbrite').default;;

router.get("/events", (req, res, next) => {
  const sdk = eventbrite({ token: '7UKASZVHNCGMSFL3N73R' });
  sdk.request('/events/search').then(resp => {
    console.log(resp)
    // res.json(resp)
  }).catch(error=>console.log(error))

});

module.exports = router;



