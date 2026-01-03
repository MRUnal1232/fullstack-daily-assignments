var container = document.querySelector('.container')
var imgEle = document.createElement('img')
imgEle.src = "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
imgEle.style.width = "45px"
imgEle.style.height = "45px"
imgEle.style.borderRadius = "50%"

var h2Ele = document.createElement('h2')
h2Ele.innerHTML = "MRUnal1232"
h2Ele.style.display = 'flex'
h2Ele.style.margin = '0 0 0 10px'
h2Ele.style.color = "white"
h2Ele.style.fontSize = '20px'

var imgEle1 = document.createElement('img')
imgEle1.src = "photo.jpg"
imgEle1.style.width = "200px"
imgEle1.style.height = "200px"
imgEle1.style.borderRadius = "50%"
imgEle1.style.marginTop = "10px"


var p1Ele = document.createElement('p')
p1Ele.innerHTML = "Hi , I'm Mrunal I'm <br> a passionate developer with a focus on computer vision, machine learning, and web development. <br> Projects <br>🖱 Virtual Mouse using CNN Control your computer mouse using hand gestures detected by a webcam and a trained CNN model.<br> Built with Python, OpenCV, and TensorFlow. <br>🌐 SSWCOE Official Website (In Progress)<br> Developing the official website for SSWCOE to enhance usability, design, and accessibility.<br> Focused on frontend and backend integration. <br>💻 Tech Stack Python · OpenCV · TensorFlow · HTML · CSS · JavaScript · Git"
p1Ele.style.color = "white"
p1Ele.style.marginTop = "10px"
p1Ele.style.marginLeft = "20px"

var h2Ele1 = document.createElement('h2')
h2Ele1.innerHTML = "Mrunal Sachin Thamake"
h2Ele1.style.marginTop = '10px'
h2Ele1.style.color = "white"
h2Ele1.style.marginLeft = '0'

var h3Ele = document.createElement('h3')
h3Ele.innerHTML = "MRUnal1232 · she/her"
h3Ele.style.marginTop = '5px'
h3Ele.style.color = "white"

container.append(imgEle)
container.append(h2Ele)
container.append(imgEle1)
container.append(h2Ele1)
container.append(h3Ele)
container.append(p1Ele)

