## Задача:

Необходимо реализовать возможность редактирования элементов списка

### Вам необходимо:

-   Добавить кнопку “Редактировать” для каждого пункта.
-   При нажатии на кнопку необходимо:
    -   Запросить новое название при помощи prompt().
    -   При нажатии на “ОК” идет отправка PUT-запроса на сервер при помощи fetch() с обновленными данными в формате JSON. После успешной отправки к элементу применяются внесенные изменения.
    -   При нажатии на “Отмена” элемент возвращается в исходное состояние.
