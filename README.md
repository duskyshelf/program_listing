# A-Z Program List

#### Tools Used

Testing: Karma, Protractor  
Frameworks: Angular, Bootstrap  

## How to build

All commands assume you are running this from terminal.

1. Clone this repo and open the containing folder
  * `git clone https://github.com/duskyshelf/program_listing.git`
2. Make sure you have node and bower: `node -v` and `bower -v`  
3. Run `bower install`  
4. Run `npm install`  
5. Run `http-server`  
6. Visit: [http://localhost:8080/ ](http://localhost:8080/ )

### Testing

Run the following commands from terminal to run the tests

##### Karma (Unit Tests):  
1. `karma start test/karma.conf.js`

##### Protractor (Feature Tests):
(these will require separate terminal windows)  
1. `webdriver-manager start`  
2. `http-server`  
3. `protractor test/protractor.conf.js`  

#### Comments about build

I would have liked to have spent more time on styling, especially with regard to responsive design and the narrow view.
