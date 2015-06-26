// ......................................................................................................................................
// jQuery will wait for document ready event (required for Cordova code)...
//
// Note:  jquery's .js file only was NOT found/loaded if in a subfolder called "/js/jquery/" !!!
// ......................................................................................................................................

jQuery(document)
    .ready
    (
        function ()
        {
            // ========== Main =========
            try
            {
                 var mySessionDataDownloader = new SessionDataDownloader();

                 var SessionKey = "156373";
                 var SlideCount = 1;

                alert("DownloadSessionSlides( " + SessionKey + ", " + SlideCount + " )");

                var DownloadedImageFile =
                    mySessionDataDownloader.DownloadSessionSlides(SessionKey, SlideCount);

                alert("DownloadedImageFile=" + DownloadedImageFile);
                jQuery("#DebugMessage").text("DownloadedImageFile=" + DownloadedImageFile);
                jQuery("#DownloadedImage").attr("src", DownloadedImageFile);

            }
            catch (e)
            {
                alert(e.message);
            }
        }
    );



// =====================================================================

//alert("AAA");

//try {

//    jQuery(
//            function () {
//                // ========== Main =========
//                try {
//                    jQuery("#DebugMessage").text("jQuery is ready...");
//                } catch (e) {
//                    alert(e.message);
//                }
//                alert("End of Main");
//            }
//        );
//} catch (e) {
//    alert(e.message);
//}

//alert("BBB");

// =====================================================================

//var app =
//    {
//        initialize: function ()
//        {
//            try {
//                var self = this;
//                $("#DebugMessage").text("jQuery is ready...");
//            } catch (e) {
//                alert(e.message);
//            } 
//        }
//    };

//app.initialize();

// =====================================================================

//var jQueryReady = false;
//var DeviceReady = false;


//jQuery
//    (
//        function ()
//        {
//            try {
//                jQueryReady = true;
//                CheckDeviceAndJQueryReady();
//            } catch (e) {
//                alert(e.message);
//            }
//        }
//    );

//function onBodyLoad()
//{
//    try {
//        DeviceReady = true;
//        document.addEventListener("deviceready", CheckDeviceAndJQueryReady, false);
//    } catch (e) {
//        alert(e.message);
//    }
//}


//function CheckDeviceAndJQueryReady()
//{
//    try {

//        alert("jQueryReady=" + jQueryReady + " ... " + "DeviceReady=" + DeviceReady);

//        if (jQueryReady == true) {
//            jQuery("#DebugMessage").text("jQuery is ready...");
//        }

//        if (DeviceReady == true)
//        {
//            if (jQueryReady == true)
//            {
//                alert("ALL READY!");
//            }
//        }        

//    } catch (e) {
//        alert(e.message);
//    }

//}

// =====================================================================
//jQuery
//    (
//        function ()
//        {

            // ========== App Init ==========

            //var app = 
            //    {
            //        initilaize: 
            //            function()
            //            {
            //                this.bindEvents();
            //            },

            //        bindEvents:
            //            function()
            //            {
            //                document.addEventListener("deviceready", this.onDeviceReady, false);
            //            }
            //        ,

            //        onDeviceReady:
            //            function ()
            //            {
            //                app.receivedEvent('deviceready');
            //            },

            //        receivedEvent:
            //            function (id)
            //            {
            //                alert("receivedEvent");
            //            }
            //    }

            // ========== Main ==========

//            app.initialize();


//        }
//
//);


//function onDeviceReady()
//{

    // ========== Main =========

    //try {

    //    var mySessionDataDownloader = new SessionDataDownloader();

    //    var SessionKey = "156373";
    //    var SlideCount = 1;

    //    alert("DownloadSessionSlides( " + SessionKey + ", " + SlideCount + " )");

    //    //var DownloadedImageElement = document.querySelector("#DownloadedImage");

    //    var DownloadedImageFile = 
    //        mySessionDataDownloader.DownloadSessionSlides(SessionKey, SlideCount);

    //    alert("DownloadedImageFile=" + DownloadedImageFile);
    //    document["DownloadedImage"].src = DownloadedImageFile;

    //} catch (e) {
    //    alert(e.message)
    //}

//}

// =====================================================================
//jQuery
//(
//    function ()
//    {
//        // ---------- App class ----------
//        var app =
//        {
//            initialize: function () {
//                alert("app.initialize()");
//                this.bindEvents();
//            },

//            bindEvents: function () {
//                document.addEventListener('deviceready', this.onDeviceReady, false);
//            },

//            onDeviceReady: function ()
//            {
//                // app.receivedEvent('deviceready');
//                alert("onDeviceReady");
//            },

//            //receivedEvent: function (id) {
//            //    var parentElement = document.getElementById(id);
//            //    var listeningElement = parentElement.querySelector('.listening');
//            //    var receivedElement = parentElement.querySelector('.received');

//            //    listeningElement.setAttribute('style', 'display:none;');
//            //    receivedElement.setAttribute('style', 'display:block;');

//            //    //console.log('Received Event: ' + id);
//            //}

//        }

//        // ========== Main =========

//        app.initialize();

//        try {

//            var mySessionDataDownloader = new SessionDataDownloader();

//            var SessionKey = "156373";
//            var SlideCount = 1;

//            alert("DownloadSessionSlides( " + SessionKey + ", " + SlideCount + " )");

//            //var DownloadedImageElement = document.querySelector("#DownloadedImage");

//            var DownloadedImageFile =
//                mySessionDataDownloader.DownloadSessionSlides(SessionKey, SlideCount);

//            alert("DownloadedImageFile=" + DownloadedImageFile);
//            //document["DownloadedImage"].src = DownloadedImageFile;

//            jQuery("#DownloadedImage").attr("src", DownloadedImageFile);

//        } catch (e) {
//            alert(e.message)
//        }

//    }
//);

// =====================================================================
//function onBodyLoad()
//{
//    document.addEventListener("deviceready", onDeviceReady, false);
//}

//function onDeviceReady()
//{
    
//    // ========== Main =========

//    //try {

//    //    var mySessionDataDownloader = new SessionDataDownloader();

//    //    var SessionKey = "156373";
//    //    var SlideCount = 1;

//    //    alert("DownloadSessionSlides( " + SessionKey + ", " + SlideCount + " )");

//    //    //var DownloadedImageElement = document.querySelector("#DownloadedImage");

//    //    var DownloadedImageFile = 
//    //        mySessionDataDownloader.DownloadSessionSlides(SessionKey, SlideCount);

//    //    alert("DownloadedImageFile=" + DownloadedImageFile);
//    //    document["DownloadedImage"].src = DownloadedImageFile;

//    //} catch (e) {
//    //    alert(e.message)
//    //}

//}



