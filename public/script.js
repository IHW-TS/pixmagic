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
    // Appeler le backend pour envoyer l'URL de l'image
    $.post('/sendImage', {imageUrl: imageUrl}, function(response) {
        alert('Image envoyée avec succès !');
    });
}
