const express = require('express');
const stage = express.Router();
var STAGE_COLLECTION = "stages";
var ObjectID = require('mongodb').ObjectID;

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

stage.get("", function(req, res) {
  db.collection(STAGE_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get stages.");
    } else {
      res.status(200).json(docs);
    }
  });
});

stage.get("/parent/:parentId", function(req, res) {
  db.collection(STAGE_COLLECTION).find({parentId: req.params.parentId}).limit(100).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get stages.");
    } else {
      res.status(200).json(docs);
    }
  });
});


stage.get("/parent/:parentId", function(req, res) {
  db.collection(STAGE_COLLECTION).findOne({symbol: req.params.symbol}, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get stages.");
    } else {
      res.status(200).json(doc);
    }
  });
});

stage.post("", function(req, res) {
  
  var newstage = req.body;
  newstage.createDate = new Date();

  db.collection(STAGE_COLLECTION).insertOne(newstage, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new stage.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

stage.get("/:id", function(req, res) {
  db.collection(STAGE_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get stage");
    } else {
      res.status(200).json(doc);
    }
  });
});

stage.put("/:id", function(req, res) {
  var updateDoc = req.body;
  console.log(updateDoc);
  delete updateDoc._id;

  db.collection(STAGE_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update stage");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
});

stage.delete("/:id", function(req, res) {
  db.collection(STAGE_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete stage");
    } else {
      res.status(200).json(req.params.id);
    }
  });
});

module.exports = stage;