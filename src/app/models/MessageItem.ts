export class MessageItem {
    isOpen?: boolean;
    type: string;
    messageId: number;
    title: string;
    message: string;
    status?: string;
    causedBy?: string;
    fixedBy?: string;
    dateCreated?: string;
}

type Options =  'ERROR' | 'WARNING' | 'INFO' | 'DEBUG';
