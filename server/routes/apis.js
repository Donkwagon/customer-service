const express = require('express');
var app = express();
const router = express.Router();

const flow =   require('./apis/flow.api');
router.use('/flow', flow);

const stage =   require('./apis/stage.api');
router.use('/stage', stage);

const rep =   require('./apis/rep.api');
router.use('/rep', rep);

const team =   require('./apis/team.api');
router.use('/team', team);


module.exports = router;