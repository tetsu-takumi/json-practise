document.addEventListener('DOMContentLoaded', () => {
    fetch('data/product.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            const tr = Object.assign(document.createElement('tr'), {
                innerHTML: `
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.description}</td>`
            });
            document.getElementById('productTable').appendChild(tr);
        });
    })
    .catch(error => console.error('エラー:', error));
});