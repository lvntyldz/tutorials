import React from 'react';

import { messageService } from './services';

export const HomePage = () => {

    const sendMessage = () => {
        messageService.sendMessage('Sample Message Content(FROM HOME)');
    }

    const clearMessages = () => {
        messageService.clearMessages();
    }

    return (
        <div>
            <button onClick={sendMessage} className="btn btn-primary">Send Message</button>
            <button onClick={clearMessages} className="btn btn-secondary">Clear Messages</button>
        </div>
    );
}

