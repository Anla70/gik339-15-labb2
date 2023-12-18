const url = "http://localhost:3000/users";
fetch(url)
    .then((response) => response.json())  
    .then((users) => {
        const userList = document.createElement("ul");

        users.forEach((user) => {
            const listItem = document.createElement("li");
            listItem.style.backgroundColor = user.color;

            listItem.innerHTML = `<p>Name: ${user.firstName} ${user.lastName}
            <br>Username: ${user.username}</br></p>`;
            console.log(user);

            userList.appendChild(listItem);
        });

        const container = document.querySelector('.container');
        if (container) {
            container.appendChild(userList);
        } else {
            console.error("Container element not found.");
        }
    })
    .catch((error) => {
        console.error("Error fetching users:", error);
    });