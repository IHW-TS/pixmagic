var API_KEY = '42270049-19cdd498052c795101bfa3060';

function searchImages() {
    var query = document.getElementById('searchQuery').value;
    var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(query);
    $.getJSON(URL, function(data) {
        if (parseInt(data.totalHits) > 0) {
            $('#results').html('');
            $.each(data.hits, function(i, hit) {
                $('#results').append('<img src="'+hit.previewURL+'" onclick="sendImage(\''+hit.largeImageURL+'\')">');
            });
        } else {
            $('#results').html('Aucun résultat.');
        }
    });
}


function sendImage(imageUrl) {
    $.ajax({
        url: '/sendImage',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ imageUrl: imageUrl }),
        success: function(response) {
            alert('Image envoyée avec succès !');
        },
        error: function(xhr, status, error) {
            alert('Un problème est survenu lors de l\'envoi de l\'image.');
        }
    });
}