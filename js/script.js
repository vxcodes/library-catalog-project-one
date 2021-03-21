let headlines;
const $title = $('#title');
const $description = $('#description');
//const $author = $('#author');
// const $subjects = $('#subjects');
const $covers = $('#cover');
init();
function init(){
    getData();
};
// note: AJAX is running asynchronously while the rest of JS is running synchronously.
function getData(){
    $.ajax('https://openlibrary.org/works/OL8193508W.json')
        // SUCCESS
        .then(
            (data) => {
                console.log(data)
                $title.text(data.title);
                $description.text(data.description);
                //$author.text(data.authors["author"];)
                // $subjects.text(data.subjects);
                $covers.text(data.covers[0]);


            //$description.text(data)
        // FAILURE
        }, function (error) {
            console.log(error);
        });
};



function render(){
    const html = headlines.map(function(headings){
        return`
            <article class="card">
                <h1>${headings.title}</h1>
                <p>${headings.description}</p>
                <p>${headings.covers}</p>
            </article>
        `;
    });
    $headlines.append(html);
};

render();
