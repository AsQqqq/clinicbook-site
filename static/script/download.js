$(document).ready(function() {
    $('#downloadButton').click(function() {
    $.ajax({
        url: 'https://api.github.com/repos/AsQqqq/clinicbook/releases/latest',
        dataType: 'json',
        success: function(data) {;
        var assets = data.assets;
        if (assets.length > 0) {
            var downloadUrl = assets[0].browser_download_url;
            window.location.href = downloadUrl;
        } else {
            alert('В релизе нет файлов.');
        }
        },
        error: function() {
        alert('Не удалось получить информацию о релизе.');
        }
    });
    });
});