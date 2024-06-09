const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-btn");

let userMessage;
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}

function chatbot(input) {
    let output = "";

    input = input.toLowerCase();

    if (input.includes("hello") || input.includes("hi")) {
        output = "Hello, nice to meet you!";
    }

    else if (input.includes("how are you")) {
        output = "I'm doing fine, thank you for asking.";
    }

    else if (input.includes("what is your name")) {
        output = "My name is Ordis, I'm a chatbot.";
    }

    else if (input.includes("what can you do") || input.includes("what do you do")) {
        output = "I can chat with you and answer some simple questions.";
    }

    else if (input.includes("tell me a joke")) {
        output = "What do you call a magic dog? A labracadabrador!";
    }

    else if (input.includes("tell me another joke")) {
        const jokes = [
            "What did one hat say to the other? You wait here. I'll go on a head.",
            "What did the shark say when he ate the clown fish? This tastes a little funny.",
            "What's orange and sounds like a carrot? A parrot."
        ];
        const randomIndex = Math.floor(Math.random() * jokes.length);
        output = jokes[randomIndex];
    }

    else if (input.includes("thank")) {
        output = "Your welcome!";
    }
    

    else
        output = "Sorry, I don't understand that. Please try something else.";

    return output;
}

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;
    chatInput.value = "";
    //chatInput.style.height = `${inputInitHeight}px`;

    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    
    // Display "Thinking..." message while waiting for the response
    const thinkingMessage = createChatLi("Thinking...", "incoming");
    chatbox.appendChild(thinkingMessage);
    
    setTimeout(() => {
        // Remove the "Thinking..." message after a certain duration
        chatbox.removeChild(thinkingMessage);
        
        // Get response from chatbot function and append it to the chatbox
        const response = chatbot(userMessage);

        chatbox.appendChild(createChatLi(response, "incoming"));
        
        // Scroll to the bottom of the chatbox after adding messages
        chatbox.scrollTo(0, chatbox.scrollHeight);
    }, 600);
}

//chatInput.addEventListener("input", () => {
//    // Adjust the height of the input textarea based on its content
//    chatInput.style.height = `${inputInitHeight}px`;
//    chatInput.style.height = `${chatInput.scrollHeight}px`;
//});

//chatInput.addEventListener("keydown", (e) => {
//    // If Enter key is pressed without Shift key and the window
//    // width is greater than 800px, handle the chat
//    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
//        e.preventDefault();
//        handleChat();
//    }
//});

sendChatBtn.addEventListener("click", handleChat);
chatbotCloseBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));