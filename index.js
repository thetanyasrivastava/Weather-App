import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;

const yourAPIKEY = process.env.API_KEY;
// console.log(yourAPIKEY);

app.use(express.static("public"));

app.get("/", (req,res) => {
    res.render("index.ejs" , { 
        weather: null,
        error: null,
        city: ""
    });
    // res.send("Weather Home Page")
})

app.get("/getWeather", async(req, res) => {
    const city = req.query.city;
    try{
        // const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Hazaribag&appid=${yourAPIKEY}&units=metric`);

        const result = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${yourAPIKEY}&units=metric`);
            
        const actualData=
        {
            city: result.data.name,
            weather: result.data.main.temp,
            desc: result.data.weather[0].description,
            main: result.data.weather[0].main
        };
        res.render("index.ejs", { 
            weather: actualData, 
            error: null,
            city
        });

        // res.send(actualData);
        // res.json(actualData);
    }
    catch(error){
        console.log('error');
        
        res.render("index.ejs", {
            weather: null,
            error: city + " - City Not Found!",
            city
        });
        // res.status(500).send(error.message);
    }
})

app.get("/searchCities", async(req,res) => {
    const query = req.query.q;      //query = whatever user is typing in search box

    try{
        const result = await axios.get(
            `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${yourAPIKEY}`);
            //Geocoding API from OpenWeatherMap

        res.json(result.data);  //send suggestions
    } 
    catch(error){
        console.log('Error in searchcities');
        res.json([]);
    }
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})