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

    // -------------Insert Document--------------------------------------------
    // ---------------------------------------------------------

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "kd",
    //       age: 21,
    //     },
    //     {
    //       name: "br",
    //       age: 25,
    //     },
    //     {
    //       name: "lg",
    //       age: 30,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to inset documents ");
    //     }

    //     console.log(result.ops);
    //   }
    // );

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

    // ---------------------Find Documents--------------------------------
    // -----------------------------------------------------

    // db.collection("tasks").findOne(
    //   { _id: ObjectID("6466ea93cc9fce31b0ffbf81") },
    //   (error, result) => {
    //     console.log("err", result);
    //   }
    // );

    // db.collection("users").findOne(
    //   { _id: ObjectID("6466ed0f005f262f5cfde6d4") },
    //   (error, result) => {
    //     console.log("err", result);
    //   }
    // );

    // db.collection("tasks")
    //   .find({ completed: true })
    //   .toArray((error, result) => {
    //     console.log(result);
    //   });

    // db.collection("tasks")
    //   .find({ completed: true })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ---------------------Promises---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // const test = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve("done");
    //     reject("failed");
    //   }, 1000);
    // });

    // test
    //   .then((res) => {
    //     console.log("✅ res", res);
    //   })
    //   .catch((error) => {
    //     console.log("error 🔥", error);
    //   });

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ---------------------Update---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: ObjectID("6466ed27b3a1b63dc871bddd"),
    //     },
    //     {
    //       $set: {
    //         name: "Mike",
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log("result", result.ops);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // Update Many

    // db.collection("tasks")
    //   .updateMany(
    //     {
    //       completed: true,
    //     },

    //     { $set: { completed: false } }
    //   )
    //   .then((result) => {
    //     console.log("result", result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // ---------------------Delete---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // Delete Many
    db.collection("users")
      .deleteMany({
        age: 21,
      })
      .then(
        (result = () => {
          console.log(result);
        })
      )
      .catch((error) => {
        console.log("error", error);
      });
    // Delete One

    db.collection("users")
      .deleteOne({
        _id: ObjectID("6466ecfadeb7d130942db81e"),
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
