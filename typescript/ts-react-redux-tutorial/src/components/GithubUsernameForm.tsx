import React, {useState} from "react";
import './GithubUsernameForm.css';

type GithubUsernameFormProps = {
    onSubmitUsername: (username: string) => void;
};

function GithubUsernameForm({ onSubmitUsername }: GithubUsernameFormProps) {
    const [input, setInput] = useState('');

    const onSubmit = () => {

    };

    const onChange = () => {

    };

    return (
        <form></form>
    )
}