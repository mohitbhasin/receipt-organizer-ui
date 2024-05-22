# Receipt Organizer Ui

This is the UI for Receipt Organizer. The project digitize images of physical receipts and stores the content for viewing later.

## Project Description

The uploaded image gets scanned for list of items having prices and stores them in database. Upon selecting the receipt title, itemized list of products is displayed with option to discard.

TypeScript and Angular Framework have been used for the development as they have wide variety of libraries and features, including Material design components and client-server communication.

Some of the challenges faced during the developing were:
- Setting up datasource for the table.
- Setting up Dialog box for viewing the receipts.

Features for the future:
- Adding search functionality for the items.
- Adding sort functionality on the table.
- Automatic refresh table after upload.

![Image](https://github.com/mohitbhasin/receipt-organizer-ui/blob/develop/upload.gif?raw=true)

## How to run the project
### Prerequisites
- Make sure backend service is up and running (link - https://github.com/mohitbhasin/receipt-organizer)
- Running latest version of node.

### Setup and Run
- Clone the repository, install dependencies and start the application:
```
$git clone https://github.com/mohitbhasin/receipt-organizer-ui.git

$cd receipt-organizer-ui

$npm install

$ng serve
```
## How to use the project
- Click the browse button to select the image of the receipt to upload.
- The dialog will appear with the list of items that have been read. Choose to accept or delete.
- Historical receipts can be viewed by selecting desired title from the table.