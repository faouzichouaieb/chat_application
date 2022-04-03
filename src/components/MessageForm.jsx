import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import { SendOutlined , pictureOutlined } from "@ant-design/icons";

const MessageForm = (props) => {
    const [ value, setValue]=useState('');
    const {chatId, creds} = props;

    const handleUpload =(event)=>{
        sendMessage(creds, chatId, { files: event.target.files, text: '' });
    }

    const handleSubmit = (event) => {
        event.preventDfault();
        const text=value.trim();
        if(text.length >0) sendMessage(creds,chatId, {text});
        setValue('');


    }
    const handleChange = ( event ) => {

        setValue(event.target.value);
        isTyping(props, chatId);


    }

return (
    <form className="message-form" onSubmit={handleSubmit}>
        <input
        className="message-input"
        placeholder="send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
        />
        <label htmlFor="upload-button">
            <span className="image-button">
                <pictureOutlined className="picture-icon"/>

            </span>
        </label>
        <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleUpload.bind(this)}
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
);

};




export default MessageForm;