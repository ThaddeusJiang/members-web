export const standard: () => { todos: Todo[] } = () => ({
  todos: [
    {
      id: "1",
      title: "jiang さんの入社手続き",
      targetDateTitle: "入社予定日",
      targetDate: "2020-01-01",
      state: "inProgress",
      rateOfProgress: "3/7",
    },
    {
      id: "2",
      title: "jifa さんの入社手続き",
      targetDateTitle: "入社予定日",
      targetDate: "2020-01-01",
      state: "completed",
      rateOfProgress: "7/7",
    },
    {
      id: "3",
      title: "jiang jifa さんの入社手続き",
      targetDateTitle: "入社予定日",
      targetDate: "2020-01-01",
      state: "inProgress",
      rateOfProgress: "3/7",
    },
    {
      id: "4",
      title: "TJ さんの入社手続き",
      targetDateTitle: "入社予定日",
      targetDate: "2020-01-01",
      state: "inProgress",
      rateOfProgress: "3/7",
    },
    {
      id: "4",
      title: "青木 良子さんの退職手続き",
      targetDateTitle: "退職予定日",
      targetDate: "2020-01-01",
      state: "completed",
      rateOfProgress: "7/7",
    },
  ],
});
