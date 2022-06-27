interface Message {
  label: string;
  important?: boolean;
}

export interface Notification {
  id: string;
  feature: string;
  level: string;
  messages: Message[];
  createdAt: string;
}
