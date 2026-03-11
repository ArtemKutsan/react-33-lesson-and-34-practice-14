// import { Link } from 'react-router-dom';
import Meta from '../../components/Meta';
import { connect } from 'react-redux';
import {
  plusOneAction,
  minusOneAction,
  resetAction,
  sendDataAction,
} from '../../redux/actions/counter';

function HomePage({ count, name, plusOne, minusOne, reset, sendData }) {
  const userData = {
    id: '1',
    username: 'Alice',
    phone: '123456789',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} className="home">
      <Meta title="Главная" />

      <h1>Lesson 31: Redux. Знакомство с библиотекой</h1>

      <h2>Задача 1: Counter с Redux</h2>

      <h3>Count: {count}</h3>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button onClick={minusOne}>Minus one</button>
        <button onClick={plusOne}>Plus one</button>
        <button onClick={reset}>Reset</button>
        <button onClick={() => sendData(userData)}>Send data to Redux</button>
      </div>

      <h3>Username: {name}</h3>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    name: state.counter.name,
    data: state.counter.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    plusOne: () => dispatch(plusOneAction()),
    minusOne: () => dispatch(minusOneAction()),
    reset: () => dispatch(resetAction()),
    sendData: (payload) => dispatch(sendDataAction(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
