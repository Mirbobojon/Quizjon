import React from 'react';

const Start = ({ onQuizStart }) => {
  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1>Testni Boshlash</h1>
          <p className='omad'>💪 Omad! 💪 </p>
          <button className="button is-info is-medium" onClick={onQuizStart}>Boshla</button>
        </div>
      </div>
    </div>
  );
}

export default Start;