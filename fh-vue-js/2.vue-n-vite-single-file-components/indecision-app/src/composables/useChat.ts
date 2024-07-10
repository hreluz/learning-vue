import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([
    {
      id: new Date().getTime(),
      message: 'Hello World',
      itsMine: true,
    },
    {
      id: new Date().getTime(),
      message: 'No',
      itsMine: false,
      image: 'https://yesno.wtf/assets/yes/9-6403270cf95723ae4664274db51f1fd4.gif',
    },
  ]);

  const onMessage = (text: string) => {
    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
    });
  };

  return {
    onMessage,
    messages,
  };
};
