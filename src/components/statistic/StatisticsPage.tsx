import { FC, FormEvent, useEffect, useState } from 'react';
import { ICountStatistic, IDateRange } from '../../types/types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import Header from '../Header';
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Form, FormGroup, Label } from 'reactstrap';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Статистика информационно – справочной системы «Магазин обуви»',
    },
  },
};

const labels = ['Товары', 'Поставщики', 'Продажи'];

const StatisticsPage: FC = () => {

  const [countStatistic, setCountStatisic] = useState<ICountStatistic | null>(null);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    const dateRange: IDateRange = { startDate: startDate, endDate: endDate };
    fetchStatistic(dateRange.startDate?.toLocaleDateString('zh-CN'), dateRange.endDate?.toLocaleDateString('zh-CN'));
  }, [])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const dateRange: IDateRange = { startDate: startDate, endDate: endDate }

    fetchStatistic(dateRange.startDate?.toLocaleDateString('zh-CN'), dateRange.endDate?.toLocaleDateString('zh-CN'));
  }

  async function fetchStatistic(startDate?: string, endDate?: string) {
    try {
      const response = await axios.get<ICountStatistic>('http://localhost:8081/api/v1/statistics', {
        params: {
          startDate: startDate,
          endDate: endDate
        }
      })
      setCountStatisic(response.data)
    } catch (e) {
      setCountStatisic(null)
    }
  }

  const data = {
    labels,
    datasets: [
      {
        label: 'Количество единиц в системе',
        data: {
          Товары: countStatistic?.productCount,
          Поставщики: countStatistic?.providerCount,
          Продажи: countStatistic?.saleCount
        },
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

  return (
    <div>
      <header><Header /></header>

      <div className='w-25 p-3'>
       
        <h4>Диапазон статистики</h4>
        <DateRangePickerComponent placeholder='Выберите временной промежуток' format="yyyy-MM-dd" allowEdit={false} openOnFocus={true} />
        <Form onSubmit={handleSubmit}>
          <FormGroup inline>
            <Label>Дата статистики с</Label>
            <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} dateFormat="yyyy-MM-dd" />
            </FormGroup>
            <FormGroup inline>
            <Label>Дата статистики до</Label>
            <DatePicker selected={endDate} onChange={(date: Date) => setEndDate(date)} dateFormat="yyyy-MM-dd" />
          </FormGroup>
          <Button type="submit">Применить</Button>
        </Form>
    
      </div>

      <div className='w-75 container-fluid'>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default StatisticsPage;