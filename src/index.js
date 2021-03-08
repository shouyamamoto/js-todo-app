// 未完了のTODOと完了したTODOを取得
const incompleteTodos = document.getElementById('incomplete-todos')
const completeTodos = document.getElementById('complete-todos')

// 関数宣言
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
  completeBtn.addEventListener('click', () => (onClickComplete(completeBtn)))
  deleteBtn.addEventListener('click', () => {onClickDelete(deleteBtn)})
  div.appendChild(li)
  div.appendChild(completeBtn)
  div.appendChild(deleteBtn)
  todoFrag.appendChild(div)
}
const onClickDelete = (deleteBtn) => {
  deleteBtn.parentNode.remove()
}
const onClickComplete = (completeBtn) => {
  completeBtn.parentNode.remove()
  const completeTodo = completeBtn.previousElementSibling
  const div = document.createElement('div')
  const backBtn = document.createElement('button')
  div.classList.add('list-row')
  backBtn.classList.add('back-btn') 
  backBtn.textContent = '戻す'
  div.appendChild(completeTodo)
  div.appendChild(backBtn)
  completeTodos.appendChild(div)
}

// 追加ボタンを押すと、onClickAdd関数を実行する
document.getElementById('add-button').addEventListener('click', () =>  onClickAdd() )

// 初期で設定している未完了のTODOを削除するための処理
const deleteBtns = document.querySelectorAll('.delete-button')
deleteBtns.forEach((deleteBtn) => {
  deleteBtn.addEventListener('click', () => onClickDelete(deleteBtn))
})

// 初期で設定している未完了のTODOを完了したTODOに追加する処理
const completeBtns = document.querySelectorAll('.complete-button')
completeBtns.forEach((completeBtn) => {
  completeBtn.addEventListener('click', () => onClickComplete(completeBtn))
})