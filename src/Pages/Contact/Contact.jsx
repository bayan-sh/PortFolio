import React from 'react'
import { Timeline } from 'primereact/timeline';
import acpc from '../../assets/images/acpc.jpeg'
import './Contact.scss'

const Contact = () => {
  const events = [
    { status: 'The 2020 ACPC online programming contest for GIRLS.( 2020-online)', date: '2020 ', color: '#9C27B0', image: 'game-controller.jpg' },
    { status: 'certificate of participatin in partical Workshop on Flutter', date: '10/2022 ', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'certificate in software engineering', date: '7/2023 ', icon: 'pi pi-shopping-cart', color: '#FF9800' },

  ];
  return (
    <>
    
      <div className="cards">
      
        <Timeline value={events}
          opposite={(item) => item.status}
          content={(item) => <small className="text-color-secondary">{item.date}</small>} />
          {/* <div className='p1'>
          <img src={acpc}/>
          </div> */}
      </div>
      

    </>
  )
}

export default Contact 