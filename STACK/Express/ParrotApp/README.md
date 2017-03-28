# ParrotApp
A basic use of express which returns the get query parameters. 

# Get it running
First we must start the express server via: 
```
node index.js
```
Then we can send a get query on the "/" route via the web browser:
```
http://127.0.0.1:3000/?ref=bookmarks&tst=hey
```
Upon sending the query, the console window in which you ran the index.js will have a console output of the get parameters in the format of a dictionary object. If you used the above query, you will get the following output:
```
{ ref: 'bookmarks', tst: 'hey' }
```

# Tips 
What I needed to run to create this project and install its dependencies. 

```
npm init
npm install express --save
```