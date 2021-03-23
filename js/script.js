// constant variables - data that never changes
const url_start = 'https://openlibrary.org/search.json?q=';
// state variables - data that changes
//let headlines;

// caches element references - parts of the dom we need to touch
let $input = $('input[type="text"]');
const $headlines = $('#headlines');
const $title = $('#title');
const $description = $('#description');
const $covers = $('#cover');
const $docs = $("#docs");
const $author_name = $("#author_name");
const $publish_date = $("#publish_date");
const $publish_year = $("#publish_year");
const $resetBtn = $('#reset');
// event listeners - capture and respond to events (i.e. user clicks on something)
$resetBtn.on('click', handleReset);




// functions - code that represents actions taken/carried out

$('form').on('submit', handleGetData)

function handleGetData(event) {
    event.preventDefault();
    userInput = $input.val();
    const promise = $.ajax({
        url: url_start + userInput + "'",
        //url_two: 'https://openlibrary.org/search/inside.json?q=' + userInput + "'",
    });
    // SUCCESS
    promise.then(
        (data) => {
            //console.log(data.docs[2].author_name[0])
            console.log(data);
            headlines = data;
            render();
            });
            (error) => {
                console.log(error);
            };
    };



function render() {
    let list = []
    const html = headlines.docs.map(function (i) {
        for (let i=0;i<=10;i++){
            
            $headlines.append(`<article class="card">
                <p><img src="http://covers.openlibrary.org/b/isbn/${headlines.docs[i].isbn[0]}-S.jpg"/></p>
                <p>Author: ${headlines.docs[i].author_name[0]}</p>
                <p>Title: ${headlines.docs[i].title}</p>
                <p>Publish Date: ${headlines.docs[i].publish_date[0]}</p>
                <p>Publish Year: ${headlines.docs[i].publish_year[0]}</p>
            </article>`)
            ;

        };
    });
    // $headlines.append(html);
};



function handleReset() {
    $('article').remove()
};