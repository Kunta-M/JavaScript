// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

let titles = document.getElementsByClassName('rules');
for (const title of titles) {
    console.log(title);

    let content = document.getElementsByTagName('h1');
    for (const contentElement of content) {

        let rulesUl = document.createElement('ul')
        rulesUl.innerHTML = '';

        let rulesLi = document.createElement('li');
        rulesLi.innerText = title.innerText;
        rulesUl.appendChild(rulesLi);
        contentElement.appendChild(rulesUl)
    }
}




