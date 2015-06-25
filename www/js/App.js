
function onBodyLoad()
{
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady()
{
    
    // ========== Main =========

    var mySessionDataDownloader = new SessionDataDownloader();

    var SessionKey = "156373";
    var SlideCount = 1;

    mySessionDataDownloader.DownloadSessionSlides(SessionKey, SlideCount);
    
}



