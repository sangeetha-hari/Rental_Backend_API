import { client } from "./index.js";

export async function getAlluser() {
    const result = await client.db("rental").collection("userlogin").find().toArray();
    return result;
}

export async function genUserByEmail(name) {
    console.log("this is in getUserByEmail function");
    const result = await client.db("rental").collection("userlogin").findOne({ email: name });
    return (result);
  }

  export async function createNewuser(newuser){
    console.log("this is insert function");
    console.log(newuser);
    const result= await client.db("rental").collection("userlogin").insertOne(newuser);
    return result;
  }

  export async function userUpdateToken(name,randstring) {
    console.log("this is update function");
    const result= await client.db("rental").collection("userlogin").updateOne({email:name},{$set:{token:randstring}});
    return (result);
  }

  export async function getUserByToken(token) {
    console.log("this is in getUserBytoken function");
    const result = await client.db("rental").collection("userlogin").findOne({ token: token });
    return (result);
  }
  export async function userUpdateActive(name,act) {
    console.log("this is update function");
    const result= await client.db("rental").collection("userlogin").updateOne({email:name},{$set:{active:act}});
    return (result);
  }

  export async function userUpdatePassword(name,hasedpass) {
    console.log("this is update function");
    const result= await client.db("rental").collection("userlogin").updateOne({email:name},{$set:{password:hasedpass}});
    return (result);
  }

  

