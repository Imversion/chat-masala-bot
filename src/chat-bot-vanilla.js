insertBotButton();
// Function to close bot
// this will dismis the bot UI
function closeBot() {
	const element = document.getElementById('botUi');
	if (element) {
	  element.remove();
	} else {
	  throw Error('Bot UI is not present');
	}
  }
  // Function to add bot UI
  // This will inject bot ui / bot input
  function insertBotUI() {
	const html =
	  '<div id="botUi" style="position:fixed; bottom: 50px;width: -webkit-fill-available;"><object type="text/html" data="https://chat-masala.imvcloud.com/" style="overflow:auto;z-index:9999;width: inherit;height: 500rem;"></object></div>';
	const main = document.getElementById('maindiv');
	if (main) {
	  main.insertAdjacentHTML('afterend', html);
	} else {
	  throw Error('Please add [maindiv] as id to your main div/ui section');
	}
  }
  // Function to toggle open and close bot UI and toggle bot icon button
  function toggleBot() {
	if (document.getElementById('botUi')) {
	  closeBot();
	  document.getElementById('botButton').src = 'images/bot.png';
	} else {
	  insertBotUI();
	  document.getElementById('botButton').src = 'images/close.png';
	}
  }
  // Function to insert bot button
  function insertBotButton() {
	if (!document.getElementById('botButton')) {
	  insertMediaStyleForBotButton();
	  const button = '<img id="botButton" style=position:fixed;bottom:5vw;right:50px;padding:10px;height:7vw;width:7vw;z-index:1;border-radius:50%;background:#D9D9D9; src="images/bot.png" alt="img" />';
	  const main = document.getElementById('maindiv');
	  if (main) {
		main.insertAdjacentHTML('afterend', button);
		document.getElementById('botButton').onclick = toggleBot;
	  } else {
		throw Error('Please add [maindiv] as id to your main div/ui section');
	  }
	}
  }
  // Function to add media query css
  function insertMediaStyleForBotButton(){
	// Create a new style element
	var styleElement = document.createElement('style');
	// Set the text content to the CSS code
	styleElement.textContent = ' @media (max-width: 568px) { #botButton { height: 12vw !important; width: 12vw !important;}}';
	// Append the style element to the head section
	document.head.appendChild(styleElement);
  }
  
//   export { insertBotUI, insertBotButton, closeBot };
  