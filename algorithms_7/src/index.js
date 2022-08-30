
function InputEdge () {
  return e(
    'div', {className: 'edge'}, 'InputEdges',
  )

}
function Table () {
  return e(
    'div', {className: 'table'}, 'Table',
  )

}

function App () {

  return e(
    'div', null, e(InputVertex, null), e(InputEdge, null), e(Table, null)
  )

}


const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(App));