
// constant variables - data that never changes
const url_start = 'https://openlibrary.org/search.json?q=';
const url1 = "https://openlibrary.org/books/OL7353617M";
const url2 = "https://openlibrary.org/books/OL31905190M";
// state variables - data that changes
let headlines;
let infoDesired;
let year = new Date();
year = year.getFullYear();
// caches element references - parts of the dom we need to touch
const $headlines = $('#headlines');
const $title = $('#title');
const $description = $('#description');
const $covers = $('#cover');
const $docs = $('#docs');
const $author_name = $('#author_name');
const $publish_date = $('#publish_date');
const $publish_year = $('#publish_year');
const $resetBtn = $('#reset');
const $input = $('input[type="text"]');
const $span = $('#year');
const $learnMoreOne = $('#learnMoreOne');
const $learnMoreTwo = $('#learnMoreTwo');
const $aBook = $("#aBook");

// event listeners - capture and respond to events (i.e. user clicks on something)
$('form').on('submit', handleGetData);
$resetBtn.on('click', handleReset);
$learnMoreOne.on('click',reDirect(url1));
$learnMoreTwo.on('click', reDirect(url2));
// functions - code that represents actions taken/carried out
$span.text(year);
function handleGetData(event) {
    event.preventDefault();
    userInput = $input.val();
    $input.val('');
    const promise = $.ajax({
        url: url_start + userInput + "'",
    });
    // SUCCESS
    promise.then(data => {
        // console.log(data);
        headlines = data;
        render();
    });
    error => {
        console.log(error);
    };
}
function render() {
    Object.entries(headlines).forEach(function (array) {
        // console.log(array, 'is our item')
        if (array.includes('docs')) {
            // console.log(array[1])
            infoDesired = array[1];
            infoDesired = infoDesired.slice(0, 10);
            console.log(infoDesired)
        }
    });
    // console.log(infoDesired)
    // if articles already exist on the DOM, remove them

    $('article').remove();
    infoDesired.forEach(function (book) {
        if(book.first_publish_year === undefined) {
            book.first_publish_year = "No data available"
        }
        const $article = $(`<article class="card">
            <p><img src="http://covers.openlibrary.org/b/olid/${book.edition_key[0]}-S.jpg"/></p>
            <p>${book.title}</p>
            <p>${book.author_name}</p>
            <p>${book.first_publish_year}</p>
        </article>`);
        $headlines.append($article);
    });
}
function handleReset() {
    $('article').remove()
};



function reDirect(event,aLink){
    event.preventDefault();
    window.location.replace(aLink)
};

