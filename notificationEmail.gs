function notificationEmail() {
  var fullDate = new Date();  
  var currentMonth = fullDate.getMonth();
  var year = fullDate.getYear();
  var sheetName = currentMonth + " " + year ;
  //var emailAddress = "muthukumar.jayachandran@kohls.com, vijayakumar.jayakrishnan@kohls.com";  
  var emailAddress = "sreeju.sreevatsan@kohls.com"; 
  var emailCC = "";
  var subject = newSheetName + " sheet created" ;
  var body = "Hi Vijay / Muthu,\n \n"+ newSheetName + " sheet has been created.\n \n" + url;
  
  MailApp.sendEmail({
    to: emailAddress,
    cc: emailCC,
    subject: subject,
    body: body      
  });
}
