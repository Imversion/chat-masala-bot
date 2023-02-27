# Chat masala bot plugin for websites

## Getting started

# To install
```
npm install https://github.com/Imversion/chat-masala-bot.git
```
# Setup
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

