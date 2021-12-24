export const filterData = [
  {
    items: [
      { name: "Hanoi", value: "1781360" },
      { name: "Ho Chi Minh City", value: "1633619" },
    ],
    placeholder: "Destination",
    queryName: "destinationId",
  },
  {
    items: [
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
      { name: "5", value: "5" },
    ],
    placeholder: "Page",
    queryName: "pageNumber",
  },
  {
    items: [
      { name: "10", value: "10" },
      { name: "20", value: "20" },
      { name: "30", value: "30" },
      { name: "40", value: "40" },
      { name: "50", value: "50" },
    ],
    placeholder: "Number of Results",
    queryName: "pageSize",
  },
  {
    items: [
      { name: "2020-01-08", value: "2020-01-08" },
      { name: "2020-02-08", value: "2020-02-08" },
      { name: "2020-03-08", value: "2020-03-08" },
      { name: "2020-04-08", value: "2020-04-08" },
      { name: "2020-05-08", value: "2020-05-08" },
      { name: "2020-06-08", value: "2020-06-08" },
      { name: "2020-07-08", value: "2020-07-08" },
      { name: "2020-08-08", value: "2020-08-08" },
      { name: "2020-09-08", value: "2020-09-08" },
      { name: "2020-10-08", value: "2020-10-08" },
      { name: "2020-11-08", value: "2020-11-08" },
      { name: "2020-12-08", value: "2020-12-08" },
    ],
    placeholder: "Time of Arrival",
    queryName: "checkIn",
  },
  {
    items: [
      { name: "1", value: "1" },
    ],
    placeholder: "Number of Persons",
    queryName: "adults1",
  },
];

export const getFilterValues = (filterValues) => {
  const {
    destinationId,
    pageNumber,
    pageSize,
    checkIn,
    checkOut,
    adults1
  } = filterValues;

  const values = [
    {
      name: "destinationId",
      value: destinationId,
    },
    {
      name: "pageNumber",
      value: pageNumber,
    },
    {
      name: "pageSize",
      value: pageSize,
    },
    {
      name: "checkIn",
      value: checkIn,
    },
    {
      name: "checkOut",
      value: checkOut,
    },
    {
      name: "adults1",
      value: adults1,
    },
  ];

  return values;
};
