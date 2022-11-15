import { useState } from 'react'
import './App.css'

export default function App() {
  function dateTransform(dateParam = '') {
    let resultString;
    const locationString = [0, 4, 6, 8, 10, 12, 14];
    for (let i = 0; i <= 5; i++) {
      if (!resultString) resultString = dateParam.substring(locationString[i], locationString[i + 1])
      else if (resultString.length < 10) resultString = resultString + '-' + dateParam.substring(locationString[i], locationString[i + 1])
      else if (resultString.length === 10) resultString = resultString + ' ' + dateParam.substring(locationString[i], locationString[i + 1])
      else if (resultString.length >= 11) resultString = resultString + ':' + dateParam.substring(locationString[i], locationString[i + 1])
    }
    return new Date(resultString);
  }
  const data = [
    {
      lodnum_base: 'L0000000HESA',
      location: 'CO05',
      trndte: dateTransform('20220316183650'),
      trntyp: 'CO-PACK_CONSUMED',
      trntyp_dsc: 'Pallet Consumed',
      stock_status: 'Held',
      wkonum1: '3314-DES-0105',
      wkorev1: '3314-DES-6',
      prdlin1: 'LIN01',
      clodnum: '',
    },
    {
      lodnum_base: 'L0000000HESA',
      location: 'CO05',
      trndte: dateTransform('20220316183652'),
      trntyp: 'CO-PACK_CONSUMED',
      trntyp_dsc: 'Pallet Consumed',
      stock_status: 'Held',
      wkonum1: '3314-DES-0105',
      wkorev1: '3314-DES-6',
      prdlin1: 'LIN01',
      clodnum: '',
    },
    {
      lodnum_base: 'L0000000HESB',
      location: 'CO05',
      trndte: dateTransform('20220316183622'),
      trntyp: 'CO-PACK_CONSUMED',
      trntyp_dsc: 'Pallet Consumed',
      stock_status: 'Held',
      wkonum1: '3314-DES-0105',
      wkorev1: '3314-DES-6',
      prdlin1: 'LIN01',
      clodnum: '',
    },
    {
      lodnum_base: '',
      location: '',
      trndte: '',
      trntyp: '',
      trntyp_dsc: '',
      stock_status: '',
      wkonum1: '',
      wkorev1: '',
      prdlin1: '',
      clodnum: 'L0000000HESC',
    },
    {
      lodnum_base: '',
      location: '',
      trndte: '',
      trntyp: '',
      trntyp_dsc: '',
      stock_status: '',
      wkonum1: '',
      wkorev1: '',
      prdlin1: '',
      clodnum: 'L0000000HESD',
    },
    {
      lodnum_base: '',
      location: '',
      trndte: '',
      trntyp: '',
      trntyp_dsc: '',
      stock_status: '',
      wkonum1: '',
      wkorev1: '',
      prdlin1: '',
      clodnum: 'L0000000HESE',
    }
  ]
  //Button Trigger's
  function dataOrder() {
    let newData = data.map(e => {
      let temporalData = {};
      Object.entries(e).forEach(([key, value]) => {
        if (value != '') temporalData[key] = value
        else return;
      })
      return temporalData;
    })
    return newData;
  }
  const Data_Order = () => {
    console.table(dataOrder());
  }
  const Data_Disorder = () => {
    console.log('desordenar datos');
  }
  return (
    <div className="App">
      <button onClick={() => Data_Order()}>
        Ordenar Datos
      </button>
      <button onClick={() => Data_Disorder()}>
        Restaurar Datos
      </button>
    </div>
  )
}