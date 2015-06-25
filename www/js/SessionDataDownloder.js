
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
                try {

                var SlideImageFileURI = encodeURI("http://cloudvotepro1.blob.core.windows.net/sessions/v1/Sub069674/App20/Tem/Ses156373/Res/Slide5.JPG");
                var DataStore = cordova.file.dataDirectory;
                var FileName = "Ses" + SessionKey + "Slide1.JPG";

                //window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);

                alert("DownloadFile( " + SlideImageFileURI + ", " + DataStore + FileName + " )");

                self.DownloadFile
                        (
                            SlideImageFileURI,
                            DataStore + FileName,
                            function ()
                            {
                                window.resolveLocalFileSystemURI(DataStore + FileName, alert("File exists at:" + DataStore + FileName), alert("File doe NOT exists at:" + DataStore + FileName));
                            },
                            function () { alert("DownloadFile() ERROR") }
                        );

                } catch (e) {
                    alert(e.message)
                }
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
                try {

                var myFileTransfer = new FileTransfer();

                myFileTransfer
                    .download
                    (
                        SourceFileURL,
                        DestinationFileFullPathName,
                        SuccessCallback,
                        ErrorCallback
                    );

                } catch (e) {
                    alert(e.message)
                }
            }

    }



