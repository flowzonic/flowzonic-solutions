
# 🚀 Updated Google Apps Script for Flowzonic Solution

This script handles incoming contact form data and is optimized for the latest version of the website.

## 📋 Setup Instructions

1.  **Create a Google Sheet**: Create a new spreadsheet.
2.  **Script Editor**: Go to `Extensions` > `Apps Script`.
3.  **Replace Code**: Paste the code below.
4.  **Deploy**:
    *   Click **Deploy** > **New deployment**.
    *   Type: **Web app**.
    *   Execute as: **Me**.
    *   Who has access: **Anyone**.
5.  **Copy URL**: Paste the resulting URL into your `.env` file as `NEXT_PUBLIC_APPS_SCRIPT_URL`.

## 💻 Apps Script Code

```javascript
/**
 * Flowzonic Solution - Lead Engine
 */

function doPost(e) {
  try {
    // Parse the data from the incoming request
    var data = JSON.parse(e.postData.contents);
    
    // 1. Log to Google Sheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[0];
    
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Email", "Phone", "Service", "Message", "AI Priority", "AI Summary"]);
      sheet.getRange("1:1").setFontWeight("bold").setBackground("#F0EEFF");
    }
    
    sheet.appendRow([
      new Date(), 
      data.name, 
      data.email, 
      "'" + data.phone, 
      data.service, 
      data.message,
      data.aiPriority || "Low",
      data.aiSummary || "N/A"
    ]);
    
    // 2. Send Emails
    sendAutoReply(data.email, data.name, data.service);
    sendAdminNotification(data);

    return ContentService.createTextOutput(JSON.stringify({ "status": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendAutoReply(email, name, service) {
  var subject = "🚀 We received your inquiry! - Flowzonic Solution";
  var body = "Hi " + name + ",\n\n" +
             "Thank you for reaching out to Flowzonic Solution. We've received your request regarding " + service + ".\n\n" +
             "Our team is currently reviewing your details, and one of our specialists will get back to you within 24 hours.\n\n" +
             "Best regards,\n" +
             "Alex Flow\n" +
             "Founder, Flowzonic Solution";
             
  MailApp.sendEmail(email, subject, body);
}

function sendAdminNotification(data) {
  var adminEmail = "contact@flowzonicsolutions.com"; 
  var subject = "🔥 NEW LEAD: " + data.name + " (" + data.service + ")";
  var body = "New inquiry from Flowzonic Solution website:\n\n" +
             "Name: " + data.name + "\n" +
             "Email: " + data.email + "\n" +
             "Phone: " + data.phone + "\n" +
             "Service: " + data.service + "\n" +
             "AI Priority: " + (data.aiPriority || "Medium") + "\n" +
             "AI Summary: " + (data.aiSummary || "No summary") + "\n\n" +
             "Message: " + data.message;
             
  MailApp.sendEmail(adminEmail, subject, body);
}
```
