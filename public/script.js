let API_KEY = '';

function fetchApiKey() {
    // Utilisez une Promise pour attendre la récupération de la clé API
    return new Promise((resolve, reject) => {
        $.getJSON('/api-key', function(data) {
            API_KEY = data.apiKey;
            resolve(API_KEY); 
        }).fail(function() {
            console.log("Erreur lors de la récupération de la clé API.");
            reject("Impossible de récupérer la clé API"); 
        });
    });
}

function searchImages() {
    fetchApiKey().then(apiKey => {
        // La clé API est maintenant chargée, effectuez la recherche
        var query = document.getElementById('searchQuery').value;
        var URL = "https://pixabay.com/api/?key=" + apiKey + "&q=" + encodeURIComponent(query);
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
    }).catch(error => {
        alert(error);
    });
}

function sendImage(imageUrl) {
    // Assurez-vous que la clé API est chargée avant d'envoyer l'image
    if (!API_KEY) {
        alert("La clé API n'est pas chargée. Veuillez réessayer.");
        return;
    }
    if (!imageUrl) {
        alert("Erreur : Aucune image sélectionnée.");
        return;
    }
        // Appeler le backend pour envoyer l'URL de l'image

        $.post({
            url: '/sendImage',
            data: JSON.stringify({ imageUrl: imageUrl }),
            contentType: 'application/json',
            success: function(response) {
                alert('Image envoyée avec succès !');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert('Erreur lors de l\'envoi de l\'image : ' + textStatus);
            }
        });
        
}

// Appel initial pour récupérer la clé API 
fetchApiKey();
