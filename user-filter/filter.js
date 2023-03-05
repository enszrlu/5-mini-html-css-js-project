let usersContainer = document.getElementById('users');
let loader = document.getElementById('loader');
let search = document.getElementById('search');

let users = [];
const numberOfUser = 1000;

fetch(`https://randomuser.me/api?results=${numberOfUser}`)
    .then((response) => response.json())
    .then((data) => {
        data.results.forEach((user) => {
            let userDiv = document.createElement('div');
            userDiv.className = 'user';

            userDiv.innerHTML = `<img src="${user.picture.thumbnail}" alt="" />
            <div class="info">
                <h1>${user.name.first} ${user.name.last}</h1>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>`;
            // let img = document.createElement('img');
            // img.src = user.picture.thumbnail;
            // userDiv.appendChild(img);
            // let info = document.createElement('div');
            // info.className = 'info';
            // let name = document.createElement('h1');
            // name.innerHTML = `${user.name.first} ${user.name.last}`;
            // info.appendChild(name);
            // let location = document.createElement('p');
            // location.innerHTML = `${user.location.city}, ${user.location.country}`;
            // info.appendChild(location);
            // userDiv.appendChild(info);

            usersContainer.appendChild(userDiv);
        });
        loader.style.display = 'none';
    });

// WHEN API DOES NOT SUPPORT MULTIPLE RESULTS !!!!!!!!!!
// let promises = [];
// for (let i = 0; i < numberOfUser; i++) {
//     promises.push(fetch('https://randomuser.me/api/'));
// }
// Promise.all(promises).then((responses) =>
//     Promise.all(responses.map((r) => r.json())).then((data) => {
//         data.forEach((user) => {
//             users.push(user.results[0]);
//         });

//         users.forEach((user) => {
//             let userDiv = document.createElement('div');
//             userDiv.className = 'user';
//             let img = document.createElement('img');
//             img.src = user.picture.thumbnail;
//             userDiv.appendChild(img);
//             let info = document.createElement('div');
//             info.className = 'info';
//             let name = document.createElement('h1');
//             name.innerHTML = `${user.name.first} ${user.name.last}`;
//             info.appendChild(name);
//             let location = document.createElement('p');
//             location.innerHTML = `${user.location.city}, ${user.location.country}`;
//             info.appendChild(location);
//             userDiv.appendChild(info);

//             usersContainer.appendChild(userDiv);
//         });
//         loader.style.display = 'none';
//     })
// );

search.addEventListener('input', filterUsers);

function filterUsers(event) {
    let keywords = event.target.value.split(' ');
    [...usersContainer.children].forEach((user) => {
        if (user.className == 'user') {
            user.style.display = 'flex';
            keywords.forEach((keyword) => {
                if (
                    !user.lastElementChild.firstElementChild.textContent
                        .toLowerCase()
                        .includes(keyword.toLowerCase()) &&
                    !user.lastElementChild.lastElementChild.textContent
                        .toLowerCase()
                        .includes(keyword.toLowerCase())
                ) {
                    user.style.display = 'none';
                }
            });
        }
    });
}
