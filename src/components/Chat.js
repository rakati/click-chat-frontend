import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, TextField, Container, Box, Grid, Paper, IconButton, Avatar, List, ListItemButton, ListItemAvatar, ListItemText } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CallIcon from '@mui/icons-material/Call';
import SearchIcon from '@mui/icons-material/Search';

const chatData = [
  { name: "Jasmine Thomp", message: "Incoming Video Call", time: "45 min", avatar: "/tmp-img/profile-sm-1.jpg" },
  { name: "Konstantin Frank", message: "I'm open to other ideas", time: "1 day", avatar: "/tmp-img/profile-sm-2.jpg" },
  { name: "Marie George", message: "We can sneak in a call", time: "2 days", avatar: "/tmp-img/profile-sm-3.jpg" },
  // Add more mock data as needed
];

function Chat() {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // Handle sending message logic
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            ClickChat
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>

      <Grid container sx={{ height: '90vh', padding: 2 }}>
        {/* Sidebar with Chats */}
        <Grid item xs={3}>
          <Paper sx={{ height: '100%', padding: 2, backgroundColor: '#F5F7FA' }}>
            <Typography variant="h6" color="primary" gutterBottom>
              Chats
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
              <TextField fullWidth placeholder="Search contact / chat" variant="outlined" />
              <IconButton><SearchIcon /></IconButton>
            </Box>
            <List>
              {chatData.map((chat, index) => (
                <ListItemButton key={index} sx={{ marginBottom: 2 }}>
                  <ListItemAvatar>
                    <Avatar src={chat.avatar} />
                  </ListItemAvatar>
                  <ListItemText primary={chat.name} secondary={chat.message} />
                  <Typography variant="body2" color="textSecondary">
                    {chat.time}
                  </Typography>
                </ListItemButton>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Chat Area */}
        <Grid item xs={9}>
          <Paper sx={{ height: '100%', padding: 2 }}>
            {/* Chat Header */}
            <Grid container alignItems="center" sx={{ borderBottom: '1px solid #e0e0e0', paddingBottom: 2, marginBottom: 2 }}>
              <Grid item xs={8}>
                <Typography variant="h6" color="primary">Jasmine Thomp</Typography>
                <Typography variant="body2" color="textSecondary">Active</Typography>
              </Grid>
              <Grid item xs={4} sx={{ textAlign: 'right' }}>
                <IconButton><CallIcon /></IconButton>
                <IconButton><VideoCallIcon /></IconButton>
                <IconButton><AttachFileIcon /></IconButton>
              </Grid>
            </Grid>

            {/* Messages Section */}
            <Box sx={{ height: 'calc(100vh - 200px)', overflowY: 'auto', paddingRight: 2 }}>
              {/* Example Messages */}
              {Array(20).fill(null).map((_, idx) => (
                <Box sx={{ marginBottom: 2 }} key={idx}>
                  <Avatar src="/tmp-img/profile-md-1.jpg" sx={{ float: 'left', marginRight: 1 }} />
                  <Paper sx={{ display: 'inline-block', padding: 2, backgroundColor: '#f0f0f0' }}>
                    <Typography>{`Message from Jasmine - ${idx + 1}`}</Typography>
                  </Paper>
                </Box>
              ))}
              <Box sx={{ marginBottom: 2, textAlign: 'right' }}>
                <Avatar src="/tmp-img/profile-md-1.jpg" sx={{ float: 'right', marginLeft: 1 }} />
                <Paper sx={{ display: 'inline-block', padding: 2, backgroundColor: '#007BFF', color: 'white' }}>
                  <Typography>Do you know which app or feature it will require?</Typography>
                </Paper>
              </Box>
              {/* Add more messages */}
            </Box>

            {/* Input Field for Sending Messages */}
            <Grid container alignItems="center" sx={{ borderTop: '1px solid #e0e0e0', paddingTop: 2 }}>
              <Grid item xs={11}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Type a message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Grid>
              <Grid item xs={1}>
                <IconButton onClick={handleSendMessage}>
                  <SendIcon color="primary" />
                </IconButton>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default Chat;
