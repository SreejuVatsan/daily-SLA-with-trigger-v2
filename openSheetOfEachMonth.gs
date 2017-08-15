// Created by Sreeju Sreevatsan <sreeju.sreevatsan@kohls.com> 01/30/2017

function openSheetOfEachMonth(dumpSheet) {
  var todayDate = new Date();
  //var todayDate = new Date("02/02/2017");
  var previousDate = new Date();
  previousDate.setDate(todayDate.getDate() - 1);
  if (todayDate.getDate() == 1){
    previousDate.setMonth(todayDate.getMonth() - 1);
  }
  //var fullDate = new Date("02/01/2017");
  var month = previousDate.getMonth();
  var year = previousDate.getYear();
  var date = previousDate.getDate();
  var googleSpreadSheetName = getMonth(month) + " " + year;
  var slaSpreadSheet,sheet;  
  var newDateSheet = getMonthShort(month) + " " + date;
  
  if(date ==1){
    //var folder = DriveApp.getFoldersByName("Kohls Daily SLA TEST");
    var folder = DriveApp.getFoldersByName("Kohls Daily SLA");
    if (folder.hasNext()) {
      folder = folder.next();
    } else {
      //folder = DriveApp.createFolder("Kohls Daily SLA TEST");
      folder = DriveApp.createFolder("Kohls Daily SLA");
    }

    slaSpreadSheet = createFile(googleSpreadSheetName, folder.getId());    
    sheet = SpreadsheetApp.openById(slaSpreadSheet);
    sheet.insertSheet(newDateSheet);
    sheet.getSheetByName('Sheet1').activate();
    sheet.deleteActiveSheet(); 
    
    //slaSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(sheetname , SpreadsheetApp.getActiveSpreadsheet().getNumSheets()+1);
    //slaSheet.getRange("A1:U1").setValues(header).setFontWeights(fontWeights);
  }
  else{
    //var folder = DriveApp.getFoldersByName("Kohls Daily SLA TEST");
    var folder = DriveApp.getFoldersByName("Kohls Daily SLA");
    if (folder.hasNext()) {
      folder = folder.next();
    }
    slaSpreadSheet = DriveApp.getFilesByName(googleSpreadSheetName).next().getId();
    sheet = SpreadsheetApp.openById(slaSpreadSheet);
    sheet.insertSheet(newDateSheet, (sheet.getSheets().length) + 1).activate();//sheet.insertSheet(sheetName, sheetIndex);    
  }
  var valuedumpSheetRange = dumpSheet.getRange(1, 1, dumpSheet.getLastRow(), dumpSheet.getLastColumn());
  sheet.getActiveSheet().getRange(1, 1, dumpSheet.getLastRow(), dumpSheet.getLastColumn()).setValues(valuedumpSheetRange.getValues());
  
  var sheetRange = sheet.getRange("Q2:Q" + sheet.getDataRange().getNumRows());
  var dropdownListValues = ['Vendor Dependency', 'Awaiting caller feedback', 'Non-Cognizant team', 'Ticket landed in queue post breach', 'Others_Specify'];
  var rule = SpreadsheetApp.newDataValidation().requireValueInList(dropdownListValues, true);
  sheetRange.setDataValidation(rule);  
  
}
