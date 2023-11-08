import React, {FC} from 'react';
import {FilePpath} from "../../interfaces/InterfacePhoto";
import {urls} from "../../constants";
import css from './Photo.module.css'

interface IProps {
    img:FilePpath
}

const Photo:FC<IProps> = ({img}) => {
    const {file_path} = img;
    return (
        <div className={css.Photo}>
            <img src={urls.poster(file_path)} alt="hghg"/>
        </div>
    );
};

export {
    Photo
}