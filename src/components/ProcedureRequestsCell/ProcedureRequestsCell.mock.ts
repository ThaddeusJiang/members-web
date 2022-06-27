export const standard: () => {
  procedure_requests: ProcedureRequest[];
} = () => ({
  procedure_requests: [
    {
      id: "1",
      targetMember: {
        id: "1",
        name: "jiang",
      },
      targetDateTitle: "入社予定日",
      targetDate: "2020-01-01",
    },
    {
      id: "2",
      targetMember: {
        id: "2",
        name: "jifa",
      },
      targetDateTitle: "入社予定日",
      targetDate: "2020-01-01",
    },
    {
      id: "3",
      targetMember: {
        id: "3",
        name: "jiang jifa",
      },
      targetDateTitle: "入社予定日",
      targetDate: "2020-01-01",
    },
    {
      id: "4",
      targetMember: {
        id: "4",
        name: "TJ",
      },
      targetDateTitle: "入社予定日",
      targetDate: "2020-01-01",
    },
  ],
});
