// Funktion för att hämta användardata
async function fetchUsers() {
    try { // Försöker hämta användardata från servern
      const response = await fetch('http://localhost:3000/users');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const users = await response.json();
      return users;
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  
  // Anropar funktionen och hantera användardatan
  fetchUsers().then(users => {
    if (users) {
      console.log('Hämtade användare:', users);
      // Gör något med användardatan här, t.ex. visa den i gränssnittet
    }
  });
