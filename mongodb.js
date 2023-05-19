const { MongoClient, ObjectID } = require("mongodb");
const mongodbClient = MongoClient;

const id = new ObjectID();

// console.log(9999, id.getTimestamp());

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

mongodbClient.connect(
  connectionUrl,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }

    const db = client.db(databaseName);

    db.collection("tasks").insertOne(
      {
        _id: id,
        description: "clean ",
        completed: false,
      },
      (error, result) => {
        if (error) {
          return console.log("Unable to inset documents ");
        }

        console.log(9999, id.id.length);
        // console.log(9999, id.toHexString().length);
        // console.log(result.ops);
      }
    );

    // db.collection("task").insertMany(
    //   [
    //     {
    //       description: "clean ",
    //       completed: false,
    //     },
    //     {
    //       description: "coding ",
    //       completed: true,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to inset documents ");
    //     }

    //     console.log(result.ops);
    //     // console.log(error);
    //   }
    // );
  }
);
