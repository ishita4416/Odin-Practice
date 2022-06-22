const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.style.color = 'red';
para.textContent = 'Hey! I am red!';

container.appendChild(para);

const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = 'I\'m a blue h3!';

container.appendChild(h3);

const moreContent = document.createElement('div');
moreContent.style.border = 'black';
moreContent.style.backgroundColor = 'pink';

container.appendChild(moreContent);

const h1 = document.createElement('h1');
h1.textContent = 'I\'m in a div';

moreContent.appendChild(h1);

const para2 = document.createElement('p');
para2.textContent = 'ME TOO!';

moreContent.appendChild(para2);