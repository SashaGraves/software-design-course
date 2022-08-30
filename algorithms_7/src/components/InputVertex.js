
function InputVertex() {
  const [value, setValue] = React.useState('');

  const onChange = (val) => {
    console.log(val);
    setValue(val);
  }

  return e(
    'div', 
    {className: 'vertex'}, 
    e('input', {value: value, onChange: (e) => {e.preventDefault(); onChange(e.target.value)}}),
    `${value}`
  );

}