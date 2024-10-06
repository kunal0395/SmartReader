import './Chat.css';
import ChatBot from 'react-simple-chatbot'


function Chatbot() {
  return (
    <ChatBot
        steps={[
          {
            id: '0',
            message: 'Hi Welcome to SmartReader!!',
            trigger: '1',
          },
          {
            id: '1',
            message: 'What is your name?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}, nice to meet you!',
            trigger: '4',
          },
          {
            id: '4',
            message: 'How Can I Help you ?',
            trigger: '5',
          },
          {
            id: '5',
            options: [
              { value: 1, label: 'Summarization', trigger: '6' },
              { value: 2, label: 'Translation', trigger: '7' },
              { value: 3, label: 'Text-To-Speech', trigger: '8' },
              { value: 4, label: 'Web Search', trigger: '9' },
              { value: 5, label: 'Any Other Quary!', trigger: '10' }
            ],
          },
          {
            id: '6',
            message: 'To Summary select pdf file and just select statments from PDF you will get option choose Summary as Option',
            trigger: '11',
          },
          {
            id: '7',
            message: 'To Translation select pdf file and just select statments from PDF you will get option choose Translation as Option',
            trigger: '11',
          },
          {
            id: '8',
            message: 'To Text-To-Speech select pdf file and just select statments from PDF you will get option choose Text-To-Speech as Option',
            trigger: '11',
          },
          {
            id: '9',
            message: 'To Web Search select pdf file and just select statments from PDF you will get option choose Web Search as Option',
            trigger: '11',
          },
          {
            id: '10',
            message: 'For any other Quary please visit Contact Page',
            trigger: '11',
          },
          {
            id: '11',
            message: 'Thank For Visiting Smart-Reader',
            trigger: '12',
          },
          {
            id: '12',
            message: 'DO you want any help with',
            trigger: '5',
          },
        ]}
        floating={true}
      />
  );
}

export default Chatbot; 