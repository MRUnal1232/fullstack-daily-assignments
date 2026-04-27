const form = document.getElementById('registerForm')
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
        fullName: document.getElementById('fullName').value.trim(),
        emailAddress: document.getElementById('emailAddress').value.trim(),
        mobileNo: document.getElementById('mobileNo').value.trim(),
        password: document.getElementById('password').value
    }

    if (!payload.fullName || !payload.emailAddress || !payload.mobileNo || !payload.password) {
        showMessage('Please fill in all fields.', 'error')
        return
    }

    if (payload.password.length < 6) {
        showMessage('Password must be at least 6 characters.', 'error')
        return
    }

    submitBtn.disabled = true
    const originalText = submitBtn.textContent
    submitBtn.textContent = 'Creating account...'

    try {
        const res = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        const data = await res.json()

        if (res.ok && data.status) {
            showMessage(data.message + ' Redirecting to login...', 'success')
            form.reset()
            setTimeout(() => {
                window.location.href = 'login.html'
            }, 1400)
        } else {
            showMessage(data.message || 'Registration failed.', 'error')
        }
    } catch (err) {
        showMessage('Network error. Please try again.', 'error')
    } finally {
        submitBtn.disabled = false
        submitBtn.textContent = originalText
    }
})
