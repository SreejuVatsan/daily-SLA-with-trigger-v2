// Created by Sreeju Sreevatsan <sreeju.sreevatsan@kohls.com> 01/28/2017

function main() {
  var startTime = new Date(), exception;
  try{
    var inputQuery = "from:(servicenow@kohls.com) subject:(Scheduled Execution of Daily Resolved SLA Report)";
    var inputFoldername = "Daily Resolved SLA Report";
    var reportSheets = delnsaveAttachmentToGDrive(inputQuery, inputFoldername);
    var dumpSheet = prepDumpSheet(reportSheets);
    validateData(dumpSheet);
    openSheetOfEachMonth(dumpSheet);
    //notificationEmail();
  }
  catch(e){
    exception = // Created by Sreeju Sreevatsan <sreeju.sreevatsan@kohls.com> 01/28/2017

function main() {
  var startTime = new Date(), exception;
  try{
    var inputQuery = "from:(servicenow@kohls.com) subject:(Scheduled Execution of Daily Resolved SLA Report)";
    var inputFoldername = "Daily Resolved SLA Report";
    var reportSheets = delnsaveAttachmentToGDrive(inputQuery, inputFoldername);
    var dumpSheet = prepDumpSheet(reportSheets);
    validateData(dumpSheet);
    openSheetOfEachMonth(dumpSheet);
    //notificationEmail();
  }
  catch(e){
    exception = e+e.stack;
  }
  var endTime = new Date();
  updateTriggerStats("main()", startTime, endTime, exception);
};


/**
* Adds a custom menu to the active spreadsheet, containing a single menu item
* for invoking the readRows() function specified above.
* The onOpen() function, when defined, is automatically invoked whenever the
* spreadsheet is opened.
* For more information on using the Spreadsheet API, see
* https://developers.google.com/apps-script/service_spreadsheet
*/
/*function onOpen() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var entries = [
    { name : "validateData()", functionName : "validateData" },
    { name : "Email Summary", functionName : "summaryEmail" },
    { name : "Reset Sheet", functionName : "resetSpreadSheet" }
  ];
  spreadsheet.addMenu("Script Center Menu", entries);
};*/
;
  }
  var endTime = new Date();
  updateTriggerStats("main()", startTime, endTime, exception);
};


/**
* Adds a custom menu to the active spreadsheet, containing a single menu item
* for invoking the readRows() function specified above.
* The onOpen() function, when defined, is automatically invoked whenever the
* spreadsheet is opened.
* For more information on using the Spreadsheet API, see
* https://developers.google.com/apps-script/service_spreadsheet
*/
/*function onOpen() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var entries = [
    { name : "validateData()", functionName : "validateData" },
    { name : "Email Summary", functionName : "summaryEmail" },
    { name : "Reset Sheet", functionName : "resetSpreadSheet" }
  ];
  spreadsheet.addMenu("Script Center Menu", entries);
};*/
