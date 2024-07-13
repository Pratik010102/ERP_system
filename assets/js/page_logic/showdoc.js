function setDownloadLink(event) {
    event.preventDefault();
    var link = document.createElement('a');
    link.href = event.target.dataset.src;
    link.download = 'image.jpg';
    link.click();
    }