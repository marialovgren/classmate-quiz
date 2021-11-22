/*
* Inlämningsuppgift gjord av Maria Lövgren FED21M
*/

const studentImgEl = document.querySelector('.studentImg');
const buttonContainerEl = document.querySelector('.buttonContainer');
const resultEl = document.querySelector('.result');
const resultWrapperEl = document.querySelector('.resultWrapper');

const students = [
	{
		"name" : "Adi Dzocaj",
		"image": "assets/images/students/adi-dzocaj.jpg",
	},
	{
		"name" : "Alexander Bergquist",
		"image": "assets/images/students/alexander-bergquist.jpg",
	},
	{
		"name" : "Alexander Kocman",
		"image": "assets/images/students/alexander-kocman.jpg",
	},
	{
		"name" : "Benjamin Benson",
		"image": "assets/images/students/benjamin-benson.jpg",
	},
	{
		"name" : "Benjamin Tsubarah",
		"image": "assets/images/students/benjamin-tsubarah.jpg",
	},
	{
		"name" : "Calle Nilsson",
		"image": "assets/images/students/calle-nilsson.jpg",
	},
	{
		"name" : "Chikage Takahashi Molander",
		"image": "assets/images/students/chikage-takahashi-molander.jpg",
	},
	{
		"name" : "Daniel Be",
		"image": "assets/images/students/daniel-be.jpg",
	},
	{
		"name" : "Daniel Carlsson",
		"image": "assets/images/students/daniel-carlsson.jpg",
	},
	{
		"name" : "Elin Ahlgren",
		"image": "assets/images/students/elin-ahlgren.jpg",
	},
	{
		"name" : "Emma Käck",
		"image": "assets/images/students/emma-kack.jpg",
	},
	{
		"name" : "Eric Ståhl",
		"image": "assets/images/students/eric-stahl.jpg",
	},
	{
		"name" : "Frans Gustavson Påsse",
		"image": "assets/images/students/frans-gustavson-passe.jpg",
	},
	{
		"name" : "Glafira Veretennikova",
		"image": "assets/images/students/glafira-veretennikova.jpg",
	},
	{
		"name" : "Gustaf Grönlund",
		"image": "assets/images/students/gustaf-gronlund.jpg",
	},
	{
		"name" : "Hanna Håkanson",
		"image": "assets/images/students/hanna-hakanson.jpg",
	},
	{
		"name" : "Heidi Sjöberg",
		"image": "assets/images/students/heidi-sjoberg.jpg",
	},
	{
		"name" : "Hugo Carzborn",
		"image": "assets/images/students/hugo-carzborn.jpg",
	},
	{
		"name" : "Jesper Kling",
		"image": "assets/images/students/jesper-kling.jpg",
	},
	{
		"name" : "Johan Ranestam",
		"image": "assets/images/students/johan-ranestam.jpg",
	},
	{
		"name" : "Johanna Bäckström",
		"image": "assets/images/students/johanna-backstrom.jpg",
	},
	{
		"name" : "Johanna Jönsson",
		"image": "assets/images/students/johanna-jonsson.jpg",
	},
	{
		"name" : "Jona Torsson",
		"image": "assets/images/students/jona-torsson.jpg",
	},
	{
		"name" : "Josefine Ahlstedt",
		"image": "assets/images/students/josefine-ahlstedt.jpg",
	},
	{
		"name" : "Julia Jespersdotter Högman",
		"image": "assets/images/students/julia-jespersdotter-hogman.jpg",
	},
	{
		"name" : "Julia Nemell",
		"image": "assets/images/students/julia-nemell.jpg",
	},
	{
		"name" : "Linus Lindberg",
		"image": "assets/images/students/linus-lindberg.jpg",
	},
	{
		"name" : "Malin Olsson",
		"image": "assets/images/students/malin-olsson.jpg",
	},
	{
		"name" : "Maria Haara-Lundhammar",
		"image": "assets/images/students/maria-haara-lundhammar.jpg",
	},
	{
		"name" : "Maria Lövgren",
		"image": "assets/images/students/maria-lovgren.jpg",
	},
	{
		"name" : "Nikola Dimitrijoski",
		"image": "assets/images/students/nikola-dimitrijoski.jpg",
	},
	{
		"name" : "Paulina Kiendys",
		"image": "assets/images/students/paulina-kiendys.jpg",
	},
	{
		"name" : "Raymond Lam",
		"image": "assets/images/students/raymond-lam.jpg",
	},
	{
		"name" : "Robin Karlsson",
		"image": "assets/images/students/robin-karlsson.jpg",
	},
	{
		"name" : "Sara Almqvist",
		"image": "assets/images/students/sara-almqvist.jpg",
	},
	{
		"name" : "Tim Nilsson",
		"image": "assets/images/students/tim-nilsson.jpg",
	},
	{
		"name" : "Tirapat Sukjit",
		"image": "assets/images/students/tirapat-sukjit.jpg",
	},
	{
		"name" : "Tobias Silfverberg",
		"image": "assets/images/students/tobias-silfverberg.jpg",
	},
	{
		"name" : "Wiktoria Dobrzewinska",
		"image": "assets/images/students/wiktoria-dobrzewinska.jpg",
	},
];

