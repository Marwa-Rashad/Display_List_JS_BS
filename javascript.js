//Array of objects
const movies = [

   {
        name: "Ford V Ferrari",
        img: '../images/1.jpg',
        price: "300 USD",
        desc: 'American automotive designer Carroll Shelby and fearless British race car driver Ken Miles battle corporate interference, the laws of physics and their own personal demons to build a revolutionary vehicle for the Ford Motor Co. Together, they plan to compete against the race cars of Enzo Ferrari at the 24 Hours of Le Mans in France in 1966.'

    },

  {
        name: "The Irishman",
        img: '../images/2.jpg',
        price: "600 USD",
        desc: 'In the 1950s, truck driver Frank Sheeran gets involved with Russell Bufalino and his Pennsylvania crime family. As Sheeran climbs the ranks to become a top hit man, he also goes to work for Jimmy Hoffa -- a powerful Teamster tied to organized crime.'
    },

 {
        name: "Joker",
        img: '../images/3.jpg',
        price: "800 USD",
        desc: 'Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he is part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slowdescnt into madness as he transforms into the criminal mastermind known as the Joker.'
    },

{
        name: "Marriage Story",
        img: '../images/4.jpg',
        price: "1500 USD",
        desc: 'A stage director and his actor wife struggle through a gruelling, coast-to-coast divorce that pushes them to their personal and creative extremes.'
    },

{
        name: "1917",
        img: '../images/5.jpg',
        price: "1800 USD",
        desc: 'During World War I, two British soldiers -- Lance Cpl. Schofield and Lance Cpl. Blake -- receive seemingly impossible orders. In a race against time, they must cross over into enemy territory to deliver a message that could potentially save 1,600 of their fellow comrades -- including Blake own brother.'
    },

{
        name: "Once Upon a Time in Hollywood",
        img: '../images/6.jpg',
        price: "2500 USD",
        desc: 'Rick, a washed-out actor, and Cliff, his stunt double, struggle to recapture fame and success in 1960s Los Angeles. Meanwhile, living next door to Rick is Sharon Tate and her husband Roman Polanski.'
    }

];

var container = "";

for (let i = 0; i < movies.length; i++) {
    container += `<div class="col-lg-4 col-md-6 col-sm-12 my-4">

    <div class="card h-100 ">
    <img src="${movies[i].img}" class="card-img-top h-50" alt="">
    <div class="card-body">
    <h5 class="card-title">${movies[i].name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${movies[i].price}</h6>
    <p class="card-text">${movies[i].desc}</p>
    </div>
    </div></div>`
}

document.getElementById('card').innerHTML = container;