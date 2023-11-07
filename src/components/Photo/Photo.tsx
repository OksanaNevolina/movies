import React, {FC} from 'react';
import {FilePpath} from "../../interfaces/InterfacePhoto";
import {urls} from "../../constants";

interface IProps {
    img:FilePpath
}

const Photo:FC<IProps> = ({img}) => {
    const {file_path} = img;
    return (
        <div>
            <img src={urls.poster(file_path)} alt="hghg"/>
        </div>
    );
};

export {
    Photo
}