// funktion som jag kallar på för att slumpa fram något
const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
};

// jag sätter gissningarna till 0 som default. 
let guesses = 0; 
let correctGuess = 0;
let wrongGuess = 0;

let correctStudent = ""; // correctStudent är satt till en tom sträng för att jag sedan ska kunna tilldela den ett nytt värde vid behov 

// denna funktionen kallar jag på när jag vill generera en ny bild och 4 namn
const getClassmates = () => {
	buttonContainerEl.innerHTML = ""; // gör så att det bara är 4 namn till varja bild. Utan denna så hade det annars adderats 4 namn till listan varje gång jag kallar på getClassmates()

	shuffleArray(students); // kallar på funktionen shuffleArray som gör att alla studenter blandas och jag får en ny version av students varje gång. 

	const randomStudents = students.slice(0,4); // Jag tar ut de 4 första studenterna i arrayn "students" med hjälp av slice. Då får jag ut de studenter som är på index 0-4. Dessa sparar jag i "randomStudents".

	correctStudent = students[0]; // efter att jag blandat alla studenter så sätter jag correctStudent till den är som är på index 0 i arrayn student

	studentImgEl.src = "students/" + correctStudent.image; // i diven som heter studentImg så har jag en tom src. Med denna koden så skriver jag in sökvägen till correctStudents bild. 

	shuffleArray(randomStudents); // jag kallar på shuffleArray igen för att placeringen av namnen ska vara random till varje bild. 

	const randomNames = randomStudents.map(students => students.name); // med map så väljer jag att plocka ut de 4 namnen som jag spararat i randomStudents och spara dessa i en ny constant som heter randomNames

	// för varje student i randomNames så läggs en knapp till med deras namn
	randomNames.forEach(student => {
		buttonContainerEl.innerHTML += `
			<button class="btn btn-dark text-warning my-2">
				${student}
			</button>
		`;
	});
};

// funktion för att hämta ut resultatet
const getResult = () => {
	resultEl.innerHTML = `<p>Du fick ${correctGuess} rätt och ${wrongGuess} fel.</p><br> 
	<button onclick="playAgain()" class="btn btn-dark text-warning my-2">
				Spela igen
			</button>`;  
};

// funktion som startar en ny spelomgång
const playAgain = () => {
	resultEl.innerHTML = ""; // tömmer innehåller i resultat-delen
	guesses = 0; // tömmer räknaren

	getClassmates(); // kallar på funktionen som skapar bild och 4 namn
}

// * HÄR BÖRJAR SPELET 

getClassmates();

resultEl.innerHTML = ""; // tömmer platsen där resultatet ska visas så att när man klickar på "spela igen" så försvinner resultatet.




// jag sätter en eventlistener på min div som heter "buttonContainer" och lyssnar efter click på BUTTON
buttonContainerEl.addEventListener('click', e => {
	
	if (e.target.tagName === "BUTTON") {
		guesses++ 
		
		if (e.target.innerText === correctStudent.name) {
			correctGuess++ // räknare som ökar correctStudents varje gång man gissar rätt. 
		}
			
		// En spelomgång är 10 bilder. Om man kommit till bild 10 så ska en knapp med "visa resultat" komma upp. 
		if (guesses === 10) {
			wrongGuess = guesses - correctGuess; // uträkning för att få fram antalet felgissningar
			resultWrapperEl.classList.add("show");
			
			// när man klickar på "visa resultat" så kallar jag på funktionen getResult() med hjälp av onclick
			resultEl.innerHTML = `
			<button onclick="getResult()" class="btn btn-dark text-warning my-2">
				Visa resultat
			</button>`;
		} else {
			getClassmates(); // om man inte kommit till bild 10 än så fortsätter spelet genom att jag kallar på getClassmates() igen
		} 
	};
});

