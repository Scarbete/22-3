const puzzles = document.querySelectorAll('.puzzles')
puzzles.forEach(puzzle => {
    const puzzleBtn = puzzle.querySelector('.puzzle_btn')
    const answer = puzzle.querySelector('.answer')
    puzzleBtn.addEventListener('click', function() {
        answer.classList.toggle('open')
        if (answer.classList.contains('open')) {
            puzzleBtn.innerHTML = "Скрыть ответ"
        } else {
            puzzleBtn.innerHTML = "Показать ответ"
        }
    })
})