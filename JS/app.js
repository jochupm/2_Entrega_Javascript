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

let Services = prompt('Please write Services required. Options are: Data Analysis Projects, Visualization Projects, Prediction models, Training and workshops or Full-day training');
while (Services === "" || !['data analysis projects', 'visualization projects', 'prediction models', 'training and workshops', 'full-day training'].includes(Services.toLowerCase())) {
    Services = prompt('Please write a correct Service. Options are: Data Analysis Projects, Visualization Projects, Prediction models, Training and workshops or Full-day training');
}
const selectedService = Services;

let Region = prompt('Please write your Region. Options are: North America, South America, Europe, Oceania and Africa');
while (Region === "" || !['north america', 'south america', 'europe', 'oceania', 'africa'].includes(Region.toLowerCase())) {
    Region = prompt('Please write a correct Region. Options are: North America, South America, Europe, Oceania or Africa');
}
const selectedRegion = Region;

const pricing = {
    'data analysis projects': {
        'asia': 800,
        'north america': 850,
        'south america': 700,
        'africa': 700,
        'europe': 850,
        'oceania': 850
    },
    'visualization projects': {
        'asia': 400,
        'north america': 450,
        'south america': 350,
        'africa': 350,
        'europe': 450,
        'oceania': 450
    },
    'prediction models': {
        'asia': 750,
        'north america': 800,
        'south america': 700,
        'africa': 700,
        'europe': 800,
        'oceania': 800
    },
    'training and workshops': {
        'asia': 400,
        'north america': 450,
        'south america': 350,
        'africa': 350,
        'europe': 450,
        'oceania': 450
    },
    'full-day training': {
        'asia': 950,
        'north america': 975,
        'south america': 850,
        'africa': 850,
        'europe': 975,
        'oceania': 975
    }
};

const quotation = pricing[selectedService.toLowerCase()][selectedRegion.toLowerCase()];
alert("Name: "+Name+"\nLast name: "+LastName+"\nEmail: "+Email+`\nYour service required is ${selectedService}\nYour Region is ${selectedRegion}\nAmount: $${quotation}`);
