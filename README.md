# Emaily
Survey Email App

Created following tutorial on Udemy.com: Node with React: Fullstack Web Development

Heroku URL:
https://nameless-sands-41702.herokuapp.com/


This app uses the following technologies:
 1. React
 2. Node.js
 3. Mongo and Mongoose
 4. Redux
 5. Passport
 
 This app uses the following APIs:
 1. SendGrid API
 2. Stripe API
 3. Google OAuth
 
 
 Purpose of app:
 
 Allows users to create a Yes/No survey to send to a group of users and collect feedback. Users can send emails as long as they have a
 positive amount of credits. Credits can be added via credit card with Stripe API. Emails are sent out using SendGrid API, which also
 has a feature to record user actions on emails. From this we can know which option the recipient has clicked on in the email. This
 information is then stored in the mongo database. Some of this information is displayed on the user's dashboard. No one else can see
 another users data because of Google OAuth which is required to use email services.
