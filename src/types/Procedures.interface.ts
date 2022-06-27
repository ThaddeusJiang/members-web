interface Procedure {
  id: string;
  title: string;
  description: string;
}

interface Step {
  id: string;
  title?: string;
  description?: string;
  icon: string;
  state: "todo" | "doing" | "done";
}

interface ProcedureRequest {
  id: string;
  targetMember: Member;
  targetDateTitle: string;
  targetDate: string;
  email?: string;
}
