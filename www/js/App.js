
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

    alert("DownloadSessionSlides( " + SessionKey + ", " + SlideCount + " )");

    mySessionDataDownloader.DownloadSessionSlides(SessionKey, SlideCount);
    
}



