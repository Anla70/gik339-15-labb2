
const url = "http://localhost:3000/users";
fetch(url)
    .then((response) => response.json())
    .then((users) => {
        const grid = document.createElement("div");
        grid.className = 'grid';

        users.forEach((user, index) => {
            // Skapar en div för varje användare som kommer att innehålla både etiketten och användarens detaljer
            const userDiv = document.createElement("div");
            userDiv.className = 'grid-item';

            // Skapar en etikett för varje användare och nummer
            const memberLabel = document.createElement("div");
            memberLabel.className = 'member-label';
            memberLabel.innerHTML = `Member<br>#${index + 1}`; // Sätter Member och #, vi har index som börjar på 0 och ökar med 1 för varje användare

            // Skapar en div för användarens namn och användarnamn
            const userInfo = document.createElement("div");
            userInfo.className = 'user-info';
            // Sätter in användarens namn och användarnamn i userInfo
            userInfo.innerHTML = `<p>${user.firstName} ${user.lastName}<br>Username: ${user.username}</p>`;
            userInfo.style.backgroundColor = user.color; // Sätter bakgrundsfärgen på userInfo till användarens färg

            // Skapar en etikett för varje användare 
            userDiv.appendChild(memberLabel);
            userDiv.appendChild(userInfo);

            // Lägger till userDiv till i griden
            grid.appendChild(userDiv);
        });
        // Hämtar container från index.html och lägger till griden där 
        document.querySelector('.container').appendChild(grid); 
    })
    .catch((error) => {
        console.error("Error fetching users:", error);
    });