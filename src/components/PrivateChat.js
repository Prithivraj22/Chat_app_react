// // components/PrivateChat.js
// import React, { useEffect, useState, useRef } from 'react';
// import { query, collection, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
// import { db, auth } from '../firebase';
// import { useAuthState } from 'react-firebase-hooks/auth';

// const PrivateChat = ({ location }) => {
//   const [user] = useAuthState(auth);
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState('');
//   const scroll = useRef();

//   const conversationId = location.state.conversationId;

//   useEffect(() => {
//     if (!conversationId) return;

//     const q = query(
//       collection(db, `private_conversations/${conversationId}/messages`),
//       orderBy('createdAt', 'asc')
//     );

//     const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
//       const fetchedMessages = [];
//       QuerySnapshot.forEach((doc) => {
//         fetchedMessages.push({ ...doc.data(), id: doc.id });
//       });
//       setMessages(fetchedMessages);
//     });

//     return () => unsubscribe();
//   }, [conversationId]);

//   const sendMessage = async (e) => {
//     e.preventDefault();
//     if (message.trim() === '') return;

//     await addDoc(collection(db, `private_conversations/${conversationId}/messages`), {
//       text: message,
//       name: user.displayName,
//       avatar: user.photoURL,
//       createdAt: serverTimestamp(),
//       uid: user.uid,
//     });

//     setMessage('');
//     scroll.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="chat-box">
//       <div className="messages-wrapper">
//         {messages.map((msg) => (
//           <div key={msg.id} className={`chat-bubble ${msg.uid === user.uid ? 'right' : ''}`}>
//             <img className="chat-bubble__left" src={msg.avatar} alt="user avatar" />
//             <div className="chat-bubble__right">
//               <p className="user-name">{msg.name}</p>
//               <p className="user-message">{msg.text}</p>
//             </div>
//           </div>
//         ))}
//         <span ref={scroll}></span>
//       </div>
//       <form onSubmit={sendMessage} className="send-message">
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Type a message..."
//         />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// };

// export default PrivateChat;
