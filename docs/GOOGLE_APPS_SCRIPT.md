# 🚀 Google Apps Script Automation for Flowzonic Solution

This document contains the instructions and code to connect your website's contact form to a Google Sheet and enable automated email replies.

## 📋 Steps to Setup

1.  **Create a Google Sheet**: Create a new Google Sheet where you want to store submissions.
2.  **Open Script Editor**: Go to `Extensions` > `Apps Script`.
3.  **Paste Code**: Delete everything in the editor and paste the code below.
4.  **Deploy**:
    *   Click the **Deploy** button > **New deployment**.
    *   Select type: **Web app**.
    *   Description: `Flowzonic Lead Capture`.
    *   Execute as: **Me** (your email).
    *   Who has access: **Anyone**.
5.  **Authorize**: Click deploy, then authorize the script to access your Sheets and Mail.
6.  **Copy URL**: Copy the "Web App URL" provided after deployment.
7.  **Update Website**: Paste this URL into the `APPS_SCRIPT_URL` constant in `src/app/contact/page.tsx`.

## 💻 Apps Script Code

```javascript
/**
 * Flowzonic Solution - Automation Engine
 * This script handles POST requests from the contact form.
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    
    // 1. Log to Google Sheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[0]; // Uses the first sheet
    
    // Add header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Email", "Phone", "Service", "Message", "ID"]);
      sheet.getRange("1:1").setFontWeight("bold").setBackground("#F0EEFF");
    }
    
    sheet.appendRow([
      new Date(), 
      data.name, 
      data.email, 
      "'" + data.phone, // Force string for phone numbers
      data.service, 
      data.message,
      data.id
    ]);
    
    // 2. Send Auto-Reply Email to Lead
    sendAutoReply(data.email, data.name, data.service);
    
    // 3. Send Notification to Admin (You)
    sendAdminNotification(data);

    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendAutoReply(email, name, service) {
  var subject = "Flow Initiated: We received your inquiry! - Flowzonic Solution";
  var body = "Hi " + name + ",\n\n" +
             "Thank you for reaching out to Flowzonic Solution. We've received your request regarding " + service + ".\n\n" +
             "Our team is currently reviewing your details, and one of our specialists will get back to you within 24 hours to schedule a consultation.\n\n" +
             "In the meantime, feel free to check out our latest insights on our blog: https://flowzonic.solutions/blog\n\n" +
             "Best regards,\n" +
             "Alex Flow\n" +
             "Founder, Flowzonic Solution";
             
  MailApp.sendEmail(email, subject, body);
}

function sendAdminNotification(data) {
  var adminEmail = "flowzonicsolutions@gmail.com"; // Your admin email
  var subject = "🔥 NEW LEAD: " + data.name + " (" + data.service + ")";
  var body = "You have a new lead from Flowzonic Solution:\n\n" +
             "Name: " + data.name + "\n" +
             "Email: " + data.email + "\n" +
             "Phone: " + data.phone + "\n" +
             "Service: " + data.service + "\n" +
             "Message: " + data.message + "\n\n" +
             "View in Sheet: " + SpreadsheetApp.getActiveSpreadsheet().getUrl();
             
  MailApp.sendEmail(adminEmail, subject, body);
}
```
