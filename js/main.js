document.addEventListener('DOMContentLoaded', function(){
    const btns = document.querySelectorAll('.btn-choice')
    const userChoice = document.querySelector('.user-value')
    const submitBtn = document.querySelector('.submit-btn')
    const ratingState = document.querySelector('.rating-state')
    const thankYou = document.querySelector('.thank-you')

    const takenButton = (e) => {
        button = e.target
        button.classList.toggle('taken')
        const btnChoice = button.innerHTML;
        userChoice.innerHTML = btnChoice

    }
    const changePanel = () => {
        if(ratingState.classList.contains('active')){
            ratingState.classList.remove('active')
            thankYou.classList.add('active')
        }
    }

    btns.forEach((button) => {
        button.addEventListener('click', takenButton)
    })

    submitBtn.addEventListener('click',changePanel)

})
