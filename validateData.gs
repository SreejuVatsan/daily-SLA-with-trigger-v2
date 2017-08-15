// Created by Sreeju Sreevatsan <sreeju.sreevatsan@kohls.com> 01/28/2017

function validateData(dumpSheet) {
  var dumpSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("incidentDump");
  var dumpSheetDataRange = dumpSheet.getDataRange();  
  var values = dumpSheetDataRange.getValues();  
  var newValues = new Array();
  
  //var targetFormula = "=IF(B:B=\"1 - Critical\",\"2:00:00\",IF(B:B=\"2 - High\",\"4:00:00\",IF(B:B=\"3 - Pageable Medium\",\"24:00:00\",IF(B:B=\"4 - Medium\",\"168:00:00\",IF(B:B=\"5 - Low\",\"336:00:00\",\"00:00:00\")))))";
  
  var targetFormula = "=IF(B:B=\"1 - Critical\",\"2:00:00\",IF(B:B=\"2 - High\",\"4:00:00\",IF(B:B=\"3 - Pageable Medium\",\"24:00:00\",IF(OR(AND(D:D=\"Desktop\",B:B=\"4 - Medium\"),AND(D:D=\"Store Systems Support\",B:B=\"4 - Medium\"),AND(D:D=\"Store Systems - Operations\",B:B=\"4 - Medium\"),AND(D:D=\"In Store Technology Support\",B:B=\"4 - Medium\")),\"120:00:00\",IF(B:B=\"4 - Medium\",\"168:00:00\",IF(OR(AND(D:D=\"Desktop\",B:B=\"5 - Low\"),AND(D:D=\"Store Systems Support\",B:B=\"5 - Low\"),AND(D:D=\"Store Systems - Operations\",B:B=\"5 - Low\"),AND(D:D=\"In Store Technology Support\",B:B=\"5 - Low\")),\"240:00:00\",IF(B:B=\"5 - Low\",\"336:00:00\",\"00:00:00\")))))))"
  var slaFormula = "=IF(VALUE(O:O)>VALUE(N:N),\"Breached\",\"Within SLA\")";
  
  for(var i=1; i <= (values.length - 1); i++){
    values[i][13] = targetFormula;
    values[i][14] = "=F"+ (i+1) +"-"+ "E" + (i+1);
    values[i][15] = slaFormula;
    
    var row = values[i];    
    newValues.push(row);
  }
  dumpSheet.getRange(2, 1, newValues.length, newValues[0].length).setValues(newValues);
  
}
