
const quotes = [{
    quote: `"You only live once, but if you do it right, once is enough."`,
    writer: `- Mae West 1955`
}, 
, {
    quote: `"The weak can never forgive. Forgiveness is the attribute of the strong"`,
    writer: `-Mahatma Gandhi`
   
}, {
    quote: `"Whether you draw diagrams that generate code or you type at a browser, you are coding."`,
    writer: `Kent Beck`
}, {
    quote: `"In order to write about life first you must live it."`,
    writer: `- Ernest Hemingway`
}, {
    quote: `"One of my most productive days was throwing away 1,000 lines of code."`,
    writer: ` Ken Thompson`
}, {
    quote: `"The unexamined life is not worth living."`,
    writer: ` Socrates`
}, {
    quote: `"Music is science more than art, and it is the main code of the universe."`,
    writer: ` -Vangelis`
}, {
    quote: `"The purpose of our lives is to be happy."`,
    writer: `- Dalai Lama`
}, {
    quote: `"Programming is the art of algorithm design and the craft of debugging errant code."`,
    writer: `- Ellen Ullman`
}, ]


let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");
let bodyBackground = document.querySelector('#body-background');
let paragraph = document. querySelector("#paragraph");

function quoteGeneret (){
    let random = Math.floor(Math.random() * quotes.length);     
    quote.innerHTML = quotes[random].quote;    
    writer.innerHTML = quotes[random].writer;
    
    const colors=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]// Hexadecimal Color, values are also supported in all browsers. A hexadecimal color is specified with #RRGGBB.
    let paragraphColor = '#'; // # numbers #RRGGBB.
    for (let i = 0; i < 6; i++){
        paragraphColor += colors[colorGenerator()];
    }
    const containerBackground = document.getElementById("main-content");
    
    containerBackground.style.backgroundColor = paragraphColor;
    function colorGenerator() {
        return Math.floor(Math.random() * colors.length);
    }
}
btn.addEventListener("click", quoteGeneret)





