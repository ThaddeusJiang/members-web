interface Member {
  id: string;
  name: string;
  email?: string;
  role?: string;
}

interface MemberWithProcedure extends Member {
  procedures: Procedure[]; // have been completed procedures
}
