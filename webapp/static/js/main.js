const serializeButton = document.getElementById('serialize-button');
const deserializeButton = document.getElementById('deserialize-button');

serializeButton.addEventListener('click', serialize);
deserializeButton.addEventListener('click', deserialize);

function serialize() {
    const input = document.getElementById('serialize-input').value;
    fetch('/serialize', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: input })
    })
        .then(response => response.json())
        .then(data => {
            const output = document.getElementById('serialize-output');
            output.value = data.serialized_data;
        })
        .catch(error => console.error(error));
}

function deserialize() {
    const input = document.getElementById('deserialize-input').value;
    fetch('/deserialize', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: input })
    })
        .then(response => response.json())
        .then(data => {
            const output = document.getElementById('deserialize-output');
            const disassembly = document.getElementById('deserialize-disassembly');
            disassembly.value = data.disassembly;
            output.value = JSON.stringify(data.deserialized_data, null, 2);
        })
        .catch(error => console.error(error));
}
