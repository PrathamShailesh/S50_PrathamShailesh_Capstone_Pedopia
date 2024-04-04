import React, { useState } from 'react';
import { FiSearch, FiSend } from 'react-icons/fi'; // Importing search and send icons from react-icons
import TextField from '@mui/material/TextField';
import { Button, Grid } from '@mui/material';
import NavMainpage from '../Mainpage/Nav-Mainpage';

function ChatBox() {
  const [selectedChat, setSelectedChat] = useState(null);

  const userChats = [
    { id: 1, name: "John Doe", profile: "profile_url_1" },
    { id: 2, name: "Jane Smith", profile: "profile_url_2" },
    { id: 3, name: "Alice Johnson", profile: "profile_url_3" },
    // Add more user chats as needed
  ];

  const messages = [
    { id: 1, text: "Hey, how's it going?", senderId: 1 },
    { id: 2, text: "Not bad, you?", senderId: 2 },
    { id: 3, text: "Pretty good. Did you finish that project?", senderId: 3 },
    // Add more messages as needed
  ];

  const getUserById = (userId) => {
    return userChats.find(user => user.id === userId);
  };

  const handleChatSelect = (chatId) => {
    setSelectedChat(chatId);
  };

  const renderProfile = () => {
    if (selectedChat) {
      const selectedUser = userChats.find(user => user.id === selectedChat);
      return (
        <div className="flex items-center mb-4 bg-gray-200 p-5">
          <img
            src="https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg"
            alt="Profile"
            className="rounded-full mr-2"
            style={{ width: '30px', height: '30px' }}
          />
          <span className="text-sm font-semibold">{selectedUser.name}</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="overflow-hidden h-screen">
      <NavMainpage />
      <div className="flex bg-gray-100 h-full relative">
        {/* Left sidebar for user chats */}
        <div className="w-1/4 border-r bg-white">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">Chats</h2>
            <div className="flex items-center">
              <TextField
                variant="outlined"
                placeholder="Search"
                size="small"
                InputProps={{
                  endAdornment: (
                    <Button variant="contained" color="primary" size="small">
                      <FiSearch size={20} />
                    </Button>
                  ),
                }}
              />
            </div>
          </div>
          <div className="overflow-y-auto">
            {userChats.map(chat => (
              <div key={chat.id} className="p-4 border-b hover:bg-gray-200 cursor-pointer transition-colors duration-200" onClick={() => handleChatSelect(chat.id)}>
                <span className="text-gray-800">{chat.name}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Main chat area */}
        <div className="flex-grow overflow-hidden px-4 bg-white flex flex-col relative pt-2">
          <div className="overflow-y-auto flex-grow">
            {renderProfile()}
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.id % 2 === 0 ? 'justify-end' : 'justify-start'} mb-4`}
              >
                <div
                  className={`max-w-md rounded-lg px-4 py-2 ${message.senderId % 2 === 0 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} shadow-md`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          {/* Send Message UI */}
          <div className="absolute bottom-12 left-0 right-0" style={{ marginBottom: '3rem' }}>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={10}>
                  <TextField
                    variant="outlined"
                    placeholder="Type a message..."
                    fullWidth
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button variant="contained" color="primary" startIcon={<FiSend />}>
                    Send
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
