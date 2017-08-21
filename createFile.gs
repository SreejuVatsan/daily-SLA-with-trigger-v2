function createFile(name, parentsId) { // replacement for DriveApp.createFile with Google mimeType
  var resource = {
    title: name,
    mimeType: MimeType.GOOGLE_SHEETS,
    parents: [{id: parentsId}]
  };
  var fileCreated = Drive.Files.insert(resource);  
  return fileCreated.id;
}
