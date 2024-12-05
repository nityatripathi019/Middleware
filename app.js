
const express = require("express");
const app = express();
const port = 8080;
const ExpressError = require("./Expresserror");
const checktoken = (req,res,next)=>{
    let {token}= req.query;
    if(token ==="giveaccess"){
       return next();
    }
    throw new ExpressError(401,"ACCESS DENIED!");
}

app.get("/api",checktoken,(req,res)=>{
    res.send("data");
})


app.get("/err",(req,res)=>{
    abcd = abcd ;
})

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access is forbidden");
})


app.use((err,req,res,next)=>{
    let{status = 500,message="Some internal server error"}=err;
   res.status(status).send(message);
})

// app.use((err,req,res,next)=>{
//     console.log("------Error2-----");
//     next(err);
// })

app.listen(port,()=>{
console.log(`listening on port ${port}`); })

// //writing our 1st custom middleware

// // app.use((req,res,next)=>{
// //     console.log("HI,I AM MIDDLEWARE");
// //     // res.send("this is middleware");
// //     next();
// // })

// //logger file:ye vo file hoti h jisme hm sare methods k bare me lkhte h kikb get request ki kis route pe ki h similarly post bgera sb to ye sb cheeje hm logger file me rakhte h 

// //logger - morgan 
// // app.use((req,res,next)=>{
// //     // console.log(req);
// //     req.time = new Date (Date.now());
// //     console.log(req.method,req.hostname,req.path,req.time);
// //     next();
// // })

// //path specified middleware

// app.use("/random",(req,res,next)=>{ //ab ye middleware sirf /random route k liye hi execute hoga bakiyo k liye nhi
//  console.log("Hi,I am middleware")
//  next();
// })

// //creating a middleware for api route

// app.use("/api",(req,res,next)=>{
//     let{token}=req.query;
//     if(token==="giveaccess"){
//       return  next();
//     }
//         res.send("ACCESS DENIED!");
    
// })


// app.get("/api",(req,res)=>{
//     res.send("data");
// })

// app.get("/random",(req,res)=>{
//     res.send("hello this is random page");
//     // console.log('this is random page');
// })

// app.get("/home",(req,res)=>{
//     res.send("hello this is home route");
// })

// //404 
// app.use((req,res)=>{
//    res.status(404).send("page not found");
// })
// //all about middlewares
// //middleware can do several things like:
// // they can excute the code
// // can make changes to response request cycle
// //can end the response req cycle
// //call the next middleware for the stack
// //middleware hmesha run krte h irespective hmari requst h bhi ya nhi ya hmne glt query bhi daal di tbhi vo run krte h
// //middleware ko hm kbhi last me nhi krte kyunki fir vo  res phle hi route k through chlajayega to usko kbhi reach hi nhi kr payega
// //middleware k andr hm do cheeje specify krte h ek path dura callback fn agr hm koi path specify nhi krenge to vo hr path k liye execute aur agr specify kr diya to sirf ussi route/path k liye execute hoga