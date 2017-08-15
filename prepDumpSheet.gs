
function prepDumpSheet(fileId) {
   
  var dataSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("incidentDump");
  
  //Clear old data on incidentDump sheet
  var dataSheetRange = dataSheet.getRange("A2:U");
  dataSheetRange.clear();
  dataSheetRange.clearDataValidations();
  
  //Update the Script sheet from servicenow report
  var reportSheet = SpreadsheetApp.openById(fileId[0]).getSheetByName("Page 1");
  var reportSheetRange = reportSheet.getRange(2, 1, reportSheet.getLastRow(), reportSheet.getLastColumn());
  dataSheet.getRange(2, 1, reportSheet.getLastRow(), reportSheet.getLastColumn()).setValues(reportSheetRange.getValues());  
  return dataSheet;
}