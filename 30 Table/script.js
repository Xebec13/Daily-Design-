const users = [
    {
        firstName: "Dominika",
        lastName: "Małpa",
        email: "Małpa@gmail.com",
        createdAt: "29.07.2024",
        img: "https://cdn.pixabay.com/photo/2024/06/25/16/57/woman-8853114_1280.jpg"
    },
    {
        firstName: "Jan",
        lastName: "Kowalski",
        email: "jan.kowalski@gmail.com",
        createdAt: "15.06.2023",
        img: "https://cdn.pixabay.com/photo/2024/06/25/16/57/woman-8853114_1280.jpg"
    },
    {
        firstName: "Anna",
        lastName: "Nowak",
        email: "anna.nowak@gmail.com",
        createdAt: "21.08.2022",
        img: "https://cdn.pixabay.com/photo/2024/06/25/16/57/woman-8853114_1280.jpg"
    },
    {
        firstName: "Magda",
        lastName: "Nowakowska-Jezior",
        email: "anna.nowak@gmail.com",
        createdAt: "20.08.1998",
        img: "https://cdn.pixabay.com/photo/2024/06/25/16/57/woman-8853114_1280.jpg"
    },
    {
        firstName: "Janusz",
        lastName: "Nowak",
        email: "anna.nowak@gmail.com",
        createdAt: "20.08.2045",
        img: "https://cdn.pixabay.com/photo/2024/06/25/16/57/woman-8853114_1280.jpg"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const userContainer = document.getElementById("user-info");

    users.forEach(user => {
        const userInfoDiv = document.createElement("div");
        userInfoDiv.classList.add("user-info");

        userInfoDiv.innerHTML = `
         <img src="${user.img}" alt="User Image">
            <p>${user.firstName}</p>
            <p>${user.lastName}</p>
            <p>${user.email}</p>
            <p>${user.createdAt}</p>
            <button type="submit">Go to workplace</button>
        `;

        userContainer.appendChild(userInfoDiv);
    });
});
