$('#container').empty();

$.ajax({
  url: 'https://randomuser.me/api/?results=10',
  dataType: 'json',
  success: function (people) {
    peopleObj = { people: people.results };

    let source = $('#people-template').html();
    let template = Handlebars.compile(source);
    let newHTML = template(peopleObj);
    // append our new html to the page
    $('#container').append(newHTML);
  },
  error: 'Uh oh, something has gone wrong.',
});
