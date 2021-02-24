function getQuote() {
    fetch('https://type.fit/api/quotes')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var index = (data.length * Math.random()) | 0;
            var quote = data[index]['text'];
            var author = data[index]['author'];
            document.getElementById('quote').innerHTML = quote;
            document.getElementById('author').innerHTML = author;
        });
}
