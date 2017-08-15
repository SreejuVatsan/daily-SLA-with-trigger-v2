// Created by Sreeju Sreevatsan <sreeju.sreevatsan@kohls.com> 09/21/2016

function delnsaveAttachmentToGDrive(inputQuery, inputFoldername) {
  //Search for the email thread and get the excel attachment
  var query = inputQuery;
  var threads = GmailApp.search(query,0,1);  
  var message = threads[0].getMessages()[threads[0].getMessageCount()-1];
  var attachment    = message.getAttachments();
  //Get folder on Google Drive - Remove old file - create new spreadsheet from the attachent under the folder
  var folder = DriveApp.getFoldersByName(inputFoldername);
  if (folder.hasNext()) {
    folder = folder.next();        
  } else {
    folder = DriveApp.createFolder(inputFoldername);
  } 
  //Delete the existing files
  var files = folder.getFiles();
  if(files.hasNext()){
    do{
      Drive.Files.trash(files.next().getId());
    }while(files.hasNext());
  }
  //Convert .xls attachment to Spreadsheet
  var parentFolder = [];
  parentFolder.push(folder.getId());
  var spreadsheetIds = new Array();
  //convertExcel2Sheets(attachment[0], attachment[0].getName(), parentFolder);
  spreadsheetIds.push(convertExcel2Sheets(attachment[0], attachment[0].getName(), parentFolder));
  //spreadsheetIds.push(convertExcel2Sheets(attachment[1], attachment[1].getName(), parentFolder));
  
  //Set file description
  var files = folder.getFiles();
  while(files.hasNext()){
    files.next().setDescription(message.getSubject() + message.getDate() + message.getBody());
  }
  return spreadsheetIds; 
}
