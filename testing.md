**Overview**
Test the functionality of Duel Duo. 

**Links.**
localhost:3000

**Test Criteria:**
- Buttons work correctly 
- Users can select all robots, but can only use 2 
- Counter works correctly 
- Computer will always select 2 robots 

**Entry Criteria:**
- Go to the link above

**Exit Criteria:**
- All the tests have passed
- The allotted time has been used

**Extra Details**
- Find more ways for user to interact 

TEST CASE: button functionality

**Description**
(smoke test/high-level test) verify that a user can use the buttons around the site

**Steps:**
1. Navigate to the home page
2. Click buttons for: 
- See all bots
- Draw
3. Click Draw
4. Click buttons for: 
- Add to duo
- Remove from duo
- Duel!
- Play again

**Postconditions:**
- See all bots should load all the bots in database
- Draw should load 5 bots
- Add to duo should move robot to players "hand"
- Duel should have players duo battle the computers duo
- Play again should have player select more bots


Bug Report: 

**Description**
When clicking see all bots, nothing happens and an error appears in the console

**Links:**
localhost:3000

**Steps to reproduce:**
1. Go to the home page
2. Click "see all bots" 

**Expected Result:**
- All bots are displayed on the screen 

**Actual Result:**
- Nothing changes

**Environment:**
- Browser: Chrome v103
- OS: Windows 11