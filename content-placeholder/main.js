let container = document.querySelector('.container');

setTimeout(() => addContent(), 3000);

function addContent() {
    console.log('in');
    container.innerHTML = `<div class="content">
        <img src="https://photos5.appleinsider.com/gallery/49298-96697-MacBook-Air-Closed-on-Desk-xl.jpg" alt="" class="image">
        <div class="text">
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, deserunt!</p>
        </div>
        <div class="footer">
            <img src="https://randomuser.me/api/portraits/thumb/women/35.jpg" alt="" class="avatar">
            <div class="user-info">
                <h1>John Doe</h1>
                <p>Oct 08, 2020</p>
            </div>
        </div>
    </div>`;
}
