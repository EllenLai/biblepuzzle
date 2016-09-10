var url = "http://www.ourmanna.com/verses/api/get/?format=json&order=random";

$.getJSON(url, function(data)
{
  console.log(data);
  $("#bibleverse").text(data.verse.details.text);
  $("#reference").text(data.verse.details.reference);


  $('#bibleverse').each(function() {

    var words = $(this).text().split(' ');

    $(this).empty().html(function() {

      for (i = 0; i < words.length; i++) {
        if (i == 0) {
          $(this).append('<span>' + words[i] + '</span>');
        } else {
          $(this).append(' <span>' + words[i] + '</span>');
        }
      }

    });
  });
});
