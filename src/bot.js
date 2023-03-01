
//  // Function to add media query css
//  function insertMediaStyleForBotButton(){
// 	// Create a new style element
// 	let styleElement = document.createElement( 'style' );
// 	// Set the text content to the CSS code
// 	styleElement.textContent = ' @media (max-width: 568px) { #botButton { height: 12vw !important; width: 12vw !important;}}';
// 	// Append the style element to the head section
// 	document.head.appendChild( styleElement );
// }

 // Function to insert bot button
function insertBotButton() {
	if ( ! document.getElementById( 'botButton' ) ) {
	//   insertMediaStyleForBotButton();
	  const button = '<img id="botButton" class="bot-button" src="https://imversion.s3.us-west-2.amazonaws.com/bot.png" alt="img" />';
	  let template =document.createElement( 'div' );
	  template.innerHTML = button;
	  document.body.appendChild( template );
	  document.getElementById( 'botButton' ).onclick = toggleBot;
	}
}
// Function to close bot ui
function closeBot() {
	const element = document.getElementById( 'botUi' );
	if ( element ) {
	  element.remove();
	} else {
	  throw Error( 'Bot UI is not present' );
	}
}

  // Function to add bot UI
  // This will inject bot ui / bot input
function insertBotUI() {
	const html =
	  `<div id="botUi" class="bot-ui"><object type="text/html" data="https://chat-masala.imvcloud.com?${window.location.hostname}" class="bot-input"></object></div>`;
	document.body.insertAdjacentHTML( 'afterend', html );
}

 // Function to toggle open and close bot UI and toggle bot icon button
function toggleBot() {
	if ( document.getElementById( 'botUi' ) ) {
	  closeBot();
	  document.getElementById( 'botButton' ).src = 'https://imversion.s3.us-west-2.amazonaws.com/bot.png';
	} else {
	  insertBotUI();
	  document.getElementById( 'botButton' ).src = 'https://imversion.s3.us-west-2.amazonaws.com/close.png';
	}
}

// insertMediaStyleForBotButton();
insertBotButton();
