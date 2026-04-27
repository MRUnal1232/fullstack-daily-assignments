const form = document.getElementById('loginForm')
const submitBtn = document.getElementById('submitBtn')
const messageEl = document.getElementById('message')

document.querySelectorAll('.toggle-password').forEach(btn => {
    btn.addEventListener('click', () => {
        const input = document.getElementById(btn.dataset.target)
        if (input.type === 'password') {
            input.type = 'text'
            btn.textContent = 'Hide'
        } else {
            input.type = 'password'
            btn.textContent = 'Show'
        }
    })
})

function showMessage(text, type) {
    messageEl.textContent = text
    messageEl.className = `message show ${type}`
}

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const payload = {
        emailAddress: document.getElementById('emailAddress').value.trim(),
        password: document.getElementById('password').value
    }

    if (!payload.emailAddress || !payload.password) {
        showMessage('Please enter email and password.', 'error')
        return
    }

    submitBtn.disabled = true
    const originalText = submitBtn.textContent
    submitBtn.textContent = 'Signing in...'

    try {
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        const data = await res.json()

        if (res.ok && data.status) {
            localStorage.setItem('user', JSON.stringify(data.user))
            showMessage(`Welcome, ${data.user.fullName}!`, 'success')
        } else {
            showMessage(data.message || 'Login failed.', 'error')
        }
    } catch (err) {
        showMessage('Network error. Please try again.', 'error')
    } finally {
        submitBtn.disabled = false
        submitBtn.textContent = originalText
    }
})
