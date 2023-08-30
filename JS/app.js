let Name = prompt("Please write your name");
if (Name === "") {
    alert("Please write your Name");
} else {
console.log(Name)
}

let LastName = prompt('Please write your Last Name');
if (LastName === "") {
    alert("Please write your Last Name");
} else {
    console.log(LastName)
}

let Email = prompt('Please write your Email');
if (Email === "") {
    alert("Please write your Email");
} else {
    console.log(Email)
}


let userServices = prompt('Please write Services required. Options are: Data Analysis Projects, Visualization Projects, Prediction models, Training and workshops or Full-day training');

while (userServices === "" || !['data analysis projects', 'visualization projects', 'prediction models', 'training and workshops', 'full-day training'].includes(userServices.toLowerCase())) {
    userServices = prompt('Please write a correct Service. Options are: Data Analysis Projects, Visualization Projects, Prediction models, Training and workshops or Full-day training');
}

let userRegion = prompt('Please write your Region. Options are: North America, South America, Europe, Oceania and Africa');
while (userRegion === "" || !['north america', 'south america', 'europe', 'oceania', 'africa'].includes(userRegion.toLowerCase())) {
    userRegion = prompt('Please write a correct Region. Options are: North America, South America, Europe, Oceania or Africa');
}


class Quote {
    constructor(Services, Region, Pricing) {
        this.Services = Services;
        this.Region = Region;
        this.Pricing = parseFloat(Pricing);
    } 
}

const Quotes = [];
Quotes.push(new Quote("data analysis projects", "north america", 900));
Quotes.push(new Quote("data analysis projects", "south america", 850));
Quotes.push(new Quote("data analysis projects", "europe", 950));
Quotes.push(new Quote("data analysis projects", "oceania", 850));
Quotes.push(new Quote("data analysis projects", "africa", 900));
Quotes.push(new Quote("visualization projects", "north america", 700));
Quotes.push(new Quote("visualization projects", "south america", 650));
Quotes.push(new Quote("visualization projects", "europe", 750));
Quotes.push(new Quote("visualization projects", "oceania", 650));
Quotes.push(new Quote("visualization projects", "africa", 700));
Quotes.push(new Quote("prediction models", "north america", 800));
Quotes.push(new Quote("prediction models", "south america", 750));
Quotes.push(new Quote("prediction models", "europe", 850));
Quotes.push(new Quote("prediction models", "oceania", 750));
Quotes.push(new Quote("prediction models", "africa", 800));
Quotes.push(new Quote("training and workshops", "north america", 1000));
Quotes.push(new Quote("training and workshops", "south america", 950));
Quotes.push(new Quote("training and workshops", "europe", 1050));
Quotes.push(new Quote("training and workshops", "oceania", 950));
Quotes.push(new Quote("training and workshops", "africa", 1000));
Quotes.push(new Quote("full-day training", "north america", 1100));
Quotes.push(new Quote("full-day training", "south america", 1050));
Quotes.push(new Quote("full-day training", "europe", 1150));
Quotes.push(new Quote("full-day training", "oceania", 1050));
Quotes.push(new Quote("full-day training", "africa", 1100));

const matchingQuote = Quotes.find(quote => quote.Services === userServices.toLowerCase() && quote.Region === userRegion.toLowerCase());

if (matchingQuote) {
    alert("User Information\nName: " + Name + "\nLast name: " + LastName + "\nEmail: " + Email + "\nQuote Details\nService: " + matchingQuote.Services + "\nRegion: " + matchingQuote.Region + "\nPricing: " + matchingQuote.Pricing);
} else{
    alert("ERROR. Run this program again");
}
