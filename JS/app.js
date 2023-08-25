let Name = prompt("Please write your name");
if (Name === "") {
    alert("Please write your Name");
} else {
    alert("Your name is " + Name)
}

let LastName = prompt('Please write your Last Name');
if (LastName === "") {
    alert("Please write your Last Name");
} else {
    alert("Your last name is " + LastName)
}

let Email = prompt('Please write your Email');
if (Email === "") {
    alert("Please write your Email");
} else {
    alert("Your email is " + Email)
}

function Quote (Services, Region, pricing)
{
    this.Services= Services;
    this.Region=Region;
    this.pricing=pricing;
}

let userServices = prompt('Please write Services required. Options are: Data Analysis Projects, Visualization Projects, Prediction models, Training and workshops or Full-day training');

while (userServices === "" || !['data analysis projects', 'visualization projects', 'prediction models', 'training and workshops', 'full-day training'].includes(userServices.toLowerCase())) {
    userServices = prompt('Please write a correct Service. Options are: Data Analysis Projects, Visualization Projects, Prediction models, Training and workshops or Full-day training');
}
const Services=userServices;

let userRegion = prompt('Please write your Region. Options are: North America, South America, Europe, Oceania and Africa');
while (userRegion === "" || !['north america', 'south america', 'europe', 'oceania', 'africa'].includes(userRegion.toLowerCase())) {
    userRegion = prompt('Please write a correct Region. Options are: North America, South America, Europe, Oceania or Africa');
}
const Region = userRegion;

function servicesPricing (Services) {
    switch(Services) {
        case 'data analysis projects':
        return 800;
        break;
        case 'visualization projects':
        return 600;
        case 'prediction models':
        return 700;
        break;
        case 'training and workshops':
        return 900;
        break;
        case 'full-day training':
        return 1000;
        break;
        default:
            return 0;
    }
}

function regionPricing (Region, basePrice) {
    switch(Region) {
        case 'north america':
            return basePrice+100;
        break;
        case 'south america':
            return basePrice+50;
        case 'europe':
            return basePrice+150;
        break;
        case 'oceania':
            return basePrice+50;
        break;
        case 'africa':
            return basePrice+100;
        break;
        default:
            return basePrice;
    }

}

const basePrice=servicesPricing(Services);
const pricing = regionPricing(Region, basePrice);
const quote = new Quote (Services,Region,pricing);
console.log("Quote:", quote);

alert("Name: "+Name+"\nLast name: "+LastName+"\nEmail: "+Email+"\nQuote Details.\nService: "+quote.Services+"\nRegion: "+quote.Region+"\nPricing: "+quote.pricing);
