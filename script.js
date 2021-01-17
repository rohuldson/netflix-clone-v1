const users = [ 'rohuldson', 'sarah united', 'sushi boy'];

const memberDiv = document.querySelector('.memberDiv');
const addIcon = document.querySelector('.addIcon');
const btn = document.querySelector('.btn')




const userIcons = () => {
    users.reverse();
    users.map((curElem) => {        
        memberDiv.insertAdjacentHTML('afterbegin', `
        <button class="btn"><span>${curElem}</span></button>
        `);
    });

};

addIcon.addEventListener('click', () => {
    let userName = prompt('Por favor digite seu usuário')

    if(userName !== null &&  !users.includes(userName)){
        users.push(userName);
        console.log(users);
        memberDiv.insertAdjacentHTML('afterbegin', `
        <button class="btn"><span>${userName}</span></button>
        `);
    }else{
        alert('usuário já existe')
    }

})



  


userIcons();

