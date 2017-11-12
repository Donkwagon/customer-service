const express = require('express');
const rep = express.Router();
var rep_COLLECTION = "reps";
var ObjectID = require('mongodb').ObjectID;

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

rep.get("", function(req, res) {
  db.collection(rep_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get reps.");
    } else {
      res.status(200).json(docs);
    }
  });
});

rep.get("/exchange/:exchange", function(req, res) {
  db.collection(rep_COLLECTION).find({exchange: req.params.exchange}).limit(100).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get reps.");
    } else {
      res.status(200).json(docs);
    }
  });
});


rep.get("/symbol/:symbol", function(req, res) {
  db.collection(rep_COLLECTION).findOne({symbol: req.params.symbol}, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get reps.");
    } else {
      res.status(200).json(doc);
    }
  });
});

rep.post("", function(req, res) {
  
  var newrep = req.body;
  newrep.createDate = new Date();

  db.collection(rep_COLLECTION).insertOne(newrep, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new rep.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

rep.get("/:id", function(req, res) {
  db.collection(rep_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get rep");
    } else {
      res.status(200).json(doc);
    }
  });
});

rep.put("/:id", function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(rep_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, {$set:{updateDoc}}, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update rep");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
});

rep.delete("/:id", function(req, res) {
  db.collection(rep_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete rep");
    } else {
      res.status(200).json(req.params.id);
    }
  });
});

module.exports = rep;