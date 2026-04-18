const offCanvasForm = document.querySelector('#update-form')

offCanvasForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const reason = document.getElementById('reason-transaction').value
    const date = document.getElementById('date-transaction').value
    const amount = document.getElementById('amount-transaction').value

    localStorage.setItem('reason-transaction', JSON.stringify(reason))
    localStorage.setItem('date-transaction', JSON.stringify(date))
    localStorage.setItem('amount-transaction', JSON.stringify(amount))

})






