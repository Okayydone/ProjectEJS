import express from "express";

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    const dayToday = new Date().getDay();
    let day = "weekday";
    let adv = "you have to go to job.";

    if(dayToday == 0 || dayToday == 6){
         day = "weekend";
         adv = "you don't have to go to job.";
    };

    res.render("index.ejs" , {
        day : day ,
        advice : adv ,
    });
});


app.listen(port , ()=>{
    console.log(`Your sever is running on port ${port}.`);

})