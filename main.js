let toDo1 = new toDo();
toDo1.start();

function toDo() {
  this.input = document.querySelector('#input');
  this.button = document.querySelector('#btn');
  this.result = document.querySelector('#result');

  this.start = function () {
    let that = this;

    this.button.addEventListener('click', function (e) {
      let li = document.createElement('li');
      let btn = document.createElement('button');
      btn.innerHTML = 'x';
      btn.classList = 'btn-active'
      e.preventDefault();

      if (that.input.value === '') {
        alert('Введите данные');

      } else {
        
        btn.addEventListener('click', function (e) {
          that.result.removeChild(li);

        })
        li.innerHTML = that.input.value;
        li.appendChild(btn);
        that.result.appendChild(li);

        li.addEventListener('click', function (e) {
          this.classList.toggle("li-active");
        })
        that.input.value = '';
      }

    })

  }
}

