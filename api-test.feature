Feature: Testing Student API using Karate

  Background:
    * url 'http://localhost:3000'

  Scenario: Get all students
    Given path 'students'
    When method get
    Then status 200
    And match response[0].name == 'Lara'

  Scenario: Get student by ID
    Given path 'students', 2
    When method get
    Then status 200
    And match response.course == 'Information Technology'

  Scenario: Add new student
    Given path 'students'
    And request { name: 'Alex', course: 'Data Science' }
    When method post
    Then status 201
    And match response.name == 'Alex'
