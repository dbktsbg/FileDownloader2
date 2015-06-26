
SessionDataDownloader =
    function ()
    {
        // ========== Properties ==========
        var self = this;
        self.DataStore = new Object(0);

        // ========== Event Handlers =========

        // ========== Methods =========

        self.Initialize =
            function ()
            {
                window
                    .requestFileSystem
                    (
                        LocalFileSystem.PERSISTENT,
                        0,
                        self.OnRequestFileSystemSucceeded,
                        self.OnRequestFileSystemFailed
                    );
            }

        self.OnRequestFileSystemSucceeded =
            function ()
            {
                self.DataStore = cordova.file.dataDirectory;
            }

        self.OnRequestFileSystemFailed =
            function ()
            {
                alert("Request File System Failed");
            }

        self.DownloadSessionSlides =
            function 
                (
                    SessionKey,
                    SlideCount
                )
            {
                try {

                var SlideImageFileURI = encodeURI("http://cloudvotepro1.blob.core.windows.net/sessions/v1/Sub069674/App20/Tem/Ses156373/Res/Slide5.JPG");
                //var DataStore = cordova.file.dataDirectory;
                var FileName = "Ses" + SessionKey + "Slide1.JPG";
                
                alert("DownloadFile( " + SlideImageFileURI + ", " + self.DataStore + FileName + " )");

                self.DownloadFile
                        (
                            SlideImageFileURI,
                            self.DataStore + FileName,
                            function ()
                            {
                                window.resolveLocalFileSystemURI(self.DataStore + FileName, alert("File exists at:" + self.DataStore + FileName), alert("File doe NOT exists at:" + self.DataStore + FileName));
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


        // ---------- Constructor ----------
        
        self.Initialize();

    }



