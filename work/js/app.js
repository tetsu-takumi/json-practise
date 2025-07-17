document.addEventListener('DOMContentLoaded', function() {
    fetch('data/product.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${product.id}</td><td>${product.name}</td><td>${product.price}</td><td>${product.description}</td>`;
            document.getElementById('productTable').appendChild(row);
        });
    })
    .catch(error => console.error('エラー:', error));
});