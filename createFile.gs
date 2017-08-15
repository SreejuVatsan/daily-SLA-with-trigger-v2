// Created by Sreeju Sreevatsan <sreeju.sreevatsan@kohls.com> 01/31/2017

function createFile(name, parentsId) { // replacement for DriveApp.createFile with Google mimeType
  var resource = {
    title: name,
    mimeType: MimeType.GOOGLE_SHEETS,
    parents: [{id: parentsId}]
  };
  var fileCreated = Drive.Files.insert(resource);  
  return fileCreated.id;
}