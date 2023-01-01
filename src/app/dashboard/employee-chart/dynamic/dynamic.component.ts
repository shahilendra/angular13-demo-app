
export type MessageType = 'Pie' | 'Bar' | 'Line';  
  
export interface MessageData {  
  url: string;  
  content?: any;  
}  
  
export class MessageItem {  
  constructor(public type: MessageType, public data: MessageData) { }  
}

export interface DynamicComponent {  
    data: any;     
  }