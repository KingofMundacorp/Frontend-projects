// JavaScript code to populate supercars dynamically (replace this with your actual data fetching and population logic)
document.addEventListener("DOMContentLoaded", function () {
    // Simulated data
    const supercars = [
        { name: "Mclaren", image: "Mclaren.jpg", class:"S" },
        { name: "Lamborghini", image: "Lamborghini-Revuelto.jpg",class:"S" },
        { name: "Mercedes G-wagon", image: "gwagon.jpeg",class:"LUX"}, 
        {name: "RollsRoyce-Boat", image: "RollsRoyceBoat.jpg",class:"LUX"},
        {name:"Toyota Land cruiser 2024",image:"Landcruiser 2024.jpg",class:"LUX"},
        {name: "TRION NEMESIS", image: "Trionnemesis.jpeg",class:"S"},
        {name: "Zenvo TS1 GT", image: "ZENVO TS1 GT.jpeg",class:"S"},
        {name: "Bugatti Chiron Supersport 300+", image: "BugattiChiron.jpeg",class:"S"},
        {name: "Pagani Huarya BC", image: "pagani huarya.jpeg",class:"S"},
        {name: "Dodge Tomahawk", image: "dodgetomahawk.jpeg",class:"S"},
        {name: "Bugatti16.4 Grand Sport Vitesse", image: "Bugatti Vitesse.jpeg",class:"A"},
        {name: "Aston Martin DBS SuperLeggera", image: "aston martin superlegera.jpeg",class:"A"},
        {name: "Chrysler ME412", image: "chrysler me 412.jpeg",class:"A"},
        {name: "Lamborghini Aventandor", image: "Lamborghini aventandor.jpeg",class:"A"},
        {name: " 1930 Golden Bugatti", image: "Bugatti old school.jpeg", class: "LUX"},
        {name:"Vencer Sarthe", image:"Vencer Sarthe.jpeg", class:"C"},
        {name:"Maseratti Alfieri", image:"Maseratti Alfieri.jpeg", class:"C"},
        {name:"Maseratti Gran Turismo Sport", image:"Maseratti Gran Turismo Sport.jpeg", class:"C"},
        {name:"Cadillac ATS-V Coupe", image:"Cadillac ATS-V Coupe.jpeg", class:"C"},
        {name:"BMW M6", image:"BMW M6.jpeg", class:"C"},
        {name:"Chevrolet Camaro 2016", image:"Chevrolet Camaro 2016.jpeg", class:"C"},
        {name:"2018-Chevrolet-Corvette-Grand-Sport", image:"2018-Chevrolet-Corvette-Grand-Sport.jpg", class:"B"},
        {name:"Chevrolet SS", image:"Chevrolet SS.jpeg", class:"B"},
        {name:"Falcon F7", image:"Falcon F7.jpeg", class:"B"},
        {name:"Ferrari 458 Italia", image:"Ferrari 458 Italia.jpeg", class:"B"},
        {name:"Lamborghini Gallardo", image:"Lamborghini Gallardo.jpeg", class:"B"},
        {name:"Audi R8 Etron", image:"Audi R8 Etron.jpeg", class:"D"},
        {name:"BMW M3 Sedan", image:"BMW M3 Sedan.jpeg", class:"D"},
        {name:"Mitsubishi Lancer Evolution", image:"Mitsubishi Lancer Evolution.jpeg", class:"D"},
        {name:"Mercedes Benz GLC Coupe", image:"Mercedes Benz GLC Coupe.jpeg", class:"D"},
        {name:"1967 Chevrolet Impala", image:"1967 Chevrolet Impala.jpeg", class:"D"}
        
        // Add more supercar objects as needed
    ];

    // Function to create supercar elements
    function createSupercarElement(supercar) {
        const supercarItem = document.createElement("div");
        supercarItem.classList.add("supercar-item");

        const supercarImage = document.createElement("img");
        supercarImage.src = supercar.image;
        supercarImage.alt = supercar.name;

        const supercarTitle = document.createElement("h3");
        supercarTitle.textContent = supercar.name;

        supercarItem.appendChild(supercarImage);
        supercarItem.appendChild(supercarTitle);

        return supercarItem;
    }

    // Populate supercars and separate them by class
    
    let openClass = null; // Variable to keep track of the currently open class container
    const classes = ['LUX','S', 'A', 'B', 'C', 'D'];

    classes.forEach(className => {
        const container = document.createElement("div");
        container.classList.add("class-container", `class-${className}`);
        
        // Add big initial letter for class
        const bigInitial = document.createElement("div");
        bigInitial.classList.add("big-initial");
        bigInitial.textContent = className;

        // Add event listener to populate the container with cars of the class
        container.addEventListener("click", () => {
            // Close the currently open class container, if any
            if (openClass !== className && openClass !== null) {
                const openContainer = document.querySelector(`.class-${openClass}`);
                openContainer.innerHTML = `<div class="big-initial">${openClass}</div>`;
            }
            
            // Populate the clicked class container with cars
            const classSupercars = supercars.filter(supercar => supercar.class === className);
            container.innerHTML = ""; // Clear previous content
            classSupercars.forEach(supercar => {
                const supercarElement = createSupercarElement(supercar);
                container.appendChild(supercarElement);
            });

            // Update the openClass variable
            openClass = className;
        });

        container.appendChild(bigInitial);
        document.body.appendChild(container);
    });

    const searchInput = document.querySelector('input[name="supercar"]');
    const suggestionsList = document.createElement('ul');
    suggestionsList.classList.add('suggestions-list');
    searchInput.parentNode.appendChild(suggestionsList);

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.trim().toLowerCase();
        const matchedSupercars = supercars.filter(supercar => supercar.name.toLowerCase().startsWith(searchTerm));
        
        // Clear previous suggestions
        suggestionsList.innerHTML = '';

        // Display suggestions
        matchedSupercars.forEach(supercar => {
            const suggestionItem = document.createElement('li');
            suggestionItem.textContent = supercar.name;
            suggestionItem.addEventListener('click', () => {
                displaySupercarDetails(supercar);
            });
            suggestionsList.appendChild(suggestionItem);
        });
        // Remove supercar details if search term is empty
        if (searchTerm === '') {
            const detailsContainer = document.querySelector('.supercar-details');
            if (detailsContainer) {
                detailsContainer.parentNode.removeChild(detailsContainer);
            }
        }
    
    });

    function displaySupercarDetails(supercar) {
        // Clear previous details
        const detailsContainer = document.querySelector('.supercar-details');
        if (detailsContainer) {
            detailsContainer.parentNode.removeChild(detailsContainer);
        }

        // Create container for supercar details
        const supercarDetails = document.createElement('div');
        supercarDetails.classList.add('supercar-details');

        // Add supercar image
        const supercarImage = document.createElement('img');
        supercarImage.src = supercar.image;
        supercarImage.alt = supercar.name;
        supercarDetails.appendChild(supercarImage);

        // Add supercar name
        const supercarName = document.createElement('h2');
        supercarName.textContent = supercar.name;
        supercarDetails.appendChild(supercarName);

        // Append supercar details to body
        document.body.appendChild(supercarDetails);
    }
});