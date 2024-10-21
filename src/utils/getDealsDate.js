// export const getDealsDate = ({ includeDate = true, includeMonth = false, includeYear = false } = {}) => {
//   const today = new Date();
//   const dayOfWeek = today.getDay();
//   const saturdayOffset = (6 - dayOfWeek + 7) % 7;
//   const sundayOffset = (7 - dayOfWeek + 7) % 7;

//   const saturday = new Date(today);
//   const sunday = new Date(today);

//   saturday.setDate(today.getDate() + saturdayOffset);
//   sunday.setDate(today.getDate() + sundayOffset);

//   const monthNames = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
//   ];

//   const formatDate = (date) => {
//     const parts = [];
//     if (includeDate) parts.push(date.getDate());
//     if (includeMonth) parts.push(monthNames[date.getMonth()]);
//     return parts.join('-');
//   };

//   return {
//     saturday: formatDate(saturday),
//     sunday: formatDate(sunday),
//   };
// };

// utils/getWeekendDates.js

export const getDealsDate = () => {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)

  // Calculate the difference to the nearest Saturday and Sunday
  const saturdayOffset = (6 - dayOfWeek + 7) % 7; // days until Saturday
  const sundayOffset = (7 - dayOfWeek + 7) % 7; // days until Sunday

  const saturday = new Date(today);
  const sunday = new Date(today);

  saturday.setDate(today.getDate() + saturdayOffset);
  sunday.setDate(today.getDate() + sundayOffset);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const month = monthNames[saturday.getMonth()]; // Get the month name from Saturday's date

  return {
    saturday: saturday.getDate(),
    sunday: sunday.getDate(),
    month: month,
  };
};

// Usage example
// const { saturday, sunday, month } = getWeekendDates();
// console.log(`This weekend is on: Saturday ${saturday}, Sunday ${sunday}, Month: ${month}`);
