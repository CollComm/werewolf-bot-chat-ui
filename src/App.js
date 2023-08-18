
import React from 'react';
import {Avatar, ChatContainer, Message, MessageInput, MessageList, MessageSeparator} from "./components";


function App() {
  return (
      <div style={{ position:"relative", height: "500px" }}>
          <ChatContainer>
            <MessageList>
                <MessageSeparator content="First Round" />
                <Message model={{
                    message: "Player 1, you are a werewolf",
                    sentTime: "5 mins ago",
                    sender: "Joe",
                    direction: "outgoing",
                    position: "single"
                }}>
                    <Avatar src="https://www.w3schools.com/howto/img_avatar.png" name="Joe" />
                </Message>
              <Message model={{
                message: "Hello my friend",
                sentTime: "5 mins ago",
                sender: "Joe",
                  direction: "incoming",
                    position: "single"
              }}>
                  <Avatar src="https://www.w3schools.com/howto/img_avatar.png" name="Joe" />
                </Message>
                <Message model={{
                    message: "I am not a werewolf",
                    sentTime: "just now",
                    sender: "Joe",
                    direction: "incoming",
                    position: "single"
                }} avatarSpacer={true} />
                <Message model={{
                    message: "I want to help out the town",
                    sentTime: "just now",
                    sender: "Joe",
                    direction: "incoming",
                    position: "single"
                }} avatarSpacer={true} />

            </MessageList>
            <MessageInput placeholder="Type message here" attachButton={false} />
          </ChatContainer>

      </div>
  );
}

export default App;
