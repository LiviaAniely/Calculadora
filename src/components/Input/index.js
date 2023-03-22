import './styles.css';

export default function Input({value}) {
    return (
      <div className="InputContainer">
        <input disabled value={value}/>
      </div>
    );
  }
  