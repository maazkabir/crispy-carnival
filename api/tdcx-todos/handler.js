const MONGO_URI = "mongodb+srv://testuser:test@cluster0.bf56q.mongodb.net/test?retryWrites=true&w=majority";

//connecting to db
let MongoClient = require("mongodb").MongoClient;

let cachedDb = null;

let dbType = process.env.MONGO_DB_NAME;

let _ = require("lodash");

exports.main = (event, context, callback) => {
    processEvent(event, context, callback);
};

async function processEvent(event, context, callback) {
    console.log(
      "Calling MongoDB from AWS Lambda with event: " +
        JSON.stringify(event.body)
    );
  
    //the following line is critical for performance reasons to allow re-use of database connections across calls to this Lambda function and avoid closing the database connection. The first call to this lambda function takes about 5 seconds to complete, while subsequent, close calls will only take a few hundred milliseconds.
    context.callbackWaitsForEmptyEventLoop = false;
  
    var jsonContents;
    try{
      if (JSON.stringify(event.body) == undefined) {
        jsonContents = event;
      }
      else {
        jsonContents = JSON.parse(event.body);
      }
    } catch (e) {
      console.log('Bad Request', e);
      callback(null, {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          message: "Bad Request",
          result: false
        }),
      });
    }
    
    console.log(jsonContents);
  
    try {
      if (cachedDb == null) {
        console.log("=> connecting to database");
        MongoClient.connect(
          MONGO_URI,
          { 
              useNewUrlParser: true,
              useUnifiedTopology: true
          },
          function(err, client) {
            console.log(err);
            console.log(client)
            cachedDb = client.db(dbType);
            return routeRequests(cachedDb, jsonContents, callback, event);
          }
        );
      } else {
        console.log("using cached db");
        return routeRequests(cachedDb, jsonContents, callback, event);
      }
    } catch (err) {
      console.log("ERROR", err);
    }
  }

function routeRequests(db, json, callback, event) {
    console.log(event.path)
    console.log(event.httpMethod)
    console.log(event)
    let authHeader = null;
	if (event.headers && event.headers["Authorization"]) {
		authHeader = event.headers["Authorization"].replace("Bearer ", "");
        event.headers["Authorization"] = authHeader;
	}
    console.log(authHeader)
    if(_.isEmpty(authHeader) && event.pathParameters.proxy !== "login"){
        callback(null, {
            statusCode: 400,
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              message: "Please add token to your request",
              result: false
            }),
          });
    }
    if(event.pathParameters.proxy === "login"){
        handleLogin(db, json, callback, event);
    } else if(event.pathParameters.proxy === "dashboard"){
        handleDashboard(db, json, callback, event);
    } else if(event.pathParameters.proxy === "tasks"){
        if(event.httpMethod === "GET"){
            getTasks(db, json, callback, event);
        } else if(event.httpMethod === "POST"){
            addTask(db, json, callback, event);
        } else if(event.httpMethod === "PUT"){
            updateTask(db, json, callback, event);
        } else if(event.httpMethod === "DELETE"){
            deleteTask(db, json, callback, event);
        } else {
            callback(null, {
                statusCode: 400,
                headers: {
                  "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                  message: "Bad Request",
                  result: false
                }),
              });
        }
    } else {
        callback(null, {
            statusCode: 400,
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              message: "Bad Request",
              result: false
            }),
          });
    }

}

const handleLogin = (db, json, callback, event) => {
    let agg = [
        {
            '$match': {
                'userName': String(json.userName).toLowerCase().trim()
            }
        },
    ];

    db.collection("tasks").aggregate(agg).toArray(function(err, result) {
        if (err != null || result.length <= 0) {
            console.log("ERROR");
    
            console.log("an error occurred", err);
    
            return callback(null, {
                statusCode: 401,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({error: "Unauthorized : username/token incorrect"})
                
            });
    
        }
    
        // Using the first value from the cursor callback
        result = result[0];
        return successCallback(event, callback, {
            result:true,
            data: result
        });
    });
}

