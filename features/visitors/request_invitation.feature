Feature: Request Invitation
  As a visitor to the website
  I want to request an invitation
  so I can be notified when the site is launched

  Background:
    Given I am not logged in

  Scenario: User views home page
    When I visit the home page
    Then I should see a button "Request Invite"

  Scenario: User views invitation request form
    When I visit the home page
    And I click a button "Request Invite"
    Then I should see a form with a field "Email"

  Scenario: User signs up with valid data
    When I request an invitation with valid user data
    Then I should see a message "Thank You"
    And my email address should be stored in the database
    And my account should be unconfirmed


  Scenario: User signs up with invalid email
    When I request an invitation with an invalid email
    Then I should see an invalid email message

  Scenario: User sees Facebook "Share" button
    When I request an invitation with valid user data
    Then I should see a button "Like"

  Scenario: User sees Twitter "Share" button
    When I request an invitation with valid user data
    Then I should see a button "Tweet"
