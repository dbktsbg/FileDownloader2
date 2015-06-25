
SessionDataDownloader =
    function ()
    {
        // ========== Properties ==========
        var self = this;

        // ========== Event Handlers =========

        // ========== Methods =========

        self.DownloadSessionSlides =
            function 
                (
                    SessionKey,
                    SlideCount
                )
            {
                var SlideImageFileURI = encodeURI("http://cloudvotepro1.blob.core.windows.net/sessions/v1/Sub069674/App20/Tem/Ses156373/Res/Slide5.JPG");

                var DataStore = cordova.file.dataDirectory;
                alert(DataStore);

                var FileName = "Ses" + SessionKey + "Slide1.JPG";

                self.DownloadFile
                        (
                            SlideImageFileURI,
                            DataStore + FileName,
                            alert("Success!"),
                            alert("ERROR")
                        );
            }

        self.DownloadFile = 
            function
                (
                    SourceFileURL,
                    DestinationFileFullPathName,
                    SuccessCallback,
                    ErrorCallback
                )
            {

                var myFileTransfer = new FileTransfer();

                myFileTransfer
                    .download
                    (
                        targetSourceFileURL,
                        targetDestinationFileFullPathName,
                        SuccessCallback,
                        ErrorCallback
                    );

            }

    }



