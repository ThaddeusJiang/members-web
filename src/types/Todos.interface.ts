interface Todo {
  id: string;
  title: string;
  targetDateTitle: string;
  targetDate: string; // 入社予定日
  state: string; // 未着手、管理者対応中、完了済み
  tasks?: Task[];
  targetMember?: Member;
  rateOfProgress: string; // 完了率
}

interface Task {
  id: string;
  title: string;
  deadlineType: string;
  deadlineValue: number;
  items: {
    title: string; // summary and details in UI
    checked: boolean;
  }[];
}
