# BANNER CREATOR
### Banner creator - это конструктор баннеров, который состоит из:
- Превью баннера;
- Формы ввода параметров баннера;
- 3 кнопок экспорта (экспорт баннера как png/html или копировать параметры в буфер обмена в json). 

#### Функциональность:  
- редактировать иллюстрацию (по ссылке или dataURI);
- редактировать текст (не более трех строк);
- изменить цвет (color или gradient);
- установить параметры по умолчанию;
- редактировать ссылку для перехода при нажатии на баннер.  

Приложение выполнено адаптивно (для экранов больших и средних размеров) и доступно по адресу:  
https://alextogar.github.io/banner_creator/index.html  

![alt text](https://github.com/AlexTogar/banner_creator/blob/master/screenshot.png)  
#### Рисунок 1 - Скриншоты

Для смены иллюстрации используйте следующие ссылки (во избежание проблем с CORS privacy при экспорте в png):  
чайник: https://alextogar.github.io/banner_creator/img/tea-pot.svg  
чашка чая: https://alextogar.github.io/banner_creator/img/green-tea.svg  

#### Для запуска на локальной машине:  
- клонируйте репозиторий;
- выполните npm install && npm start;
- перейдите по адресу http://localhost:3999/dist/  

Для смены иллюстрации используйте следующие ссылки (во избежание проблем с CORS privacy при экспорте в png):  
чайник: http://localhost:3999/dist/img/tea-pot.svg  
чашка чая: http://localhost:3999/dist/img/green-tea.svg  

**Для запуска тестов** выполните npm test
