import React, { useState } from 'react';
import styled from 'styled-components';

const Divcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;


const H2 = styled.h2 `

font-family: "Roboto", sans-serif;

`;


const StyledCalendar = styled.div`
  display: flex;
  overflow-x: auto;
  flex-wrap: nowrap;
  max-width: 350px;
  &::-webkit-scrollbar {
    width: 8px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
background: rgba(255, 255, 255, 0.20);
margin-top: 22px;
  }

  &::-webkit-scrollbar-thumb {
background: rgba(255, 255, 255, 0.25);
margin-top: -32px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  gap:20px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
`;

const DayCell = styled.div`
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  ${({ isSelected }) => isSelected && 'background-color: #007bff; color: #fff;'}
  ${({ isCheckin }) => isCheckin && 'background-color: #28a745; color: #fff;'}
  ${({ isSomeOtherCriteriaMet }) => isSomeOtherCriteriaMet && 'border: 2px solid #f39c12;'}
  
  &:hover {
    background-color: ${({ selected }) => (selected ? 'rgba(0, 123, 255, 0.5)' : 'rgba(0, 123, 255, 0.1)')};
  }
  
  transition: transform 0.3s ease; /* Adiciona uma transição suave */

  &:hover {
    transform: translateY(-5px); /* Move para cima quando o mouse passa por cima */
  }

`;



const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [checkinDates, setCheckinDates] = useState([]);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const prevMonth = () => {
    setDate(prevDate => {
      const prevMonthDate = new Date(prevDate);
      prevMonthDate.setMonth(prevMonthDate.getMonth() - 1);
      return prevMonthDate;
    });
  };

  const nextMonth = () => {
    setDate(prevDate => {
      const nextMonthDate = new Date(prevDate);
      nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
      return nextMonthDate;
    });
  };

  const handleDayClick = (day) => {
    const selectedDate = new Date(date.getFullYear(), date.getMonth(), day);
    if (!checkinDates.find(date => date.getTime() === selectedDate.getTime())) {
      setCheckinDates([...checkinDates, selectedDate]);
    } else {
      setCheckinDates(checkinDates.filter(date => date.getTime() !== selectedDate.getTime()));
    }
  };

  const renderHeader = () => {
    return (
      <Header>
        <Button onClick={prevMonth}>Prev</Button>
        <H2>{monthsOfYear[date.getMonth()]} {date.getFullYear()}</H2>
        <Button onClick={nextMonth}>Next</Button>
      </Header>
    );
  };

  const renderDaysOfWeek = () => {
    return daysOfWeek.map(day => <DayCell key={day}>{day}</DayCell>);
  };

  const renderCells = () => {
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const startingDay = firstDayOfMonth.getDay();
    const endingDay = lastDayOfMonth.getDate();

    const days = [];

    for (let day = 1; day <= endingDay; day++) {
      const isSelected = day === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear();
      const isCheckin = checkinDates.find(checkinDate => checkinDate.getDate() === day && checkinDate.getMonth() === date.getMonth() && checkinDate.getFullYear() === date.getFullYear());
      const isSomeOtherCriteriaMet = day % 2 === 0; // Exemplo de verificação visual adicional

      days.push(
        <DayCell 
          key={day}
          isSelected={isSelected} 
          isCheckin={isCheckin} 
          isSomeOtherCriteriaMet={isSomeOtherCriteriaMet}
          onClick={() => handleDayClick(day)}
          className={isSomeOtherCriteriaMet ? "additional-check" : ""}
        >
          {day}
        </DayCell>
      );
    }
    
    return days;
  };

  return (
    
    <Divcontainer>
      {renderHeader()}
      <Div>
      {renderDaysOfWeek()}
      </Div>
      <StyledCalendar>
        
        {renderCells()}
      </StyledCalendar>
     
    </Divcontainer>
  );
};

export default Calendar;

