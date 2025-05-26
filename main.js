
document.addEventListener('DOMContentLoaded', function() { const toc = document.querySelector('#table-of-contents'); if (toc) toc.style.display = 'none'; });

const style = document.createElement('style'); style.innerHTML = '#table-of-contents { display: none !important; }'; document.head.appendChild(style);