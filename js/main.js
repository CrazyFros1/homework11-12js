$(function () {

    $('.carousel-wrapper').slider();

    var html = $('#former1').html();
    var articles = [
        {
            title: 'Article 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
            ' Animi architecto blanditiis cumque delectus deleniti distinctio,' +
            ' ducimus eum, expedita explicabo fuga labore libero maiores nisi' +
            ' praesentium unde vel vero voluptatem voluptates?'
        },
        {
            title: 'Article 2',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
            ' Animi architecto blanditiis cumque delectus deleniti distinctio,' +
            ' ducimus eum, expedita explicabo fuga labore libero maiores nisi' +
            ' praesentium unde vel vero voluptatem voluptates?'
        },
        {
            title: 'Article 3',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
            ' Animi architecto blanditiis cumque delectus deleniti distinctio,' +
            ' ducimus eum, expedita explicabo fuga labore libero maiores nisi' +
            ' praesentium unde vel vero voluptatem voluptates?'
        }
    ];
    var contents = tmpl(html, {data: articles});

    $('.articles-wrapper').append(contents);
});
