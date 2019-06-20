export class MessageItem {
    isOpen?: boolean;
    type: string;
    messageId?: string;
    title: string;
    message: string;
    status?: string;
    causedBy?: string;
    fixedBy?: string;
    dateCreated?: string;
}

type Options =  'ERROR' | 'WARNING' | 'INFO' | 'DEBUG';
