const express = require('express');
const flow = express.Router();
var FLOW_COLLECTION = "flows";
var ObjectID = require('mongodb').ObjectID;

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

flow.get("", function(req, res) {
  db.collection(FLOW_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get flows.");
    } else {
      res.status(200).json(docs);
    }
  });
});

flow.get("/exchange/:exchange", function(req, res) {
  db.collection(FLOW_COLLECTION).find({exchange: req.params.exchange}).limit(100).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get flows.");
    } else {
      res.status(200).json(docs);
    }
  });
});


flow.get("/symbol/:symbol", function(req, res) {
  db.collection(FLOW_COLLECTION).findOne({symbol: req.params.symbol}, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get flows.");
    } else {
      res.status(200).json(doc);
    }
  });
});

flow.post("", function(req, res) {
  
  var newflow = req.body;
  newflow.createDate = new Date();

  db.collection(FLOW_COLLECTION).insertOne(newflow, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new flow.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

flow.get("/:id", function(req, res) {
  db.collection(FLOW_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get flow");
    } else {
      res.status(200).json(doc);
    }
  });
});

flow.put("/:id", function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(FLOW_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, {$set:{updateDoc}}, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update flow");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
});

flow.delete("/:id", function(req, res) {
  db.collection(FLOW_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete flow");
    } else {
      res.status(200).json(req.params.id);
    }
  });
});

module.exports = flow;