let headlines;
const $headlines = $('#headlines');
const $title = $('#title');
const $description = $('#description');
const $covers = $('#cover');
const $docs = $("#docs");
const $author_name = $("#author_name");
const $publish_date = $("#publish_date");
const $publish_year = $("#publish_year");

let $input = $('input[type="text"]');


$('form').on('submit', handleGetData)

function handleGetData(event){
    event.preventDefault();
    userInput = $input.val();
    const promise = $.ajax({
        url: 'https://openlibrary.org/search.json?q='+userInput+"'",
        url_two: 'https://openlibrary.org/search/inside.json?q='+userInput+"'"
    });
    // SUCCESS
    promise.then(
    (data) => {
        console.log(data)
        //$title.text(data.title);
        //$docs.text(data.docs)
        //$description.text(data.description);

        for (i=0;i<10;i++){
            $headlines.append(data.docs[i].author_name[0]);
            $headlines.append(data.docs[i].title);
            $headlines.append(data.docs[i].publish_date[0]);
            $headlines.append(data.docs[i].publish_year[0]);
        }
        $covers.text(data.covers[0]);
    // FAILURE
    }, 
    (error) => {
        console.log(error);
    });
};

$('#secondForm').on('click','#reset', function(){
    $(this).closest('p').remove();
});

// function render(){

//     $title = $('#title');
//     //$description = $('#description');
//     // $docs = $('#docs');
//     $author_name = $('#author_name');
//     $publish_date = $("#publish_date");
//     $publish_year = $("publish_year");
//     //$contributions = $('#contributions');
//     //$author.text(data.authors["author"];)
//     // $subjects.text(data.subjects);
//     //$covers.text(data.covers[0]);
// }

// render()


function newFunc() {
    const html = headlines.map(function(launch) {
        return `
            <article class="card">
                <h1>${launch.description}</h1>
                <p>${launch.title}</p>
            </article>
        `;
    });
    $headlines.append(html);
}
newFunc();
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
