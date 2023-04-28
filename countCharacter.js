const textarea = document.getElementById('user-input');
const charCount = document.getElementById('cc-count');
const countSpaces = document.getElementById('count-spaces');

function countChar(event){
  const value = event.value;
  let count = value.length;
  if (!countSpaces.checked) {
    count = value.replace(/\s+/g, '').length;
  }
  charCount.textContent = count;
}

textarea.addEventListener('input', event => countChar(event.target))

countSpaces.addEventListener('change', () => countChar(textarea));