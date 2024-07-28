import { FilePond, registerPlugin } from "react-filepond";

import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { FilePondFile, FilePondErrorDescription } from "filepond";
import { FC } from "react";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

interface SimilarProductDropzoneProps {
  setUploadedFile: Function;
  onClearFile: Function;
}

export const SimilarProductDropzone: FC<SimilarProductDropzoneProps> = ({
  setUploadedFile,
  onClearFile,
}) => {
  function onFileAdded(
    err: FilePondErrorDescription | null,
    file: FilePondFile
  ) {
    setUploadedFile(file.file);
  }
  function onRemoveFileHandler() {
    setUploadedFile(null);
    onClearFile();
  }
  return (
    <div className="dropbox-container">
      <FilePond
        allowReorder={true}
        allowMultiple={false}
        onaddfile={onFileAdded}
        onremovefile={onRemoveFileHandler}
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  );
};
