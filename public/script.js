let API_KEY = '';

function fetchApiKey() {
    $.getJSON('/api-key', function(data) {
        API_KEY = data.apiKey;
    }).fail(function() {
        console.log("Erreur lors de la récupération de la clé API.");
    });
}

function searchImages() {
    if (!API_KEY) {
        alert("La clé API n'est pas encore chargée.");
        return;
    }
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

// Appel initial pour récupérer la clé API
fetchApiKey();
