# Studenckie Karty

TO RUN PROJECT U NEED ATLEAST JAVA VERSION 19 INSTALLED AND MAVEN 3.1 <br />
USE BRANCH 0.1.0 TO BE SURE THAT "GAME" WORKS, THANK U :) <br />
GAME IS MADE FOR RESOLUTION 1920 X 1080, HIGHER OR LOWER RESOLUTION MAY CAUSE SOME DISPLAY ISSUES (SOME DISPLAY VARIABLES DO NOT SCALE :( ) <br />
PLEASE USE MASTER BRANCH <br />
PORT 9000 -> localhost:9000 <br />
H2 DATABASE: http://localhost:9000/h2-console <br />
DATABASE ACCOUNT: <br />
USER: sa <br />
password: [NO PASSWORD] <br />

WEB GAME PROJECT - BLACKJACK <br />
CREATE ACCOUNT AND SIGN IN TO PLAY AND GET POINTS. <br />

DESCRIPTION: <br />
MAIN GOAL OF THIS PROJECT WAS TO CREATE WEB GAME WITH USERS WHO CAN EARN POINTS FROM THEIR GAMES <br />
FROM HOME WITHOUT LOGGING IN TO ACCOUNT U CAN GO TO: RANKING, SEARCH FOR OTHERS PROFILE AND SEE AVIABLE GAMES <br />
WHEN LOGGED IN U CAN GO TO: YOUR PROFILE, PLAY GAME (GAMES -> PLAY SINGLEPLAYER) <br />
TO PLAY AGAIN REFRESH PAGE, THERE ARE NO BUTTONS TO NAVIGATE TO PLAY AGAIN OR QUIT AFTER FINISHED GAME <br />

DEALER DESCIRPTIONS: 
1. FROG - REGULAR DEALER AS IN BLACKJACK RULES, DOESNT TAKE CARDS IF HAS 17 POINTS OR LESS
2. BEAR - RANDOM DEALER - AFTER COLLECTINGS 11 POINTS RANDOMLY CHOOSES HIT OR STAND
3. RAVEN - ALWAYS TRIES TO GET MORE POINTS THAN PLAYER
4. SPIDER - NOT IMPLEMENTED YET

RUN: 
1. OPEN COMMAND LINE (CMD)
2. OPEN PROJECT LOCATION FROM CMD EXAMPLE: cd C:\projects\studenckieKarty
3. IN CMD ENTER: mvn package exec:java -Dexec.args=""

BUGS: 
1. BALANCE ON NAVIGATION BAR DOESNT UPDATE IN REAL TIME, BUT BALANCE WORKS CORRECTLY
2. CREATING ACCOUNT WITH USERNAME THAT ALREADY EXISTS CRASHES PROJECT, PLEASE CHECK RANKING FIRST TO BE SURE THAT USERNAME IS NOT TAKEN
3. WINDOW RESIZE MAY CAUSE DISPLAY ISSUES

# GALLERY

### PLACE BET
![place_bet](https://github.com/user-attachments/assets/9059e6f0-f55a-48c3-adef-0ee8f0235cde)

### SELECT DEALER
![select_dealer](https://github.com/user-attachments/assets/e433d04e-84d7-4f0a-8c18-40a66a3eb229)

### GAME - HIT
![game - hit](https://github.com/user-attachments/assets/5b16f6ad-7c7e-4204-b96a-feee24d6947a)

### GAME - STAND
![game-stand](https://github.com/user-attachments/assets/2daf5399-c47d-459e-beb0-deefa4e0438b)

### GAME - ACE
![game-ace](https://github.com/user-attachments/assets/8ee254c5-6f48-4bdd-84c7-c49af2c34518)

### HOME PAGE
![image](https://github.com/user-attachments/assets/1cc3b0e5-8c41-4f98-8095-ed2957df84d2)

### GAMES PAGE
![image](https://github.com/user-attachments/assets/4ff7008b-1d59-4d1a-8e08-8c6df7054371)

### RANKING
![image](https://github.com/user-attachments/assets/892f26c5-ec6c-4816-85d9-600a45faea48)

### PROFILE SEARCH
![image](https://github.com/user-attachments/assets/aa0a77a8-4152-487f-bde0-ba117d54411b)

### SIGN IN
![image](https://github.com/user-attachments/assets/a758d752-4c91-413b-bcf5-9e13036450f7)

### SIGN UP
![image](https://github.com/user-attachments/assets/5e0160c8-b59d-4f66-ab27-43d0317bde22)

### PROFILE
![image](https://github.com/user-attachments/assets/2cde69c5-2089-4fcc-9764-8b0bc5069777)

### INGAME - PLACE BET
![image](https://github.com/user-attachments/assets/ed9240f5-3f34-4c42-9e29-d43d01f2601a)

### INGAME - SELECT DEALER 
![image](https://github.com/user-attachments/assets/92a7ae49-92b2-49fc-98e3-3d34055cfb18)

### INGAME - START
![image](https://github.com/user-attachments/assets/3d988818-09ea-434c-acbe-2e2ef706e5dc)

### INGAME - ACE OCCURED 
![image](https://github.com/user-attachments/assets/34d592d6-25ba-4b0b-8d2a-071f4d42399a)

### INGAME - GAME FINISHED 
![image](https://github.com/user-attachments/assets/d76e93c2-2849-4a8c-b20b-b2773149234b)
