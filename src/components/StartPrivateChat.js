// import React, { useState } from 'react';
// import { auth, db } from '../firebase';
// import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// const StartPrivateChat = () => {
//   const [recipientEmail, setRecipientEmail] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const currentUser = auth.currentUser;

//     if (!currentUser) {
//       alert('You must be logged in to start a chat.');
//       return;
//     }

//     if (!recipientEmail) {
//       alert('Please enter a valid email address.');
//       return;
//     }

//     // Create userIds array with both emails
//     const userIds = [currentUser.email, recipientEmail];
//     userIds.sort(); // Sort to maintain consistent order

//     try {
//       await addDoc(collection(db, 'private_conversations'), {
//         userIds,
//         createdAt: serverTimestamp(),
//         lastUpdated: serverTimestamp(),
//       });
//       alert('Private chat started!');
//     } catch (error) {
//       console.error('Error creating private chat:', error);
//       alert('Failed to start private chat. Please try again.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Recipient Email:
//         <input
//           type="email"
//           value={recipientEmail}
//           onChange={(e) => setRecipientEmail(e.target.value)}
//           required
//         />
//       </label>
//       <button type="submit">Start Chat</button>
//     </form>
//   );
// };

// export default StartPrivateChat;

