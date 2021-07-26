//This file is not required in the final part but it is just an examle  of how an mongodb can be implemented


//CRUD stands for create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const  ObjectID = mongodb.ObjectID

//destructured the require modules and required objects
const{ MongoClient , ObjectID} = require('mongodb')

const connectonURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'



//*************************************************************** */
//Connecting to the Local Host(MongoDB) 
MongoClient.connect(connectonURL,{useNewUrlParser: true , useUnifiedTopology: true},(error, client)=>{
    if(error){
        return console.log("Unable to connect to databse")
    }

    const db = client.db(databaseName)

    //******************************************************************************* */
    //Insert example
    // db.collection('users').insertOne({
    //     name: 'Ajay',
    //     age: 24    
    // },(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert one')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Hiranmoyee',
    //         age: 23
    //     },
    //     {
    //         name: 'Tomnoy',
    //         age: 25
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('task').insertMany([
    //     {
    //         description: 'clean the house',
    //         completed: true
    //     },
    //     {
    //         description: 'Study daily',
    //         completed: false
    //     },
    //     {
    //         description: 'Wake up early daily',
    //         completed: false
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })




    
    //************************************************************************************** */
    //Update Example
    //promise example
    // db.collection('users').updateOne({
    //     _id: new ObjectID("60edd3d31c147019f06614a7")
    // },{
    //     $set:{
    //         name: 'Hiranmoyee Dihingia'
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("60edd3d31c147019f06614a7")
    // },{
    //     $inc:{
    //         age: 1
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })


    // db.collection('task').updateMany({
    //     completed: false
    // },{
    //     $set:{
    //         completed: true
    //     }
    // }).then((result)=>{
    //     console.log(result.modifiedCount)
    // }).catch((error)=>{
    //     console.log(error)
    // })



    //************************************************************************************8 */
    //Find example
    // db.collection('users').findOne({name: 'Anshuman'},(error, user)=>{
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').findOne({_id: new ObjectID("60edd1e92a45cc4a84cd8209")},(error, user)=>{
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({ age: 24 }).toArray((error, users)=>{
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 24 }).count((error, count)=>{
    //     console.log(count)
    // })

    // db.collection('task').findOne({_id: new ObjectID("60edd52b201e210300827eb6")},(error, task)=>{
    //         if(error){
    //              return console.log('Unable to fetch')
    //          }
    //          console.log(task)
    //      })

    //  db.collection('task').find({ completed: false }).toArray((error, task)=>{
    //          console.log(task)
    //     })

    


    //************************************************************************** */
    //Delete example
    // db.collection('users').deleteMany({
    //     age:25
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('users').deleteOne({
    //     name: 'Ajay'
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })
})