// Created by Sreeju Sreevatsan <sreeju.sreevatsan@kohls.com> 08/13/2016
function createTrigger() {
  //ScriptApp.newTrigger("main")
   //.timeBased().onWeekDay(ScriptApp.WeekDay.MONDAY).atHour(0).nearMinute(30).create();
  
  ScriptApp.newTrigger("main")
   .timeBased().everyDays(1).atHour(01).create();
  
  /*ScriptApp.newTrigger("analyzeData")
   .timeBased().onWeekDay(ScriptApp.WeekDay.MONDAY).atHour(1).create();*/
}