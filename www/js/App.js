
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

    //var DownloadedImageElement = document.querySelector("#DownloadedImage");

    var DownloadedImageFile = 
        mySessionDataDownloader.DownloadSessionSlides(SessionKey, SlideCount);

    document["DownloadedImage"].src = DownloadedImageFile;
    
}



