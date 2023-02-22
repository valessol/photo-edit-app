import Dropzone from "react-dropzone";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from "@cloudinary/url-gen";
import { IFile } from "../../interfaces/IFile";
import { useEffect, useState } from "react";
import { UPLOAD_URL } from "../../constants/urls";

const DropzoneComponent = () => {
  const [status, setStatus] = useState(null);
  const handleDropFile = async (files: IFile) => {
    console.log(files);
    await fetch("https://api.cloudinary.com/v1_1/dagruxu0y/image/upload", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const cloudinary = new Cloudinary({
    cloud: {
      cloudName: process.env.CLOUD_NAME,
    },
    url: {
      secure: true,
    },
  });

  const rootProps = {
    className:
      "shadow-2xl border-dashed border-2 border-gray-300 rounded-lg aspect-video w-full flex items-center justify-center flex-col dropzone",
    onClick: () => console.log("click"),
    "aria-label": "drag and drop area",
  };
  // const { getRootProps, acceptedFiles, getInputProps } = useDropzone();
  // const files = acceptedFiles.map((file) => (
  //   <li key={file.path}>{file.path}</li>
  // ));
  // buscar en el estado global el estado de subida para mostrar el uploading...
  return (
    <Dropzone onDrop={(acceptedFiles) => handleDropFile(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps(rootProps)}>
            <input {...getInputProps()} />
            <button className="font-bold pointer-events-none bg-blue-600 rounded-full text-bold text-white text-xl px-6 py-4">
              Upload file
            </button>
            <p className="text-lg mt-4 text-gray-800">or drop a file here</p>
          </div>
        </section>
      )}
    </Dropzone>
    // <section className="container">
    //   <div
    //     {...getRootProps({
    //       className:
    //         "shadow-2xl border-dashed border-2 border-gray-300 rounded-lg aspect-video w-full flex items-center justify-center flex-col dropzone",
    //       onClick: () => console.log("click"),
    //       "aria-label": "drag and drop area",
    //     })}
    //   >
    //     <input {...getInputProps()} />
    //     <button className="font-bold pointer-events-none bg-blue-600 rounded-full text-bold text-white text-xl px-6 py-4">
    //       Upload file
    //     </button>
    //     <p className="text-lg mt-4 text-gray-800">or drop a file here</p>
    //   </div>
    // </section>
  );
};

export default DropzoneComponent;
