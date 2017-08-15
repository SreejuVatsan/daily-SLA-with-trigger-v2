/* 08/25/2016 - Created by Sreeju Sreevatsan <sreeju.sreevatsan@kohls.com>
*/
function updateTriggerStats(triggerFunction,startTime,endTime,exception) {
  var triggerStatsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("triggerStats");
  var numRows = triggerStatsSheet.getDataRange().getNumRows();
  //if(exception.equals("Report Data Empty")){
    triggerStatsSheet.getRange("A" + (numRows+1) + ":E" + (numRows+1)).setValues([[triggerFunction, startTime, endTime, "=C" + (numRows+1) + "-B" + (numRows+1), exception]]);    
 }