# Twilio Client-Server API Project

This project is a simple client-server application built using Twilio's serverless functions. It allows users to send messages, including pictures, to a Twilio number. These messages are then displayed on a webpage (`index.html`). When a message is sent, the sender receives a response saying, "Thanks for sharing."

## Project Overview

This project was developed to practice and learn more about working with APIs. The project was created with guidance from a YouTube tutorial.

### Features

- Send messages (including pictures) to a Twilio number.
- Display received messages and pictures on a webpage.
- Automatically respond to senders with a thank you message.

### Files

The project consists of three main files:

1. **index.html**: The main webpage that displays the messages and pictures sent by users. It uses the Vue framework and Fetch API to fetch details from the `update_pics_server-side_api.js`.

2. **incoming_mess_reply.js**: A Twilio function that handles incoming messages and sends a response back to the sender.

3. **update_pics_server-side_api.js**: A Twilio function that updates the messages (pictures with captions) sent by users on the `index.html`.

### Demo

You can see a sample of how the `index.html` looks [here](https://api-demo-7438.twil.io/index.html).

## Getting Started

To run this project, you will need to set up a Twilio account and configure the necessary Twilio functions.

### Prerequisites

- A Twilio account
- Node.js and npm installed on your local machine
- Basic knowledge of Vue.js

### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/twilio-client-server-api.git
   cd twilio-client-server-api
   ```

2. **Install dependencies:**

   Navigate to the project directory and install the necessary dependencies (if any).

3. **Configure Twilio Functions:**

   - Create a new function for `incoming_mess_reply.js` in the Twilio Console under Functions.
   - Create another function for `update_pics_server-side_api.js`.
   - Deploy both functions and note their URLs.

4. **Update index.html:**

   - In `index.html`, update the Fetch API URL to point to your `update_pics_server-side_api.js` function URL.

5. **Run the project:**

   - Open `index.html` in a web browser to see the updated messages and pictures.

## Usage

- Send a message or picture to your Twilio number.
- The message will be displayed on the webpage.
- The sender will receive a response saying, "Thanks for sharing."

## Acknowledgments

This project was developed with the guidance of a YouTube tutorial. It was created to practice and learn more about working with APIs and Twilio.
Certainly! Here's the revised Acknowledgments section with the requested additions:

This project extends its gratitude to the following individuals and resources:

- YouTube content creator for their detailed [tutorial](https://youtu.be/WXsD0ZgxjRw?si=76WCd6kmxRVmi_jA) that provided essential guidance on building serverless functions with Twilio.
- The Twilio team for their robust documentation, tools, and support that significantly contributed to the development of this project.

This project is a testament to collaborative learning and shared knowledge within the developer community.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---
