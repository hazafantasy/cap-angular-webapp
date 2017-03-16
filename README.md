# cap-angular-webapp

# Running
In order to make this project run you need gradle installed.
Clone this repo, build with gradle and run the .jar with:
    
    git clone https://github.com/hazafantasy/cap-angular-webapp.git
    cd cap-angular-webapp
    gradle clean build
    java -jar build/libs/cap-angular-webapp-0.1.0.jar.original
    
# Making changes to the Angular2 Front End
If you wanna make a change to the Front End which is an Angular2 app, you
need to have NodeJS (Version 6.10.0 or higher) and npm (v3.10.10 or higher).
To install the necesary dependencies inside the angular2FrontEnd/ directory do:

    npm install
    
If you want to test your changes using a built-in web-server then do:
        
    npm start
    
If you want to publish the changes and pack them along the spring boot
.jar you need to build with npm and then copy the files to the public
directory of spring boot
    
    npm run build.prod
    cp -rf ./dist/prod/* ../src/main/resources/public/
    
   