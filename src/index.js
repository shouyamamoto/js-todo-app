const onClickAdd = () => {
  const inputText = document.getElementById('add-text').value
  const todoFrag = document.createDocumentFragment()
  
  if(inputText) {
    createTodo(inputText, todoFrag)
  }
  incompleteTodos.appendChild(todoFrag)
  
  document.getElementById('add-text').value = ''
}
const createTodo = (inputText, todoFrag) => {
  const div = document.createElement('div')
  div.classList.add('list-row')
  const li = document.createElement('li')
  const completeBtn = document.createElement('button')
  const deleteBtn = document.createElement('button')
  completeBtn.textContent = '完了'
  deleteBtn.textContent = '削除'
  li.textContent = inputText
  completeBtn.classList.add('complete-button')
  deleteBtn.classList.add('delete-button')
  deleteBtn.addEventListener('click', () => {onClickDelete(deleteBtn)})
  div.appendChild(li)
  div.appendChild(completeBtn)
  div.appendChild(deleteBtn)
  todoFrag.appendChild(div)
}
const onClickDelete = (deleteBtn) => {
  deleteBtn.parentNode.remove()
}

document.getElementById('add-button').addEventListener('click', () =>  onClickAdd() )
const incompleteTodos = document.getElementById('incomplete-todos')

const deleteBtns = document.querySelectorAll('.delete-button')
deleteBtns.forEach((deleteBtn) => {
  deleteBtn.addEventListener('click', () => onClickDelete(deleteBtn))
})