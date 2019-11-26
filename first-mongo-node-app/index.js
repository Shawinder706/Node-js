const MongoClient=require('mongodb').MongoClient;
const assert=require("assert");

const url ='mongodb://127.0.0.1:27017/';
const dbname='conFusion';

MongoClient.connect(url,(err,client)=>{
    assert.equal(err,null);
    console.log('connected correctly to server');
    const db=client.db(dbname);
    const collection=db.collection("dishes");
    collection.insertOne({"name":"jhon","description":"test"},(err,result)=>{
        assert.equal(err,null);
        console.log("after insert: \n");
        console.log(result.ops);

        collection.find({}).toArray((err,doc)=>{
            assert.equal(err,null);
            console.log("Found \n");
            console.log(doc);
            db.dropCollection("dishes",(err,result)=>{
                assert.equal(err,null);
                client.close();
            })
        })
    })
})