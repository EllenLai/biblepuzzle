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
          $(this).append('<span class="verse-text">' + words[i] + '</span>' + '<br>');
        } else {
          $(this).append('<span class="verse-text">' + words[i] + '</span>' + '<br>');
        }
      }

    });

    for (i = 0; i < words.length; i++) {
      document.getElementsByTagName('span')[i].setAttribute('id', "word" + (i + 1));
    }
  });
});



