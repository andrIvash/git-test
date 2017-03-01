var Validation = (function(){
    function _init(form){
        console.log('validation init');
        var field = document.querySelectorAll('input[type="text"]');
        return _validate(field).length ? true: false
    }
    function _validate(field) {
        var result = Array.prototype.slice.call(field);
        return result.filter(_filter);
    }
    function _filter(elem){
        return elem.value !== ''
    }

    return {
        init: _init,
        add: _add,
        remove: _remove
    }
})();
window.validation = Validation;
/*
 1.Наличие данный в форме  (событие от пользователя)
 - есть ли форма на странице, какая конкретная форма
 var form =

 - проверка какие есть поля в форме
 - отбираем валидируемые
 - запускаем проверку <===  результат (2.)
 - проверка результата
 - если ок то отправляем на сревер
 -если все плохо, то выводим ошибку

 2. Корректность ввода данных согласно требованиям
     - взять данные
     - взять требования
     - сравниваем
     - результать (валидно или нет)

 */