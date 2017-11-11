const express = require('express');
var app = express();
const router = express.Router();

const flow =   require('./apis/flow.api');
router.use('/flow', flow);

const node =   require('./apis/node.api');
router.use('/node', node);

const rep =   require('./apis/rep.api');
router.use('/rep', rep);

const team =   require('./apis/team.api');
router.use('/team', team);


module.exports = router;