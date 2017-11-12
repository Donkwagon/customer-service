const express = require('express');
const team = express.Router();
var team_COLLECTION = "teams";
var ObjectID = require('mongodb').ObjectID;

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

team.get("", function(req, res) {
  db.collection(team_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get teams.");
    } else {
      res.status(200).json(docs);
    }
  });
});

team.get("/exchange/:exchange", function(req, res) {
  db.collection(team_COLLECTION).find({exchange: req.params.exchange}).limit(100).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get teams.");
    } else {
      res.status(200).json(docs);
    }
  });
});


team.get("/symbol/:symbol", function(req, res) {
  db.collection(team_COLLECTION).findOne({symbol: req.params.symbol}, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get teams.");
    } else {
      res.status(200).json(doc);
    }
  });
});

team.post("", function(req, res) {
  
  var newteam = req.body;
  newteam.createDate = new Date();

  db.collection(team_COLLECTION).insertOne(newteam, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new team.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

team.get("/:id", function(req, res) {
  db.collection(team_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get team");
    } else {
      res.status(200).json(doc);
    }
  });
});

team.put("/:id", function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(team_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, {$set:{updateDoc}}, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update team");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
});

team.delete("/:id", function(req, res) {
  db.collection(team_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete team");
    } else {
      res.status(200).json(req.params.id);
    }
  });
});

module.exports = team;