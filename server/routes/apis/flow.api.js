const express = require('express');
const flow = express.Router();
var flow_COLLECTION = "flows";
var ObjectID = require('mongodb').ObjectID;

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

flow.get("", function(req, res) {

  db.collection(flow_COLLECTION).aggregate([
    { $sort: { createDate : -1 } }, 
    { $lookup:{
        from: USER_COLLECTION,
        localField: "uid",
        foreignField: "uid",
        as: "user"
      }
    }]).toArray(function(err, docs) {
      
      if (err) {
        handleError(res, err.message, "Failed to get flows.");
      } else {
        res.status(200).json(docs);
      }
      
  });
  
});

flow.post("", function(req, res) {
  
  var newflow = req.body;
  newflow.createDate = new Date();import { Injectable } from '@angular/core';
import { Post } from '../classes/post';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class PostService {

  private url = '/apis/post';

  constructor (private http: Http) {}

  createPost(post: any): Promise<Post | void> {
    return this.http.post(this.url + '/', post)
                .toPromise()
                .then(response => response.json() as Post)
                .catch(this.handleError);
  }

  getPosts(): Promise<Post[] | void> {
    return this.http.get(this.url + '/')
                .toPromise()
                .then(response => response.json() as Post[])
                .catch(this.handleError);
  }

  getPostsByUser(id): Promise<Post[] | void> {
    return this.http.get(this.url + '/u/' + id)
                .toPromise()
                .then(response => response.json() as Post[])
                .catch(this.handleError);
  }


  getPost(id: String): Promise<Post | void> {
    return this.http.get(this.url + '/' + id)
                .toPromise()
                .then(response => response.json() as Post)
                .catch(this.handleError);
  }


  private handleError (error: any) {
    const errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}
  db.collection(flow_COLLECTION).insertOne(newflow, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new flow.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

flow.get("/:id", function(req, res) {
  db.collection(flow_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get flow");
    } else {
      res.status(200).json(doc);
    }
  });
});

flow.get("/u/:uid", function(req, res) {
  db.collection(flow_COLLECTION).find({uid: req.params.uid}).toArray(function(err, doc) {
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

  db.collection(flow_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, {$set:{updateDoc}}, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update flow");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
});

flow.delete("/:id", function(req, res) {
  db.collection(flow_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete flow");
    } else {
      res.status(200).json(req.params.id);
    }
  });
});

module.exports = flow;