import React from 'react';
import './App.css';
import axios from 'axios';

function App() {

  // 预约
  async function apply() {
    const result = await axios({
      method: 'post',
      url: 'https://reservation.library.sh.cn/wx_front_api/reservation/read/apply?',
      headers: {
        token: 'hOVbkLwLlnrjj8x77qtgDDvvLAlUT0m77G1sIxyQxrX2Ykb4N755NhxvGSWQymKgR2McIiDt7RRHPpKxkUIgU5/Qy1S4s10s0vtqyxk82QJdvKJ9YBhFBPU9LpH0ZEzRhxxjFa1JrNW86YkUQtLt4q3gfbvh3hvKKeIxFUuzdtE='
      },
      data: {
        configId: "47",
        reason: "普通阅览",
        mobile: "13699531996",
        reservationDate: "2021-01-10",
      }
    })
    if (result.data.resultStatus.code === 0) {
      console.log(result.data.resultValue);
    } else {
      console.log(result.data.resultStatus.message);
    }
  }

  // 取消
  // https://reservation.library.sh.cn/wx_front_api/reservation/cancel?

  return (
    <div className="App">
      <button onClick={apply}>预约</button>
    </div>
  );
}

export default App;
