import { useContext } from 'react';

import ChannelMessages from '@/context/ChannelMessage';

export const useChannelMessages = () => {
    return useContext(ChannelMessages);
};