const handleDashboard = (db, json, callback, event) => {
    let agg = [
        {
            '$match': {
                'token': String(event.headers["Authorization"])
            }
        },
    ];

    db.collection("tasks").aggregate(agg).toArray(function(err, result) {
        if (err != null || result.length <= 0) {
            console.log("ERROR");
    
            console.log("an error occurred", err);
    
            return callback(null, {
                statusCode: 401,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({error: "Unauthorized : username/token incorrect"})
                
            });
    
        }
    
        // Using the first value from the cursor callback
        result = result[0];
        let tasks = result.tasks;
        let latestTasks = _.takeRight(tasks, 3);
        let totalTasks = tasks.length;
        let tasksCount = _.countBy(tasks, "completed")
        console.log(tasksCount)


        return successCallback(event, callback, {
            result:true,
            data: {latestTasks, totalTasks, tasksCount}
        });
    });
}

const getTasks = (db, json, callback, event) => {
    let agg = [
        {
            '$match': {
                'token': String(event.headers["Authorization"])
            }
        },
    ];

    db.collection("tasks").aggregate(agg).toArray(function(err, result) {
        if (err != null || result.length <= 0) {
            console.log("ERROR");
    
            console.log("an error occurred", err);
    
            return callback(null, {
                statusCode: 401,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({error: "Unauthorized : username/token incorrect"})
                
            });
    
        }
    
        // Using the first value from the cursor callback
        result = result[0];
        return successCallback(event, callback, {
            result: true,
            data: result.tasks
        });
    });
}

const addTask = (db, json, callback, event) => {

    db.collection("tasks").findOneAndUpdate(
        { 'token': String(event.headers["Authorization"]) },
        { "$push": { "tasks": { id: new Date().valueOf(), name: json.name, completed: json.completed } } },
        { "returnOriginal": false },
        function(err, result) {
            if (err != null || result.length <= 0 || !result.value) {
                console.log("ERROR");
        
                console.log("an error occurred", err);
        
                return callback(null, {
                    statusCode: 401,
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                    },
                    body: JSON.stringify({error: "Unauthorized : username/token incorrect"})
                    
                });
        
            }
        
            // Using the first value from the cursor callback
            console.log(result)
            // result = result[0];
            return successCallback(event, callback, {
                result: true,
                data: result.value
            });
    });
}

const updateTask = (db, json, callback, event) => {

    db.collection("tasks").findOneAndUpdate(
        { 'token': String(event.headers["Authorization"]), "tasks.id" : Number(json.id) },
		{ "$set": { "tasks.$.name" : json.name, "tasks.$.completed" : json.completed } },
        { "returnOriginal": false },
        function(err, result) {
            if (err != null || result.length <= 0 || !result.value) {
                console.log("ERROR");
        
                console.log("an error occurred", err);
        
                return callback(null, {
                    statusCode: 401,
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                    },
                    body: JSON.stringify({error: "Unauthorized : username/token incorrect"})
                    
                });
        
            }
        
            // Using the first value from the cursor callback
            // result = result[0];
            return successCallback(event, callback, {
                result: true,
                data: result.value
            });
    });
}

const deleteTask = (db, json, callback, event) => {

    db.collection("tasks").findOneAndUpdate(
        {'token': String(event.headers["Authorization"]) },
		{ "$pull": { "tasks" : { "id": json.id } }},
        { "returnOriginal": false },
        function(err, result) {
            if (err != null || result.length <= 0 || !result.value) {
                console.log("ERROR");
        
                console.log("an error occurred", err);
        
                return callback(null, {
                    statusCode: 401,
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                    },
                    body: JSON.stringify({error: "Unauthorized : username/token incorrect"})
                    
                });
        
            }
        
            // Using the first value from the cursor callback
            // result = result[0];
            return successCallback(event, callback, {
                result: true,
                data: result.value
            });
    });
}

const successCallback = (event, callback, body) => {
	return callback(null, {
		statusCode: 200,
		headers: {
			"Access-Control-Allow-Origin": "*",
		},
		body: JSON.stringify(body),
	});
};