import axios from 'axios';

const url='https://api.covidtracking.com/v1/states/oh/current.json';

export const fetchData = async () => {
    try {
        // gets number or positive 
        const { data: { positive, recovered, death, date} } = await axios.get(url);
        console.log(date)
        

            return { positive, recovered, death, date };
           
        
    } catch (error) {
       
    }
}

export const fetchDailyData = async() => {
    try {
const {data} = await axios.get('https://api.covidtracking.com/v1/states/oh/daily.json');
const modifiedData = data.map((dailyData) => ({
    positive: dailyData.positive.total,
    death: dailyData.death.total,
    date: dailyData.reportDate,
}));
return modifiedData;
    } catch(error){

    }
}
