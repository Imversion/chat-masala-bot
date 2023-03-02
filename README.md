# Chat masala bot plugin for websites

## Getting started with npm package

### To install
```
npm install https://github.com/Imversion/chat-masala-bot.git
```
### Setup
- Step 1
	import in index or main file of your project
	Ex: ```import { insertBotButton } from 'chat-masala-bot';```

- Step 2
	Add id "maindiv" to your websites main html tag
	Ex: <div id="maindiv">
			...
			Your website content
			...
		</div> 
- Step 3
	Call ``insertBotButton()`` method in your code
	Caution: This method should be called after DOM initialize in NEXT projects



# Getting started with javaScript

### For non wordpress project who has code access
copy and paste bellow code snippet to you main <head> tag

```
<link rel="stylesheet" href="https://imversion.s3.us-west-2.amazonaws.com/bot.css"/>
<script src="https://imversion.s3.us-west-2.amazonaws.com/bot.js" defer/>
```

### For Wordpress user
 - Add new pluggin call `WPCode Lite` formally known as `WP Header and Footer`
 - Now you can see new menu `Code Snippets`
 - Got Code Snippets -> Header and Footer
 - Add bellow code to header section
 ```
 <link rel="stylesheet" href="https://imversion.s3.us-west-2.amazonaws.com/bot.css"/>
<script src="https://imversion.s3.us-west-2.amazonaws.com/bot.js" defer/>
```
