
function onBodyLoad()
{
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady()
{
    
    // ========== Main =========

    var mySessionDataDownloader = new SessionDataDownloader();

    alert(mySessionDataDownloader.LoopbackTest("Hi Mom!"));
    
}



