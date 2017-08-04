source = null;

extract_text = function(html) {
    text = $('<div>' + html + '</div>').text();
    if (text.length > 100)
        text = text.substring(0, 96) + '...';
    return text;
}

on_start_stop_click = function() {
    if (source == null) {
        source = new EventSource("http://forcefeed.ir/sse");
        source.onopen = function() {
            $('#status-label').html('اتصال برقرار شد.');
        }
        source.addEventListener('post', function(e) {
            post = JSON.parse(e.data);
            newdiv = '<div class="js-example-message">' +
                'عنوان: ' +
                '<a href="' + post['link'] + '">' + extract_text(post['title']) + '</a><br>' +
                'شرح: ' +
                extract_text(post['description']) +
                '</div>';
            $('#feed-stream-container').append(newdiv)
        });

        $('#start-stop-button').attr('value', 'توقف');
        $('#status-label').html('برقراری اتصال...');
        $('#feed-stream-container').html('');
    } else {
        $('#start-stop-button').attr('value', 'آغاز');
        $('#status-label').html('توقف');
        source.close();
        source = null;
    }
}
