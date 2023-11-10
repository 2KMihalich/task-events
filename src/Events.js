/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let butDel = document.createElement('button');
    butDel.innerHTML = 'Удали меня';
    /*butDel.style.cssText =
        'width: 100px; height: 100px; background-color: red;border-radius: 50%';*/
    document.body.insertAdjacentElement('afterbegin', butDel);
    butDel.addEventListener('click', () => {
        butDel.remove();
    });
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const list = document.createElement('ul');
    arr.forEach((el) => {
        let listElem = document.createElement('li');
        listElem.innerHTML = el;
        list.insertAdjacentElement('beforeend', listElem);
        listElem.addEventListener('mouseover', () => {
            listElem.setAttribute('title', el);
        });
    });
    document.body.insertAdjacentElement('afterbegin', list);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const myLink = document.createElement('a');
    myLink.setAttribute('href', 'https://tensor.ru/');
    myLink.innerHTML = 'tensor';
    document.body.insertAdjacentElement('afterbegin', myLink);

    let countclick = 0;

    myLink.addEventListener('click', (e) => {
        if (countclick == 0) {
            e.preventDefault();
            myLink.textContent =
                myLink.textContent + ' ' + myLink.getAttribute('href');
            countclick++;
        }
    });
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const list = document.createElement('ul'),
        listElem = document.createElement('li');
    listElem.innerHTML = 'Пункт';
    document.body.insertAdjacentElement('afterbegin', list);
    list.insertAdjacentElement('afterbegin', listElem);
    const btn = document.createElement('button');
    btn.innerHTML = 'Добавить пункт';
    document.body.insertAdjacentElement('beforeend', btn);
    listElem.addEventListener('click', () => {
        listElem.textContent = listElem.textContent + '!';
    });
    btn.addEventListener('click', () => {
        const newListElem = document.createElement('li');
        newListElem.innerHTML = 'Пункт';
        newListElem.addEventListener('click', () => {
            newListElem.textContent = newListElem.textContent + '!';
        });
        list.insertAdjacentElement('beforeend', newListElem);
    });
}
