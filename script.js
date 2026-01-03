let queue = [];
let token = 0;

function takeToken() {
    token++;
    queue.push(token);
    document.getElementById("userToken").innerText = token;
    updateQueue();
}

function nextToken() {
    if (queue.length === 0) {
        alert("Queue is empty");
        return;
    }
    const current = queue.shift();
    document.getElementById("currentToken").innerText = current;
    updateQueue();
}

function updateQueue() {
    const list = document.getElementById("queueList");
    list.innerHTML = "";

    queue.forEach(t => {
        const span = document.createElement("span");
        span.innerText = "T" + t;
        list.appendChild(span);
    });
}
