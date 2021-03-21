let headlines;
const $title = $('#title');
const $description = $('#description');
//const $author = $('#author');
//const $subjects = $('#subjects');
const $covers = $('#cover');
let $input = $('input[type="text"]');

$('form').on('submit', handleGetData);

function handleGetData(event){
    event.preventDefault();
    userInput = $input.val();
    const promise = $.ajax({
        url: "https://openlibrary.org/works/"+userInput+".json"
    });
    // SUCCESS
    promise.then(
    (data) => {
        console.log(data)
        $title.text(data.title);
        $description.text(data.description);
        //$author.text(data.authors["author"];)
        // $subjects.text(data.subjects);
        $covers.text(data.covers[0]);


        //$description.text(data)
    // FAILURE
    }, 
    (error) => {
        console.log(error);
    });
};


function render(){
    console.log(data)
    $title.text(data.title);
    $description.text(data.description);
    //$author.text(data.authors["author"];)
    // $subjects.text(data.subjects);
    $covers.text(data.covers[0]);
}

render()
// init();
// function init(){
//     getData();
// };
// note: AJAX is running asynchronously while the rest of JS is running synchronously.
// function getData(){
//         // SUCCESS
//         promise.then(
//             (data) => {
//                 console.log(data)
//                 $title.text(data.title);
//                 $description.text(data.description);
//                 //$author.text(data.authors["author"];)
//                 // $subjects.text(data.subjects);
//                 $covers.text(data.covers[0]);


//             //$description.text(data)
//         // FAILURE
//         }, function (error) {
//             console.log(error);
//         });
// };



// function render(){
//     const html = headlines.map(function(headings){
//         return`
//             <article class="card">
//                 <h1>${headings.title}</h1>
//                 <p>${headings.description}</p>
//                 <p>${headings.covers}</p>
//             </article>
//         `;
//     });
//     $headlines.append(html);
// };

// render();
