$(document).ready(function () {

    $('form').on('submit', function (e) {
        e.preventDefault();

        // Adiciona nova tarefa
        const inputTarefa = $('#nova-tarefa').val();
        const novaTarefa = $('<li></li>');
        $(`<li>${inputTarefa}</li>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');

        // Risca tarefa adicionada
        $('li').click(function () {
            $(this).addClass('riscado');
        });

        $('#nova-tarefa').val('');
    });
});