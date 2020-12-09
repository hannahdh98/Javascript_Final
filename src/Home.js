import React from 'react';
import {Cards, LineChartExample} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import logo from './images/image.png';
import AlertBox from './components/ui/AlertBox';


//https://covidtracking.com/data/api is where the api is coming from
class Home extends React.Component {


  state = {
    data: {},
    
}


  // gets data from api
  async componentDidMount () {
    const data = await fetchData();
    this.setState({data});
}




  render() {
      const { data } = this.state;
      return (
          <div className={styles.container}>
                          <AlertBox/>
            <img src={logo} alt="logo"/>
              <Cards data={data}/>
              <LineChartExample/>
          </div>
      )
  }
}

export default Home;